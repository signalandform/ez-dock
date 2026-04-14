import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZ Dock Texas Demo",
  description:
    "Demo site for EZ Dock Texas-style floating dock solutions, products, and quote requests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ezdock/logo.png"
                alt="EZ Dock Texas logo"
                width={120}
                height={42}
                className="h-10 w-auto"
                priority
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                EZ Dock Texas Demo
                </p>
                <p className="text-sm text-slate-600">
                  Floating docks built to last, made in the USA
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <Link href="/" className="text-slate-700 hover:text-sky-700">
                Home
              </Link>
              <Link
                href="/products"
                className="text-slate-700 hover:text-sky-700"
              >
                Products
              </Link>
              <Link
                href="/quote-request"
                className="text-slate-700 hover:text-sky-700"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-sky-700"
              >
                Contact
              </Link>
              <a
                href="tel:8006548168"
                className="rounded-full bg-sky-700 px-4 py-2 text-white transition hover:bg-sky-800"
              >
                (800) 654-8168
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>EZ Dock of Texas, L.P. | 3500 Raider Drive, Hurst, TX 76053</p>
            <p>Weekdays 8:00 AM - 5:00 PM</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
