import LocaleSync from "@/components/LocalSync";
import "antd/dist/reset.css";
import { NextIntlClientProvider } from 'next-intl';
import "../globals.css";
import RenderLayout from "@/components/layout";
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

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
          <RenderLayout>{children}</RenderLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
