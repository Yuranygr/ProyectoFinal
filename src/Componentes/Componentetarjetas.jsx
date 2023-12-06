import React, { useEffect, useState } from 'react'
import Tarjetas from './Tarjetas'
import '../Estilos/Componentetarjeta.css'
import axios from 'axios'

const Componentetarjetas = () => {
    const [datos, setDatos] = useState([])
    const ts = 2;
    const key = '096b60bebbefccd37c278cf9bc612596';
    const hash = 'bf48e25e5f70371dfb5cc753607377e4';
    const categoria = 'comics'
    const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`

    useEffect(() => {
        const solicitud = async () => {
            try {
                const respuesta = await axios.get(url);
                setDatos(respuesta.data.data.results);
            } catch (error) {
                console.error("Existe un error: ", error)
            }
        };
        solicitud();
    }, [url]);

    return (
        <>
            <main className='contenedor'>
                {datos.length === 0 ? (
                    <div className='text-center cargando'>
                        <div className='spinner-border text-secondary' style={{ width:'3rem', height:'3rem' }} role='status'>
                            <span className='visually-hidden'>Cargando ...</span>
                        </div>
                    </div>
                ) : (
                    datos.map((item) => (
                        <Tarjetas
                            key={item.id}
                            imagen={`${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`}
                            titulo={item.title}
                            descripcion={item.descripcion}
                            id={item.id}
                        />
                    ))
                )}
            </main>
        </>
    )
}

export default Componentetarjetas
