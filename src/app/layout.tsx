import React from "react";
import "./globals.css";

import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/PoppinsRegular-B2Bw.otf",
  variable: "--font-poppins",
  weight: "300 400 500 600 700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Infinity Mall </title>
        <meta name="description" content="Infinity Mall" />

        <link rel="canonical" href="https://infinitymall.com/" />
      </head>

      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
