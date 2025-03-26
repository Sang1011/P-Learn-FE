import "../globals.css";
import "antd/dist/reset.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import { cookies, headers } from "next/headers";
import LocaleSync from "@/components/LocalSync";
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  return (
    <html lang={locale}>
      <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&subset=vietnamese"
        rel="stylesheet"
      />
        <title>P-Learn Web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NextIntlClientProvider>
          <LocaleSync/>
          {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
