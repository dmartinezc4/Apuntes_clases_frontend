import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ServerSideProps = {
    params:{
        url:string;
    }
}
type CharacterProps={
    url:string,
}
type FilmProps={
    url:string
}

type PlanetProps={
    id:number,
    name:string,
    rotation_period:number,
    orbital_period:number,
    diameter:number,
    climate:string,
    gravity:string,
    terrain:string,
    surface_water:number,
    population:number,
    residents:CharacterProps[],
    films:FilmProps[],
    created:string,
    edited:string,
    url:string,
}


export async function getServerSideProps(props:ServerSideProps){
    try{
        
        const url=props.params.url;
        //El id es la página del planeta
        const res=await fetch(`https://swapi.py4e.com/api/planets/${url}`);
        console.log(res);
        const json=await res.json();
        return {props:json};
    }catch(error){
        console.log("Server Error")
    }
}



const Planet=(props: PlanetProps)=>{
    return(
        <>
        <Link href={"/"}>Ir a lista</Link><br/>
        <br/>
        Nombre: {props.name}
        <br/>
        Periodo de rotacion: {props.rotation_period}
        <br/>
        Periodo orbital: {props.orbital_period}
        <br/>
        Diametro: {props.diameter}
        <br/>
        Clima: {props.climate}
        <br/>
        Gravedad: {props.gravity}
        <br/>
        Terreno: {props.terrain}
        <br/>
        Agua en Superficie: {props.surface_water}
        <br/>
        Poblacion: {props.population}
        <br/>
        Residentes: {props.residents}
        <br/>
        Peliculas: {props.films}
        <br/>
        Creado: {props.created}
        <br/>
        Editado: {props.edited}
        </>
    )
}

export default Planet;