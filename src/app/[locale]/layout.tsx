import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import "./globals.css";

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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
