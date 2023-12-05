import React from 'react'

const Tarjetas = (props) => {
    return (
        <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </>
    )
}

export default Tarjetas
