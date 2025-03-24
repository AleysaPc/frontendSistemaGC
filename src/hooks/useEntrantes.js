import { useQuery } from "@tanstack/react-query";
import { EntranteApi } from "../api/correspondencia.api";

export default function useEntrantes(all_data = false, page = 1) {
  return useQuery({
    queryKey: ["entrantes", all_data, page], // Añadimos `all_data` a la queryKey para que sea único
    queryFn: () => EntranteApi.getAll(all_data, page), // Pasamos `all_data` a la función getAll
    staleTime: 1000 * 60 * 5, // Cachea por 5 minutos para mejorar rendimiento
  });
}
