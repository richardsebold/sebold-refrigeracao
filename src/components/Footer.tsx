import consul from '../../public/assets/marcas/consul.png'
import carrier from '../../public/assets/marcas/Carrier.png'
import eletrolux from '../../public/assets/marcas/Electrolux.png'
import fujitsu from '../../public/assets/marcas/Fujitsu.png'
import gree from '../../public/assets/marcas/gree.png'
import elgin from '../../public/assets/marcas/elgin-logo-6.png'
import komeco from '../../public/assets/marcas/komeco.png'
import lg from '../../public/assets/marcas/LG.png'
import midea from '../../public/assets/marcas/midea-logo-1024x411.png'
import samsung from '../../public/assets/marcas/Samsung.png'
import philco from '../../public/assets/marcas/philco.png'
import york from '../../public/assets/marcas/york-1.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { Calendar, Clock } from 'lucide-react'

const brands = [
  { name: "consul", logo: consul },
  { name: "carrier", logo: carrier },
  { name: "electrolux", logo: eletrolux },
  { name: "fujitsu", logo: fujitsu },
  { name: "gree", logo: gree },
  { name: "elgin", logo: elgin },
  { name: "komeco", logo: komeco },
  { name: "LG", logo: lg },
  { name: "midea", logo: midea },
  { name: "mamsung", logo: samsung },
  { name: "mhilco", logo: philco },
  { name: "mork", logo: york },
]

export function Footer() {


  return (
    <section className="bg-[#049B8D] pt-16 pb-8 text-white">
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Principais Marcas que Trabalhamos</h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300'>
                <a
                  href={`https://www.google.com/search?q=comprar ar condiconado+${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={100}
                    height={50}
                    quality={100}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%", // Garante que não estoure o container
                      maxHeight: "60px" // Limita altura para padronizar logotipos verticais
                    }}
                    className="object-contain"
                  />
                </a>
              </div>
            ))}
          </div>

        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Sebold Refrigeração</h3>
            <p>CNPJ: 00.000.000/0000-00</p>
            <p className='mb-4'>Cuidando do seu lar com amor e dedicação.</p>
            <a
              target='_blank'
              href="https://wa.me/554799348969?text=Olá, vim pelo site e gostaria de saber mais informações."
              className='bg-green-500 px-4 py-2 rounded-md inline-block hover:bg-green-600 transition-all hover:scale-105 duration-300 '
            >
              <div className='flex gap-2'>
                <WhatsappLogoIcon className='w-6 h-6' />
                Contato via WhatsApp
              </div>
            </a>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-bold mb-2'>Informações de Contato</h3>

            <p>Email: 
              <a className='underline md:hover:underline' href="mailto:seboldrefrigeracao@gmail.com"> seboldrefrigeracao@gmail.com</a>
            </p>

            <p>Telefone:
              <a className='underline md:hover:underline' href="tel:554799348969"> +55 (47) 9934-8969</a>
            </p>

            <p>Localização: 
               <a href="https://maps.app.goo.gl/FDVmjYRr4UWKyo919" className='cursor-pointer underline md:hover:underline'> Rua Corona Austrális N-61, Jardim Paraiso, Joinville - SC</a>
            </p>

      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='text-2xl font-bold'>Horário de atendimento</h3>
        <div>
          <div className='flex gap-2'>
            <h4 className='text-xl font-semibold'>Dias da semana</h4>
            <Calendar className='relative top-1' size={20} />
          </div>
          <p>Segunda-feira a Sabado</p>
        </div>
        <div>
          <div className='flex gap-2'>
            <h4 className='text-xl font-semibold'>Horário</h4>
            <Clock className='relative top-1' size={20} />
          </div>
          <p>07:00 - 22:00</p>
        </div>

      </div>

      <div>
        <h3 className='text-2xl font-bold mb-2'>Redes sociais</h3>
        <div className='flex gap-4'>
          <a
            href="https://www.facebook.com/p/Sebold-Refrigera%C3%A7%C3%A3o-e-Climatiza%C3%A7%C3%A3o-100054529447699/?locale=pt_BR"
            target='_blank'
            className='hover:text-gray-200 transition-colors'
          >
            <FacebookLogo className='w-8 h-8' />
          </a>
          <a
            href="https://www.instagram.com/seboldrefrigeracao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target='_blank'
            className='hover:text-gray-200 transition-colors'
          >
            <InstagramLogo className='w-8 h-8' />
          </a>
          <a
            href="https://wa.me/554799348969?text=Olá, vim pelo site e gostaria de saber mais informações."
            target='_blank'
            className='hover:text-gray-200 transition-colors'
          >
            <WhatsappLogoIcon className='w-8 h-8' />
          </a>
        </div>
      </div>

    </footer>

      </div >
    </section >
  )
}