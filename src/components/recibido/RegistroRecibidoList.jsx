import { useEffect, useState } from "react";
import { getAllRegistroRecibidos } from "../../api/recibido.api";
import Sidebar from "../../Sidebar/Sidebar";


export function RegistroRecibidoList() {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        async function loadRegistros() {
            const res = await getAllRegistroRecibidos();
            console.log(res.data);
            setRegistro(res.data);
        }
        loadRegistros();
    }, []);
    
    return (
        <div class="flex">

            <div class="w-1/4">
                <Sidebar />
            </div>

            <div class="flex-1 p-5">
                <h2 className="text-xl font-bold">Lista de Registros Recibidos</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-collapse shadow-md border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left border-b">Nro. Registro</th>
                                <th className="px-4 py-2 text-left border-b">Fecha</th>
                                <th className="px-4 py-2 text-left border-b">Referencia</th>
                                <th className="px-4 py-2 text-left border-b">Fojas</th>
                                <th className="px-4 py-2 text-left border-b">Remitente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registro.map((registro) => (
                                <tr key={registro.idrecibido} className="hover:bg-slate-200">
                                    <td className="px-4 py-2 border-b">{registro.idrecibido}</td>
                                    <td className="px-4 py-2 border-b">{registro.fecha}</td>
                                    <td className="px-4 py-2 border-b">{registro.referencia}</td>
                                    <td className="px-4 py-2 border-b">{registro.fojas}</td>
                                    <td className="px-4 py-2 border-b">{registro.remitente}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div></div>
        </div>

    )
    

}
