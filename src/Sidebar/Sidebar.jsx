import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  FileText,
  Settings,
  FilePlus2,
  ChevronDown,
  Inbox,
} from "lucide-react";

const SidebarMenu = React.memo(
  ({ title, icon: Icon, items, isOpen, toggleMenu, path }) => (
    <li className="mb-2 rounded hover:shadow hover:bg-gray-500 py-2">
      {/* Si no hay items, renderiza un Link directo */}
      {!items || items.length === 0 ? (
        <Link
          to={path || "#"}
          className="px-3 w-full text-left flex items-center"
        >
          <Icon className="inline-block w-6 h-6 mr-2 -mt-2" />
          {title}
        </Link>
      ) : (
        // Si hay items, renderiza el botón desplegable
        <>
          <button
            aria-expanded={isOpen}
            className="px-3 w-full text-left flex items-center"
            onClick={toggleMenu}
          >
            <Icon className="inline-block w-6 h-6 mr-2 -mt-2" />
            {title}
            <ChevronDown className="inline-block w-4 h-4 ml-auto" />
          </button>
          {isOpen && (
            <ul className="pl-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="rounded hover:shadow hover:bg-blue-950 py-2"
                >
                  <Link to={item.path} className="px-2">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  )
);

const Sidebar = ({ sidebarToggle }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const menus = [
    {
      title: "Home",
      icon: Home,
      items: [
        {label: "Volver al inicio", path: "/home"}
      ],
    },
    {
      title: "Nuevo Registro",
      icon: FilePlus2,
      items: [
        { label: "Enviado", path: "" },
        { label: "Recibido", path: "/nuevo-registro" },
      ],
    },
    {
      title: "Recibido",
      icon: Inbox,
      items: [{ label: "Ver", path: "/registro" }],
    },
  ];
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">QUE</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        {menus.map((menu, index) => (
          <SidebarMenu
            key={index}
            title={menu.title}
            icon={menu.icon}
            items={menu.items}
            isOpen={openMenu === menu.title}
            toggleMenu={() =>
              setOpenMenu(openMenu === menu.title ? null : menu.title)
            }
          />
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
