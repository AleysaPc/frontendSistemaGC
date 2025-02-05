import { useState } from "react";
import {
  Home,
  FileText,
  Settings,
  FilePlus2,
  ChevronDown,
  Inbox,
} from "lucide-react"; // Íconos
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el dropdown

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Definir el menú con los elementos estándar
  const menuItems = [
    { name: "Inicio", icon: <Home />, path: "/" },
    {
      name: "Nuevo Registro",
      icon: <FilePlus2 />,
      onClick: toggleDropdown, // Usar la función para abrir el dropdown
      isDropdown: true, // Marcar este ítem como un dropdown
    },
    { name: "Bandeja de Entrada", icon: <Inbox />, path: "/registro" }, //Solo pusimos registro...
    { name: "Documentos", icon: <FileText />, path: "/documentos" },
    { name: "Configuración", icon: <Settings />, path: "/configuracion" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white h-screen w-1/4 p-5">
        {/* Menú */}
        <nav className="space-y-3">
          {menuItems.map((item, index) => {
            if (item.isDropdown) {
              // Si es un ítem de dropdown, renderizam  os el botón y el submenú
              return (
                <div key={index}>
                  <button
                    onClick={item.onClick}
                    className="flex items-center w-full p-2 hover:bg-gray-700 rounded"
                  >
                    {item.icon}
                    <span className="flex-1">{item.name}</span>
                    <ChevronDown
                      className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Submenú */}
                  <div
                    className={`ml-6 space-y-2 transition-all duration-300 ease-in-out ${isDropdownOpen
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <Link
                      to="/enviado"
                      className="block p-2 text-gray-300 hover:bg-gray-700 rounded"
                    >
                      Enviado
                    </Link>
                    <Link
                      to="/nuevo-registro"
                      className="block p-2 text-gray-300 hover:bg-gray-700 rounded"
                    >
                      Recibido
                    </Link>
                  </div>
                </div>
              );
            }

            // Para los ítems normales
            return (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Contenido Principal */}
      <div className="flex-1 p-5">
        <h1>Bienvenido a la App</h1>
        {/* Aquí se podría incluir tu lista o tabla */}
      </div>
    </div>
  );
};

export default Sidebar;
