import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";
import { Providers } from "./state/provider";

export const metadata: Metadata = {
  title: "Vine Mobility",
  description: "Vine mobility landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Providers>
          <Header />
          <>{children}</>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
