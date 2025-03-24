import { createApi } from "./api.config";
import { createCrudOperations } from "./api.crud";

const apiCorrespondencia = createApi("correspondencia");

export const CorrespondenciaApi = createCrudOperations( apiCorrespondencia, "correspondencia");
export const EntranteApi = createCrudOperations( apiCorrespondencia, "correspondenciaEntrante");
export const SalienteApi = createCrudOperations( apiCorrespondencia, "correspondenciaSaliente");
