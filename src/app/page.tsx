import { About } from "@/components/About";
import { Carousel } from "@/components/Carousel";
import Infos from "@/components/contatos/Infos";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
 return (
   <div className="">
      <Header />
      <NavBar />
      <Carousel />
      <About />
      <Services />
      <Testimonials />
      <Infos />
      <Footer />
   </div>
 );
}