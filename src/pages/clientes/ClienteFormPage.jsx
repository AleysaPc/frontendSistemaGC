import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCliente } from "../../hooks/useCliente";
import { ClienteApi } from "../../api/cliente.Api";
import ClienteForm from "../../components/ClienteForm";

const ClienteFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: cliente, isLoading } = useCliente(id);

  const handleSubmit = async (clienteData) => {
    if (id) {
      await ClienteApi.update(id, clienteData);
    } else {
      await ClienteApi.create(clienteData);
    }
    navigate("/clientes");
  };

  if (isLoading) return <p>Cargando datos del cliente...</p>;

  return (
    <div>
      <ClienteForm initialData={cliente} onSubmit={handleSubmit} />
    </div>
  );
};

export default ClienteFormPage;
