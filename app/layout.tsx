import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
        </ThemeProvider>
      </body>
    </html>
  );
}
