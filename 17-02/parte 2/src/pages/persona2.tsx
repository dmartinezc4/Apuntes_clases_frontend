import Menu from "@/components/menu"
import Persona from "@/components/persona"
import Link from "next/link"
import Image from "next/image"

export default function DatosPersonales(){
    return(
        <>
        
        <Menu></Menu><hr />
        <Link href="/"> Ir a Home </Link><hr/><br/>
        <Image src="/Alberto Valero.jpg" alt="Alberto Valero" height="200" width="200"/>
        <Persona nombre="Alberto" apellidos="Valero"></Persona>
        
        </>
    )
}