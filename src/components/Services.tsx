import { AirVent, Thermometer, Wrench, Settings, Refrigerator, BrushCleaning } from "lucide-react";

export default function Services() {
  // Dados dos serviços para evitar repetição de código
  const servicesData = [
    {
      title: "Instalação de Ar Condicionado",
      icon: <AirVent className="text-[#049B8D]" size={40} />,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex tempora iusto magnam."
    },
    {
      title: "Manutenção Preventiva",
      icon: <Settings className="text-[#049B8D]" size={40} />,
      description: "Velit, cum dolor. Ad sed natus voluptatem quam consectetur fugit? Quam saepe sequi."
    },
    {
      title: "Manutenção de Geladeira",
      icon: <Refrigerator className="text-[#049B8D]" size={40} />,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex tempora iusto magnam."
    },
    {
      title: "Reparo em Máquina de Lavar",
      icon: <Wrench className="text-[#049B8D]" size={40} />,
      description: "Ad sed natus voluptatem quam consectetur fugit? Quam saepe sequi cum nulla dolorem quis?"
    },
    {
      title: "Limpeza de Ar Condicionado",
      icon: <BrushCleaning className="text-[#049B8D]" size={40} />,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex tempora iusto magnam."
    },
    {
      title: "Carga de Gás",
      icon: <Thermometer className="text-[#049B8D]" size={40} />,
      description: "Velit, cum dolor. Ad sed natus voluptatem quam consectetur fugit? Quam saepe sequi."
    },
  ];

  return (
    <div className="px-4 py-12" id="services">
      <h2 className="text-3xl mb-12 md:text-4xl text-center">
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