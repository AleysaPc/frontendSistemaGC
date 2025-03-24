import { useQuery } from "@tanstack/react-query";
import { EntranteApi } from "../api/correspondencia.api";

// Hook para obtener un solo producto
export const useEntrante = (id) => {
  return useQuery({
    queryKey: ["entrante", id],
    queryFn: () => EntranteApi.getOne(id),
    enabled: !!id, // Solo ejecuta la consulta si el ID es válido
  });
};
