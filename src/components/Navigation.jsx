import {Link} from 'react-router-dom'

export function Navigation(){
    return(
        <div>
            <h1><Link to="/registro-recibido">Registro Recibido</Link></h1>
            <br/>
            <h1><Link to="/registro-recibido-form">Crear Nuevo Registro</Link></h1>
            {/*Para navegacion prueba 1*/}
            <h1><Link to="/Login">Login</Link></h1>
        </div>
    )
}