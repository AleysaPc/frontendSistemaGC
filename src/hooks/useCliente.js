import { useQuery } from "@tanstack/react-query";
import { ClienteApi } from "../api/cliente.Api";


export const useCliente = (id) => {
  return useQuery({
    queryKey: ["cliente", id],
    queryFn: () => ClienteApi.getOne(id),
    enabled: !!id, // Solo ejecuta la consulta si el ID es válido
  });
};
