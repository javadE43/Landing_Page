import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/header/Header";

//
import { AppWrapper } from "../context/contextLanguage";
//
const roboto = Roboto({
  weight: ["100", "300", "500", "700", "400"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "landing",
  description: "landing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <AppWrapper>
          <div className="layout__container">
            <div className="layout__container__header">
              <Header />
            </div>
            <div className="layout__container__main">
              {children}
            </div>
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
