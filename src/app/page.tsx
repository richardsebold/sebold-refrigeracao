import { About } from "@/components/About";
import Infos from "@/components/contatos/Infos";
import Maps from "@/components/contatos/Maps";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
 return (
   <div className="">
      <About />
      <Testimonials />
      <Infos />
      <Footer />
   </div>
 );
}