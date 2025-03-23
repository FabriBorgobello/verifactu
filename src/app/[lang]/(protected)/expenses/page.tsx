import { getDictionary, type Locale } from "@/dictionaries";
import { ExpensesDashboardClient } from "./client";

export default async function ExpensesDashboardPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <ExpensesDashboardClient dict={dict} />;
}
