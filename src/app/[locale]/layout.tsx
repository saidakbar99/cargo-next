import type { Metadata } from "next";
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
      <body className="antialiased font-gilroy text-black">
        <NextIntlClientProvider messages={messages}>
          {children}
          <ToastContainer position="bottom-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
