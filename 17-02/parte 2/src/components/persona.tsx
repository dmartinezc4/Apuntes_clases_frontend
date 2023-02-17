type PersonaProps={
    nombre: string,
    apellidos:string,
}

export default function Persona( props:PersonaProps){


    return(
        <>
        <div className="Persona">
         Nombre: {props.nombre} <br/>
         Apellidos: {props.apellidos}<br/>
        </div>
        </>
    )
}