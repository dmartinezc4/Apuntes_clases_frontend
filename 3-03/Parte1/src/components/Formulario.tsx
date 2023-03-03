import { useState,useEffect } from "react";
import styled from "styled-components"

const Formulario = ()=>{
    const [data,setData]=useState<string[]>([]);
    const [name,setName]=useState<string>("");
    const [page,setPage]=useState<number>(1);

    const fetchData =async()=>{
        try {
        const chars = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
        const json=await chars.json();
        const names=json.results.map((char:any)=>char.name);
        setData(names);
        } catch (error) {
        setData(["Error al bajarme los personajes"]);
        }
    }

    useEffect(()=>{
        fetchData();        
    },[page])

    

    if(data.length===0){
        return(
        <>
            
            
            Loading Data
        </>
        )
        
    }

    return(
        <>
        {data.map(item=>(<div>{item}</div>))}
        
        <input type="text" placeholder="nombre a buscar" onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>{fetchData(),setPage(1)}}>Buscar</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
        <button onClick={()=>setPage(page+1)}>Prev</button>
        </>
    )



}

type InputProps={
    error?:boolean;
}

const Input= styled.input<InputProps>`
   background-color: ${(props)=>props.error ? "red": "white"};
   color:${(props)=>props.error ? "white": "black"}
`



export default Formulario;