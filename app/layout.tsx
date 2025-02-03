import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import { Open_Sans } from "next/font/google";
import TilesMenu from "./components/TilesMenu/TilesMenu";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.scss";
import DesktopContainer from "./components/DesktopContainer/DesktopContainer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iskaypet-Todo",
  description: "Aplicacion animals para prueba tecnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <DesktopContainer>
          <Navbar />
          <TilesMenu />
          {children}
        </DesktopContainer>
      </body>
    </html>
  );
}
