import { gql, useQuery } from "@apollo/client";
import React, {FC, useEffect, useState} from "react"

const Character:FC<{id:string}>=({id})=>{
    const query= gql`
        query character($id:ID!){ 
         character(id:$id) {
          name
         }
    }
    `
    
    const [charID,setCharID]= useState<string>(id);
    useEffect(()=>{
        refetch({
            variables:{
                id
            }
        })
    },[charID])
    
    const{loading,error,data, refetch}=useQuery<{
        character:{
            name:string
            
        }
    }>(query,{
        variables:{
            id
        }
    });

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }
    if(error){
        return(
            <div>
                oops. Life is to hard to be taken seriously
            </div>
        )
    }
    return(
        <div>
            {data!.character.name}
            <input type="text" onChange={(e)=>setCharID(e.target.value)}/>
        </div>
    )
}

export default Character;