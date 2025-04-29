import "antd/dist/reset.css";
import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";
import { ReduxProvider } from "@/contexts/ReduxContext";
 
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
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
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
