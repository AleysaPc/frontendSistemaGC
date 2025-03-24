import { EntranteApi } from "../api/correspondencia.api";
import { useMutationWithToast } from "./useMutationWithToast";

export const useEntranteMutations = () => {
  const crearEntrante = useMutationWithToast(
    EntranteApi.create,
    "Creando Nuevo Registro...",
    "Registro creado con éxito 🎉",
    "entrantes" // Invalida la query de productos
  );

  const actualizarEntrante = useMutationWithToast(
    ({ id, data }) => EntranteApi.update(id, data),
    "Actualizando registro...",
    "Registro actualizado con éxito ✅",
    "entrantes"
  );

  return { crearEntrante, actualizarEntrante };
};
