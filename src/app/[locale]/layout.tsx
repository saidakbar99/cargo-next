import type { Metadata } from "next";
import Head from 'next/head';
import React from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ToastContainer } from "react-toastify";
import { routing } from '../../i18n/routing';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "cargo",
  description: "cargo",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale = 'ru' } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/svgs/cargo_black.svg" />
      </Head>
      <body className="antialiased font-gilroy text-black">
      <React.StrictMode>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ToastContainer position="bottom-right" />
        </NextIntlClientProvider>
      </React.StrictMode>
      </body>
    </html>
  );
}
