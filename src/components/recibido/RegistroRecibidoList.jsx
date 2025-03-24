import Table from "../shared/Table";
import Sidebar from "../../Sidebar/Sidebar";
import useEntrantes from "../../hooks/useEntrantes";
import { Navigation } from "../shared/Navigation";
import usePagination from "../../hooks/usePagination";
import Pagination from "../shared/Pagination";
import { ActionButton } from "../shared/ActionButton";
import ArchivoLink from "../shared/ArchivoLink";

export function RegistroRecibidoList() {
  const { currentPage, handlePageChange } = usePagination();
  const { data: response = {} } = useEntrantes(false, currentPage); // Pasamos `false` para obtener la paginacion
  console.log(response);

  const entrantes = response.data?.results || response.data?.data || [];
  const totalEntrantes = response.data?.count || 0;
  const totalPages = Math.ceil(totalEntrantes / 10);

  const handleDetallesClick = (entrante) => {
    navigate(`/editarEntrante/${entrante.id}`);
  };

  const entrantesCampos = [
    { key: "index", label: "N°" },
    { key: "referencia", label: "N° de Registro" },
    { key: "prioridad", label: "Prioridad" },
    { key: "paginas", label: "Páginas" },
    { key: "nombre_remitente", label: "Remitente" },
    {
      key: "ruta",
      label: "Documento",
      render: (item) => <ArchivoLink filePath={item.ruta} />,
    },
    {
      key: "acciones",
      label: "Acciones",
      render: (item) => (
        <ActionButton
          onClick={() => handleDetallesClick(item)}
          label="Editar"
        />
      ),
    },
  ];

  return (
    <div className="flex flex-wrap">
      {/* Sidebar */}
      <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4 p-4">
        <Sidebar />
      </div>

      {/* Navigation y contenido */}
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 p-4">
        <Navigation
          entityName="Documentos Recibidos"
          listPath="/home"
          subTitle="Lista de documentos recibidos"
          actions={[
            { to: "/crear", label: "Crear", icon: null, color: "blue" },
            { to: "/buscar", label: "Buscar", icon: null, color: "green" },
            { to: "/eliminar", label: "Eliminar", icon: null, color: "red" },
            { to: "/editar", label: "Editar", icon: null, color: "yellow" },
            { to: "/ver", label: "Reportes", icon: null, color: "purple" },
          ]}
        />

        <hr className="my-4" />

        {/* Tabla */}
        <Table items={entrantes} fields={entrantesCampos} />
        {/* Agregar paginación */}
        {!response.all_data && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
