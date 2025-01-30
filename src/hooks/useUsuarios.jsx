import { useFetch } from "./useFetch";
import { getAllUsuarios } from "../api/Usuario";

export function useUsuarios() {
  const { data: usuarios, loading, error } = useFetch(getAllUsuarios);
  return { usuarios, loading, error };
}
