import axios from 'axios';  // Import axios

const registroRecibidoApi = axios.create({
  baseURL:'http://localhost:8000/api/registro/registroRecibido/' //Pro jerarquia
})

export const getAllRegistroRecibidos = () => registroRecibidoApi.get("/")
//Funcion que permite enviar una solicitud post
export const CreateRegistro = (data) => registroRecibidoApi.post("/nuevo-registro/", data);
 
