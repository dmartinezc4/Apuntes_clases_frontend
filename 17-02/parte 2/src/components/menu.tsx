import Link from "next/link"
import { isPropertySignature } from "typescript"



export default function Menu(){
    return(
        <><div className="Menu">
            <Link href="/persona1">David</Link>
            <Link href="/persona2">Alberto</Link>
            <Link href="/persona3">Arturo</Link>
        </div>
        </>
    )
}