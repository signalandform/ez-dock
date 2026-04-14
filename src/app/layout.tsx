import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "EZ Dock of Texas",
  description:
    "Floating dock solutions, product guidance, and project support for residential and commercial waterfront needs.",
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
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-sky-900 px-3 py-2 text-sm font-bold tracking-wide text-white">
                EZ DOCK
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  EZ Dock of Texas
                </p>
                <p className="text-sm text-slate-600">
                  Modular floating dock systems since 2000
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
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
                  Start Project
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-sky-700"
                >
                  Contact
                </Link>
              </nav>
              <a
                href="tel:8006548168"
                className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                (800) 654-8168
              </a>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm text-slate-600 md:grid-cols-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>
              <p>3500 Raider Drive, Hurst, TX 76053</p>
              <p>(800) 654-8168</p>
              <p>sales@ezdocktexas.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                About Us
              </p>
              <p>
                EZ Dock of Texas helps clients design practical and durable
                waterfront systems.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                What We Do
              </p>
              <p>Dock layout planning</p>
              <p>Product selection</p>
              <p>Installation support</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Hours
              </p>
              <p>Weekdays: 8:00 AM - 5:00 PM</p>
              <p>Saturday / Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-slate-200">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>EZ Dock of Texas, L.P.</p>
              <p>Built for residential, commercial, and marina projects</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
