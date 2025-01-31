import { Link } from "react-router-dom";
import { LogOut } from "lucide-react"; // Icono de cerrar sesión (puedes agregar más según necesites)
import logo from "../assets/logo.png"; // Logo de la institución

const Header = ({ username }) => {
  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión, por ejemplo, limpiar tokens o redirigir.
    console.log("Cerrar sesión");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      {/* Fila 1 - Nombre del Usuario y Botón Cerrar Sesión */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Bienvenido, {username}</div>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-600 p-2 rounded hover:bg-red-700"
        >
          <LogOut className="mr-2" />
          Cerrar sesión
        </button>
      </div>

      {/* Fila 2 - Logo y Botones */}
      <div className="flex justify-between items-center">
        {/* Logo de la institución */}
        <div className="flex items-center">
          <img src={logo} alt="Logo Institución" className="w-12 h-12 mr-4" />
          <div className="text-2xl font-bold">Mi Institución</div>
        </div>

        {/* Botones de acción o navegación */}
        <div className="flex gap-4">
          <Link to="/" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Inicio
          </Link>
          <Link
            to="/configuracion"
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Configuración
          </Link>
          {/* Aquí puedes agregar más botones si es necesario */}
        </div>
      </div>
    </header>
  );
};

export default Header;
