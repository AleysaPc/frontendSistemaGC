import React, { useState, useEffect } from "react";
import { useCliente } from "../hooks/useCliente" // Hook para obtener un cliente por ID
import { useParams } from "react-router-dom";

const ClienteForm = ({ initialData, onSubmit }) => {
  const { id } = useParams(); // Obtener ID de la URL (si existe)
  const { data: clienteData, isLoading } = useCliente(id); // Obtener cliente
  const [cliente, setCliente] = useState(initialData || {
    nombre: "",
    apellido: "",
    cargo: "",
    email: "",
    institucion: "",
  });

  useEffect(() => {
    if (clienteData) {
      setCliente(clienteData); // Rellenar el formulario con los datos obtenidos
    }
  }, [clienteData]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cliente);
  };

  if (isLoading) return <p>Cargando datos del cliente...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600">
        {id ? "Editar Cliente" : "Nuevo Cliente"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={cliente.nombre}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={cliente.apellido}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={cliente.cargo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={cliente.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="institucion"
          placeholder="Institución"
          value={cliente.institucion}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          {id ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
};

export default ClienteForm;
