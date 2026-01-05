import Image from "next/image";
import Sidebar from "./header/Sidebar";


export default function Header() {
 return (
   <header>
        <Image src="/logo.png" alt="Sebold Refrigeracao" width={100} height={100} />
        <Sidebar />

   </header>
 );
}