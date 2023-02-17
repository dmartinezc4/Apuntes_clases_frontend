import Menu from "@/components/menu";
import Link from "next/link";

export default function MenuPage(){
    return(
        <>
        <div>
            <Menu></Menu>
        </div>
        <hr />
        <Link href="/"> Ir a Home </Link>
        
        </>
    )
}