import type { Metadata } from "next";
import { Inter, 
  // Montserrat 
} 
  from "next/font/google";
// import { Agbalumo } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsappButton";
import AosInit from "@/components/aos-init";


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
  title: "Sebold Refrigeração - Especialistas em Refrigeração e Climatização",
  description: "Serviços de Refrigeração Residencial e Comercial em Joinville - SC",
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
          <WhatsAppButton />
        </main>
      </body>
    </html>
  );
}
