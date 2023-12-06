import React from 'react'
import { Link } from 'react-router-dom'

const Tarjetas = (props) => {
    return (
        <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imagen} className="card-img-top" alt={props.titulo} title={props.titulo} />
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className='card-text'>{props.descripcion}</p>
                        <Link className='btn btn-primary' to={`/tarjetas/${props.id}`}>Ver más</Link>
                    </div>
                </div>
        </>
    )
}

export default Tarjetas
