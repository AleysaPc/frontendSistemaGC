import Header from "../../components/Header"
import Sidebar from "../../Sidebar/Sidebar"
import {RegistroRecibidoList} from "../../components/recibido/RegistroRecibidoList"

export function RegistroPage(){
    return(
        <div>
            <Header/><RegistroRecibidoList/>
            </div>
    )
}