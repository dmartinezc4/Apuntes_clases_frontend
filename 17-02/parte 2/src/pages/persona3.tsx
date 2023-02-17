import Menu from "@/components/menu"
import Persona from "@/components/persona"
import Link from "next/link"
import Image from "next/image"

export default function DatosPersonales(){
    return(
        <>
       
       <Menu></Menu><hr />
        <Link href="/"> Ir a Home </Link><hr/><br/>
        <Image src="/Arturo requejo.webp" alt="Arturo Requejo" height="200" width="150"/>
        <Persona nombre="Arturo" apellidos="Requejo"></Persona>
        
        </>
    )
}