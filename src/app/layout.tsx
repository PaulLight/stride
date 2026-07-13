import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from '@/lib/magento/apollo-provider';

const inter = Inter({
  weight: ['400', '500', '600'],
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo-sans",
  weight: ['700', '800', '900'],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STRIDE — modern movement/training gear.",
  description: "Modern nextjs powered storefront built with passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
