import type { Metadata } from "next";
import {
  Inter,
  // Montserrat 
}
  from "next/font/google";
// import { Agbalumo } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/aos-init";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";


// const agbalumo = Agbalumo({
//   weight: ["400"],
//   subsets: ["latin"],
// });

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// const montserrat = Montserrat({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: {
    default: "Sebold Refrigeração - Especialistas em Refrigeração e Climatização",
    template: "%s | Sebold Refrigeração",
  },
  description: "Instalação e manutenção de ar condicionado é com a Sebold Refrigeração. Atendemos Joinville e região com qualidade há mais de 20 anos. Confira!",
  keywords: [
    "Refrigeração",
    "Climatização",
    "Instalação",
    "Manutenção",
    "Sebold Refrigeração",
  ],
  authors: [{ name: "Adir Sebold", url: "https://seboldrefrigeracao.com.br" }],
  creator: "Sebold Refrigeração",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seboldrefrigeracao.com.br",
    title: "Sebold Refrigeração - Especialistas em Refrigeração e Climatização",
    images: [
      {
        url: "/assets/logo-cab.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Sebold Refrigeração",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

};

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className="scroll-smooth">
        <body
          suppressHydrationWarning className={`${inter.className} font-sntialiased`}
        >
          <main>
            {children}
            <AosInit />
            <BotaoWhatsapp />
          </main>
        </body>
      </html>
    );
}
