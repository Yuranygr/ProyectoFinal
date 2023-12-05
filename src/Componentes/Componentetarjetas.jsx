import React, { useEffect, useState } from 'react'
import Tarjetas from './Tarjetas'
import '../Estilos/Componentetarjeta.css'
import axios from 'axios'

const Componentetarjetas = () => {
    const[datos, setDatos] = useState([])
    const ts=2;
    const key= '096b60bebbefccd37c278cf9bc612596';
    const hash= 'bf48e25e5f70371dfb5cc753607377e4';
    const categoria= 'comics'
    const url= `http://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`

    useEffect (() => {
        const   solicitud = async() => {
            try{
            const respuesta = await axios.get(url);
            setDatos (respuesta.data.data.results);
            console.log(datos);
            } catch (error) {
                console.log("Existe un error: ", error)
            }
        };
        solicitud();
    },[]);

    return (
        <>
            <main className='contenedor'>
                {/* <Tarjetas
                    image=""
                    titulo="Comics 1"
                    descripcion="Blabla"
                />
                <Tarjetas
                    image=""
                    titulo="Comic 2"
                    descripcion="Blabla"
                />
                <Tarjetas
                    image=""
                    titulo="Comic 3"
                    descripcion="Blabla"
                />
                <Tarjetas
                    image=""
                    titulo="Comic 4"
                    descripcion="Blabla"
                /> */}

                {datos.map((item) =>(
                    <Tarjetas
                    key={item.id}
                    imagen={`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`}
                    titulo={item.title}
                    />
                ))}
            </main>
        </>
    )
}

export default Componentetarjetas
