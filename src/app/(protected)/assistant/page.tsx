import { TaxAssistantChat } from "@/components/assistant/tax-assistant-chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-5xl items-center justify-between text-sm">
        <h1 className="mb-8 text-center text-4xl font-bold">Tax Assistant</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Your AI-powered tax expert. Ask questions, upload documents, and get
          the tax help you need.
        </p>
        <TaxAssistantChat />
      </div>
    </main>
  );
}
