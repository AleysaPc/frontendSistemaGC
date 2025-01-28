import {Link} from 'react-router-dom'

export function Navigation(){
    return(
        <div>
            <h1><Link to="/registro-recibido">Registro Recibido</Link></h1>
            <br/>
            <h1><Link to="/registro-recibido-form">Crear Nuevo Registro</Link></h1>
        </div>
    )
}