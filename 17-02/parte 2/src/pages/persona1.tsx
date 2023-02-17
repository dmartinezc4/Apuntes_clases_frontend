import Menu from "@/components/menu"
import Persona from "@/components/persona"
import Link from "next/link"
import Image from "next/image"

export default function DatosPersonales(){
    return(
        <>
        
        <Menu></Menu><hr />
        <Link href="/"> Ir a Home </Link><hr /><br/>
        <Image src="/David Martinez.webp" alt="David Martinez" height="200" width="100"/>
        <Persona nombre="David" apellidos="Martinez"></Persona>
        
        </>
    )
}