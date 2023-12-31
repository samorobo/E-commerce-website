import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { CartProvider } from "@/components/CartContext";

import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight >>> https://fonts.google.com/variablefonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
      <CartProvider>
        <AuthProvider>
        <Header />
          {children}
        </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}