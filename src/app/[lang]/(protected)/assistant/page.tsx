import { getDictionary, type Locale } from "@/dictionaries";
import { TaxAssistantChat } from "@/components/assistant/tax-assistant-chat";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default async function AssistantPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <PageHeader
            title={dict.assistant.title}
            description={dict.assistant.description}
          />
          <Card className="w-full overflow-hidden">
            <CardContent>
              <TaxAssistantChat dict={dict} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
