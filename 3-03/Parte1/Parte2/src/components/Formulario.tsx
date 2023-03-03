import Link from "next/link";
import { useState,useEffect } from "react";

type CharType={
    name:string,
    id:string,
}

const Formulario = ()=>{
    const [data,setData]=useState<CharType[]>([]);
    const [name,setName]=useState<string>("");
    const [page,setPage]=useState<number>(1);

    const fetchData =async()=>{
        try {
        const chars = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
        const json=await chars.json();
        const names=json.results.map((char:any)=>char.name);
        const result=json.results.map((char:any)=>({id:char.id,name:char.name,}))
        setData(result);
        } catch (error) {
        setData([{id:"0",name:"Error al bajarme los personajes"}]);
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
        {data.map(item=>(<Link href={`/character/${item.id}`}>{item.name}</Link>))}
        
        
        <input type="text" placeholder="nombre a buscar" onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>{fetchData(),setPage(1)}}>Buscar</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
        <button onClick={()=>setPage(page-1)}>Prev</button>
        </>
    )



}




export default Formulario;