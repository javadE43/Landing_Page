import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header/Header";

//
import { AppWrapper } from "../context/contextLanguage";
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
