import React from 'react'
import '../Estilos/Login.css'

const Login = () => {
    return (
        <>
            <main className='contenedorlogin'>
                <form className='contenedorformulario'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Usuario</span>
                        <input type="text" className="form-control" placeholder="Ingresar Usuario" aria-label="Ingresar Usuario" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contraseña</span>
                        <input type="text" className="form-control" placeholder="Ingresar Contraseña" aria-label="Ingresar Contraseña" aria-describedby="basic-addon1" required />
                    </div>
                    <button type="submit" className="btn btn-outline-info">Acceder</button>
                </form>
            </main >
        </>
    )
}

export default Login
