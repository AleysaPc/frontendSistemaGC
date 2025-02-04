import { useEffect, useState } from "react";
import { getAllRegistroRecibidos } from "../../api/recibido.api"

export function RegistroRecibidoList() {

    const [registro, setRegistro] = useState([]);
    
        useEffect(() => {
            async function loadRegistros(){
                const res = await getAllRegistroRecibidos()
                setRegistro(res.data)
            }
            loadRegistros()
        }, []);
        return <div>
           
            {registro.map(registro =>(
                <div key={registro.id}>
                    <h1>{registro.referencia}</h1>
                </div>
            ))}
        </div>

}