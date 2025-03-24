import { createApi } from "./api.config";
import { createCrudOperations } from "./api.crud";

const apiCliente = createApi("cliente");

export const ClienteApi = createCrudOperations( apiCliente, "cliente");
export const InstitucionApi = createCrudOperations( apiCliente, "institucion");