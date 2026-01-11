import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="text-center w-full h-110 flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <h2 className="text-xl font-semibold">Algo deu errado.</h2>
        <p className="text-sm text-gray-500">A página que você procura nao foi encontrada. <br />Sugerimos que volte para a página inicial.</p>
        <Link href="/" className="bg-[#049B8D] px-4 py-2 rounded-md text-white hover:bg-[#037f73] transition-all hover:scale-105 uppercase">Voltar para pagina inícial</Link>
      </div>
    </div>
  );
}