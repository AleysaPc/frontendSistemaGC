import  Table  from "../../components/shared/Table";
import Sidebar from "../../Sidebar/Sidebar";
import useClientes from "../../hooks/useClientes";
import { Navigation } from "../../components/shared/Navigation";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/shared/Pagination";


export default function ListaClientes() {
  const { currentPage, handlePageChange } = usePagination();
  const { data: response = {} } = useClientes(false, currentPage); // Pasamos `false` para obtener la paginacion
  console.log(response);

  const clientes = response.data?.results || response.data?.data || [];
  const totalClientes = response.data?.count || 0;
  const totalPages = Math.ceil(totalClientes / 10);

  const handleDetallesClick = (cliente) => { //boton
    navigate(`/editarCliente/${cliente.id}`);
  };

  const clientesCampos = [
    { key: "index", label: "N°" },
    
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
          entityName="Clientes"
          listPath="/home" // Al hacer click en el titulo te lleva a otra pagina
          subTitle="Lista de Clientes"
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
        <Table items={clientes} fields={clientesCampos} />
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
