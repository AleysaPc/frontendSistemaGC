import { useQuery } from "@tanstack/react-query";
import { InstitucionApi } from "../api/cliente.Api";


export const useInstitucion = (id) => {
  return useQuery({
    queryKey: ["institucion", id],
    queryFn: () => InstitucionApi.getOne(id),
    enabled: !!id, // Solo ejecuta la consulta si el ID es válido
  });
};
