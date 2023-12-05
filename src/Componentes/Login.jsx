import React from 'react'
import '../Estilos/Login.css'

const Login = () => {
    return (
        <>
            <main className='contenedorlogin'>
                <div className='contenedorformulario'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Usuario</span>
                        <input type="text" className="form-control" placeholder="Ingresar Usuario" aria-label="Ingresar Usuario" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contraseña</span>
                        <input type="text" className="form-control" placeholder="Ingresar Contraseña" aria-label="Ingresar Contraseña" aria-describedby="basic-addon1" />
                    </div>
                    <button type="button" className="btn btn-outline-info">Acceder</button>
                </div>
            </main >
        </>
    )
}

export default Login
