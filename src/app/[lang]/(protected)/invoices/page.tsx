import { getDictionary, type Locale } from "@/dictionaries";
import { InvoiceDashboardClient } from "./client";

export default async function InvoiceDashboardPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <InvoiceDashboardClient dict={dict} />;
}
