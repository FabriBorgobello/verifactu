import { TaxAssistantChat } from "@/components/assistant/tax-assistant-chat";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function AssistantPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 md:gap-8 md:p-6">
          <PageHeader
            title="Tax Assistant"
            description="Your AI-powered tax expert. Ask questions, upload documents, and get the tax help you need."
          />
          <Card className="w-full overflow-hidden">
            <CardContent>
              <TaxAssistantChat />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
