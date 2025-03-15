import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindWidget } from "@/components/tailwind-widget";
import { env } from "@/config/client";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verifactu",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistMono.variable,
          montserrat.variable,
          "text-foreground flex min-h-screen flex-col overflow-auto font-sans antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="h-screen pt-20">{children}</div>
          {env.NEXT_PUBLIC_ENVIRONMENT && <TailwindWidget position="right" />}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
