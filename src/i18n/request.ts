import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const lang = (await cookies()).get("language")?.value;
  const locale = lang
    ? lang
    : "vi";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
