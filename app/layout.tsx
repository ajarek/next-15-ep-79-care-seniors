import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const great_vibes = Great_Vibes({
  variable: "--font-great_vibes",
  subsets: ["latin"],
  weight: "400"
})
export const metadata: Metadata = {
  title: "Opieka nad seniorami",
  description: "Opieka nad seniorami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${great_vibes.variable} antialiased`}
      > 
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
      <Navbar/>
        {children}
        <Footer 
        logoUrl="/images/logo.png"
        companyName="Pogodna Jesień"
        email="kontakt@pogodna.pl"
        phone="+48 573 219 230"
        address="ul. Spokojna 123, 78-100 Kołobrzeg"
        family={great_vibes.className}
        socialLinks={{
          facebook: "https://facebook.com/mojafirma",
          instagram: "https://instagram.com/mojafirma",
          linkedin: "https://linkedin.com/company/mojafirma"
        }}
        quickLinks={[
          { title: "Główna", href: "/" },
          { title: "O nas", href: "/about" },
          { title: "Kontakt", href: "/contact" }
          
        ]}
      />
        </ThemeProvider>
      </body>
    </html>
  );
}
