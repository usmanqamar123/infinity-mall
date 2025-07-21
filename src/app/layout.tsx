import React from "react";
import "./globals.css";

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

      <body>{children}</body>
    </html>
  );
}
