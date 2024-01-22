import { Inter } from "next/font/google";
import "./globals.css";
// import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/Provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jack Tree",
  description: "Your online Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={cn("relative h-full antialiased", inter.className)}>
        <Providers>
          <main className="relative flex min-h-screen flex-1 flex-grow flex-col">
            {/* <NavBar /> */}
            {/* <div className='flex-grow flex-1'>{children}</div> */}
            {/*if footer wa added below uncomment*/}
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
