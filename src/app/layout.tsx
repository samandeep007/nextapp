import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, //This is the only parameter we are passing to the function, which is the children prop.
}: Readonly<{
  //This is a readonly type, which means that the object cannot be modified after it is created. : is used to specify the type of the object.
  children: React.ReactNode; //This is the type of the children prop, which is a React node. React node is a type that can be a React element, a string, a number, or an array of React nodes.
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="bg-red-400 border-white border-spacing-11 border-4"> */}
 <h1>outer layout item </h1>
        {children}

      </body>
    </html>
  );
}
