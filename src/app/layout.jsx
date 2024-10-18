import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header.component";
import { Footer } from "@/components/footer.component";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "NFTBoost | Explore um Universo Digital de Colecionáveis Únicos!",
  description: "Projeto criado para o Curso Codeboost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
