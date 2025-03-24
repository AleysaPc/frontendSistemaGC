import { useQuery } from "@tanstack/react-query";
import { ClienteApi } from "../api/cliente.Api";

export default function useClientes(all_data = false, page = 1) {
  return useQuery({
    queryKey: ["clientes", all_data, page], // Añadimos `all_data` a la queryKey para que sea único
    queryFn: () => ClienteApi.getAll(all_data, page), // Pasamos `all_data` a la función getAll
    staleTime: 1000 * 60 * 5, // Cachea por 5 minutos para mejorar rendimiento
  });
}
