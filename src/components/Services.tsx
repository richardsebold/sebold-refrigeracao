import { AirVent, Thermometer, Wrench, Settings, Refrigerator, BrushCleaning } from "lucide-react";

export default function Services() {
  // Dados dos serviços para evitar repetição de código
const servicesData = [
    {
      title: "Instalação de Ar Condicionado",
      icon: <AirVent className="text-[#049B8D]" size={40} />,
      description: "Instalação técnica seguindo normas do fabricante, garantindo dimensionamento correto, acabamento impecável e máxima eficiência energética."
    },
    {
      title: "Manutenção Preventiva",
      icon: <Settings className="text-[#049B8D]" size={40} />,
      description: "Evite falhas repentinas e gastos elevados. Nossa revisão periódica aumenta a vida útil do aparelho e reduz o consumo de energia."
    },
    {
      title: "Manutenção de Geladeira",
      icon: <Refrigerator className="text-[#049B8D]" size={40} />,
      description: "Diagnóstico rápido e preciso para falhas de refrigeração ou elétrica. Recuperamos a performance ideal para conservar seus alimentos."
    },
    {
      title: "Reparo em Máquina de Lavar",
      icon: <Wrench className="text-[#049B8D]" size={40} />,
      description: "Soluções para máquinas com ruído, vazamentos ou falhas no ciclo. Utilizamos peças de qualidade para restaurar o funcionamento perfeito."
    },
    {
      title: "Limpeza de Ar Condicionado",
      icon: <BrushCleaning className="text-[#049B8D]" size={40} />,
      description: "Higienização profunda que elimina fungos e bactérias. Garanta um ar mais saudável para sua família e melhore o rendimento do aparelho."
    },
    {
      title: "Carga de Gás",
      icon: <Thermometer className="text-[#049B8D]" size={40} />,
      description: "Reposição de fluido refrigerante com detecção prévia de vazamentos. Seu equipamento voltando a gelar com a potência máxima."
    },
  ];

  return (
    <div className="px-4 pb-12" id="services">
      <h2 className="text-3xl mb-20 md:text-4xl text-center">
        Nossos <strong className="font-bold">Serviços</strong>
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12 lg:px-0 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full bg-white"
          >

            <div className="flex flex-col items-center justify-center gap-3 mb-4 min-h-20">
              {service.icon}
              <h3 className="font-semibold text-xl text-center leading-tight">
                {service.title}
              </h3>
            </div>

            <p className="text-center text-gray-600 flex-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}