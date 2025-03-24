import { ClienteApi } from "../api/cliente.Api";
import { useMutationWithToast } from "./useMutationWithToast";

export const useClienteMutations = () => {
  const crearCliente = useMutationWithToast(
    ClienteApi.create,
    "Creando Nuevo Registro...",
    "Registro creado con éxito 🎉",
    "clientes" // Invalida la query de productos
  );

  const actualizarCliente = useMutationWithToast(
    ({ id, data }) => ClienteApi.update(id, data),
    "Actualizando registro...",
    "Registro actualizado con éxito ✅",
    "clientes" //llave con las que se manejan los hooks
  );

  return { crearCliente, actualizarCliente };
};
