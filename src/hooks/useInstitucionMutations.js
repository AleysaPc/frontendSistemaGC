import { ClienteApi, InstitucionApi } from "../api/cliente.Api";
import { useMutationWithToast } from "./useMutationWithToast";

export const useInstitucionMutations = () => {
  const crearInstitucion = useMutationWithToast(
    InstitucionApi.create,
    "Creando Nuevo Registro...",
    "Registro creado con éxito 🎉",
    "institucion" // Invalida la query de productos
  );

  const actualizarInstitucion = useMutationWithToast(
    ({ id, data }) => ClienteApi.update(id, data),
    "Actualizando registro...",
    "Registro actualizado con éxito ✅",
    "entrantes"
  );

  return { crearEntrante, actualizarEntrante };
};
