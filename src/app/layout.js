import "./globals.css";

export const metadata = {
  title: "NFTBoost",
  description: "Projeto criado para o Codeboost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
