import { stringify } from "querystring";
import { useState } from "react";

const Formulario = ()=>{
    const [edad,setEdad] = useState<number>(0); //variable de estado que se llama edad que se modifica con set edad
    const [emailError,setEmailError] = useState<boolean>(false)
    
    const validateEmail =(email:string):boolean=>{
        
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            return true;
        }
        return false;

    }
    
    return(
        <>
         Introduce tu nombre: <input type="string"/><br/>
         Introduce tu edad: <input type="number" onChange={(e)=>setEdad(parseInt(e.target.value))}/><br/>            
            {edad>14 && (
                <>
                Introduce tu correo: <input type="string"  onBlur={(e)=>setEmailError(!validateEmail(e.target.value))}
                 onChange={(e)=>{if(emailError)setEmailError(!validateEmail(e.target.value))}}/><br/>
                
                <br/>
                {emailError&& <>El email es incorrecto</>}
           </>
            )}
        </>
    )
}
export default Formulario;