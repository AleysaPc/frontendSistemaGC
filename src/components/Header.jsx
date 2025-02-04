import { Link } from "react-router-dom";
import { LogOut, Stamp } from "lucide-react"; // Importamos el icono de sello
import logo from "../assets/you.jpg"; // Logo de la institución

const Header = ({ username }) => {
  const handleLogout = () => {
    console.log("Cerrar sesión");
  };

  return (
    <header className="text-white ">
      {/* Fila 1 - Logo, Nombre de la Institución y boton */}
      <div className="flex justify-between items-center bg-gray-800">
        <div className="flex items-center py-3 px-5">
          <img src={logo} alt="Logo Institución" className="w-12 h-12 mr-4" />
          <div className="text-2xl font-bold">EMPRESA AF</div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center bg-transparent p-2"
        >
          <LogOut className="text-xl text-red-600 hover:text-white " />
          <h1 className="text-white text-lg p-2">Salir</h1>
        </button>
      </div>

      {/* Fila 2 - Bienvenida (Izquierda), Sello (Centro), Configuración (Derecha) */}
      <div className="flex items-center gap-x-14 bg-stone-500 px-5"> 

        {/* Alinea elementos y agrega separación */}
        <div className="text-center font-normal">
          Bienvenido: Admin {username}
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-400"
        >
          <Stamp className="text-white w-6 h-6" />
          <h1 className="text-white text-lg">Sello</h1>
        </Link>
      </div>
      <div className="bg-gray-800 ">
        <br />
      </div>
    </header>
  );
};

export default Header;
