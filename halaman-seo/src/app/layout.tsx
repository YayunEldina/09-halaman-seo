import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '../components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata:Metadata = {
  title: "Website Pribadi",
  description: "Website pribadi untuk menampilkan proyek dan esai.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}