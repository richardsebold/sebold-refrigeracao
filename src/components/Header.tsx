import Image from "next/image";
import Sidebar from "./header/Sidebar";
import { SidebarTrigger } from "./ui/sidebar";


export default function Header() {
  return (
    <header>
      <div className="flex w-full flex-col md:flex-row justify-center items-center p-4 bg-[#02BDD7]">
        <div>
          <Image src="/logo.png" alt="Sebold Refrigeracao" width={100} height={100} />
        </div>
        <nav className="mt-6">
          <ul className="flex gap-4 items-center justify-center">
            <li className="p-2 bg-white rounded-md"><h2>HOME</h2></li>
            <li className="p-2 bg-white rounded-md"><h2>SOBRE</h2></li>
            <li className="p-2 bg-white rounded-md"><h2>SERVIÇOS</h2></li>
            <li className="p-2 bg-white rounded-md"><h2>CONTATOS</h2></li>
          </ul>
        </nav>
      </div>


    </header>
  );
}