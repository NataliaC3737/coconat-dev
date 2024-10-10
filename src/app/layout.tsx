import type { Metadata } from "next";
import "./globals.scss";

import { Bagel_Fat_One } from "@next/font/google";

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"], // Puedes agregar más subsets si los necesitas
});

export const metadata: Metadata = {
  title: "Coconat Dev",
  description: "Software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bagelFatOne.className} antialiased`}>{children}</body>
    </html>
  );
}
