import axios from 'axios';  // Import axios

export const getAllRegistroRecibidos = () => {
  return axios.get('http://localhost:8000/api/registro_recibido/'); // Por jerarquia
}