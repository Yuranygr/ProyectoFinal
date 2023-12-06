import axios from 'axios';
import '../Estilos/Detalletarjeta.css'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

const Detalletarjeta = () => {
    const [detalle, setDetalle] = useState ("");
    const {id} = useParams();
    const ts=2;
    const key= '096b60bebbefccd37c278cf9bc612596';
    const hash= 'bf48e25e5f70371dfb5cc753607377e4';
    const categoria= 'comics'
    const url= `https://gateway.marvel.com/v1/public/${categoria}/${id}?ts=${ts}&apikey=${key}&hash=${hash}`

    useEffect(()=> {
        const solicitud =async ()=>{
        try {
            const respuesta = await axios.get(url);
            setDetalle(respuesta.data.data.results[0]);
            console.log(respuesta.data.data.results[0]);
            } catch (error) {
              console.error("Existe un error: ", error)
          }
        };
        solicitud();       
     }, []);

     if (!detalle || !detalle.thumbnail) {
        return (
            <div className='text-center cargando'>
            <div className='spinner-border text-secondary' style={{width: '3rem', height: '3rem'}} role='status'>
            <span className='visually-hidden'>Cargando...</span>
            </div>
            </div>
        );
     }

  return (
    <main className='contenedordetalle'>
      <div className='contenedorimagen'>
        <img src={`${detalle.thumbnail.path}/portrait_fantastic.${detalle.thumbnail.extension}`} alt={detalle.title}></img>
        </div>
        <div className='contenedortitulo'>
            <h2>{detalle.title}</h2>
            <h3>Fecha de Publicación: </h3>
            <p>{detalle.dates[0].date}</p>
      </div>
    </main>
  );
};

export default Detalletarjeta
