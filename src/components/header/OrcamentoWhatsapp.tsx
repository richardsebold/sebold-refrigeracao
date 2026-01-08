import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function OrcamentoWhatsapp() {
  return (
    <div>
      <div className="bg-[#049B8D] flex flex-col items-center justify-center text-center p-3">
        <p className="text-sm font-semibold">Especialista em instalaçao de Ar Condicionado, conserto de geladeiras e maquina de lavar.</p>

        <div className="bg-[#25D366] mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-sm">
          <WhatsappLogoIcon color="white" size={20} weight="regular" />
          <h2 className="text-sm uppercase">Solicitar um orçamento</h2>
        </div>
      </div>
    </div>
  );
}