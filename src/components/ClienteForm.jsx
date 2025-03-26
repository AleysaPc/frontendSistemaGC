import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCliente } from "../hooks/useCliente";
//import { useInstitucion } from "../hooks/useInstitucion";
import { useClienteMutations } from "../hooks/useClienteMutations";
import { InputField } from "../components/shared/InputField";
import { SelectField } from "../components/shared/SelectField";
import { ActionButton } from "../components/shared/ActionButton";
import { FaArrowLeft } from "react-icons/fa";

export default function ClienteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idUsuario = () => localStorage.getItem("id_usuario");

  const { crearCliente , actualizarCliente  } = useClienteMutations();
  console.log(crearCliente, actualizarCliente); // Verifica si están definidos
  //const { data: { data: institucion = [] } = {} } = useInstitucion();
  const { data: cliente, isLoading } = useCliente(id);

  const [formValues, setFormValues] = useState({
    id: "",
    nombre: "",
    apellido: "",
    cargo: "",
    email: "",
    //id_institucion: "",

  });

  //const institucionOptions = () =>
    //institucion.map(({ id_institucion, nombre_institucion }) => ({
      //id: id_institucion,
      //nombre: nombre_institucion,
    //}));

  useEffect(() => {
    if (cliente?.data) {
      const {
        id,
        nombre,
        apellido,
        cargo,
        email,
        //id_institucion,

      } = cliente.data;
      setFormValues({
        id: id || "",
        nombre: nombre || "",
        apellido: apellido || "",
        cargo: cargo || "",
        email: email || "",
        //id_institucion: id_institucion || "",
      });
    }
  }, [cliente]);

  const handleInputChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleToggleChange = (value) => {
    setFormValues((prevState) => ({ ...prevState, estado: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, ...data } = formValues;

    //const dataToSend = {
      //...data,
      //id_institucion: Number(formValues.id_institucion),
      //usuario_modificacion: idUsuario,
      // ...(id ? {} : { usuario_creacion: idUsuario }),
    // };

    const mutation = id ? actualizarCliente : crearCliente;
    mutation.mutate(
      { id: id || undefined, data }, //dataToSend
      { onSuccess: () => navigate("/clientes") }
    );
  };

  if (isLoading) return <p>Cargando Datos...</p>;

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
          {formValues.id ? "Editar Producto" : "Crear Producto"}
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
          label="apellido"
          type="text"
          name="apellido"
          value={formValues.apellido}
          onChange={handleInputChange}
        />
        <InputField
          label="Cargo"
          type="text"
          name="cargo"
          value={formValues.cargo}
          onChange={handleInputChange}
        />
        <InputField
          label="email"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {/* <SelectField
          label="Institucion"
          name="institution"
          value={formValues.id_institucion}
          onChange={handleInputChange}
          options={institucionOptions()}
        /> */}
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