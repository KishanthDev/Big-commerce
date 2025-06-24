import { ClerkProvider } from "@clerk/nextjs";
import AuthLayout from "@/components/layouts/AuthLayout";
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';


export default async function Layout({ children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/homeData/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClerkProvider>
        <AuthLayout>{children}</AuthLayout>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}
