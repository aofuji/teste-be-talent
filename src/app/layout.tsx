import type { Metadata } from "next";

import "./globals.css";
import { roboto } from "@/utils/fonts";
import Header from "@/components/Header";
import QueryProvider from "@/core/query-provider";

export const metadata: Metadata = {
  title: "Teste BeTalent",
  description: "Teste BeTalent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} antialiased`}>
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
