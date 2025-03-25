import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCliente } from "../hooks/useCliente";
import { useClienteMutations } from "../hooks/useClienteMutations"
import { InputField } from "../components/shared/InputField";
import { SelectField } from "./shared/SelectField";
//import { ToggleSwitch } from "@/components/shared/ToggleSwitch";
import { ActionButton } from "@/components/shared/ActionButton";
import { FaArrowLeft } from "react-icons/fa";

export default function ClienteForm() {
  const { id } = useParams ();
  const navigate = useNavigate();

  const { crearCliente, actualizarCliente } = useClienteMutations();
  const { data: cliente, isLoading } = useCliente(id);

  const [formValues, setFormValues] = useState({
    id : "",
    nombre : "",
    apellido : "",
    cargo : "",
    email : "",
    institucion :"",
    
  });


  useEffect(() => {
    if (cliente?.data) {
      const {
        id,
        nombre,
        apellido,
        cargo, 
        email,
        institucion,
      } = cliente.data;
      setFormValues({
        id: id || "",
        nombre: nombre || "",
        apellido: apellido || "",
        cargo: cargo || "",
        email: email || "",
        institucion: institucion || "",
      });
    }
  }, [cliente]);

  const handleInputChange = useCallback((e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleToggleChange = (value) => {
    setFormValues((prevState) => ({ ...prevState, estado: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, ...data } = formValues; //Se extrae el id del formValues

    console.log(data);

    const mutation = id ? actualizarCliente : crearCliente;
    mutation.mutate(
      { id: id || undefined, data },
      { onSuccess: () => navigate("/clientes") }
    );
  };

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <ActionButton
          to="/clientes"
          label="Volver"
          icon={FaArrowLeft}
          color="blue"
        />
        <h1 className="text-2xl font-semibold text-blue-900">
          {formValues.id ? "Editar" : "Crear Nuevo Registro"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Nombre"
          type="text"
          name="nombre"
          value={formValues.nombre}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Apellido"
          type="text"
          name="apellido"
          value={formValues.apellido}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Cargo"
          type="text"
          name="cargo"
          value={formValues.cargo}
          onChange={handleInputChange}
        />
        <InputField
          label="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          
        />
      
        <ActionButton
          type="submit"
          label={formValues.id ? "Guardar Cambios" : "Crear Registro"}
          color="blue"
          disabled={crearCliente.isLoading || actualizarCliente.isLoading}
        />
      </form>
    </div>
  );
}