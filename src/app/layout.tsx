import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { Head } from "next/document";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Maximiliano Jofré | Portfolio",
  description: "Generado con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/apx-school/image/upload/v1691189112/Jofr%C3%A9__2_-removebg-preview_mmfei6.png"
        />
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
