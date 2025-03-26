import Table from "../../components/shared/Table";
import Sidebar from "../../Sidebar/Sidebar";
import useClientes from "../../hooks/useClientes";
import { Navigation } from "../../components/shared/Navigation";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/shared/Pagination";
import { ActionButton } from "../../components/shared/ActionButton";
import { useNavigate } from "react-router-dom";


export default function ListaClientes() {
  const navigate = useNavigate()
  const { currentPage, handlePageChange } = usePagination();
  const { data: response = {} } = useClientes(false, currentPage); // Pasamos `false` para obtener la paginacion
  console.log(response);

  const clientes = response.data?.results || response.data?.data || [];
  const totalClientes = response.data?.count || 0;
  const totalPages = Math.ceil(totalClientes / 10);

  //funcion llamada que recibe un parametro = cliente
  const handleDetallesClick = (cliente) => { //boton
    console.log(cliente.id)
    navigate(`/clienteEditar/${cliente.id}`); //con navigate redirigimos a la pagina de editar
  };

  const clientesCampos = [
    { key: "index", label: "N°" },
    { key: "nombre", label: "nombre" },
    { key: "apellido", label: "apellido" },
    { key: "cargo", label: "cargo" },
    //{ key: "nombre_institucion", label: "Institucion" },
    
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

  console.log("Clientes", clientes);

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
            { to: "/cliente/nuevo", label: "Crear", icon: null, color: "blue" },
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
