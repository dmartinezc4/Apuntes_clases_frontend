import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const name ="Alberto";
  return (
    <>
    <div>
      Hola {name} <br/>
      Tu nombre tiene {name.length} letras <br/>
      <Link href="https://www.google.es/">Ve a Google</Link><br/>
      <a href="https://abc.com">Mira el abc</a><br/>
      <Image src="/descarga.jpg" alt="Morgan Freeman" height="200" width="200"/>
    </div>
      
    </>
  )
}
