"use client";

import { useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Send, FileText } from "lucide-react";
import { QuickActionButton } from "./quick-action-button";
import { ChatMessage } from "./chat-message";

// Quick action templates
const QUICK_ACTIONS = [
  {
    title: "Tax Deductions",
    description: "What tax deductions am I eligible for?",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Filing Status",
    description: "Which filing status should I choose?",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Tax Credits",
    description: "What tax credits can I claim?",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Deadline",
    description: "When is the tax filing deadline this year?",
    icon: <FileText className="h-4 w-4" />,
  },
];

export function TaxAssistantChat() {
  const { messages, input, handleInputChange, handleSubmit, status, append } =
    useChat({
      api: "/api/chat",
    });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleQuickAction = (message: string) => {
    append({
      role: "user",
      content: message,
    });
  };

  return (
    <Card className="w-full overflow-hidden rounded-lg border">
      <div className="flex h-[600px] flex-col">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-6 p-6">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-medium">Welcome to Tax Assistant</h3>
              <p className="text-muted-foreground">
                Ask any tax-related question or choose from the quick actions
                below.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
              {QUICK_ACTIONS.map((action, index) => (
                <QuickActionButton
                  key={index}
                  title={action.title}
                  description={action.description}
                  icon={action.icon}
                  onClick={() => handleQuickAction(action.description)}
                />
              ))}
            </div>
          </div>
        ) : (
          <ScrollArea className="flex-1 p-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-2 border-t p-4"
        >
          <Input
            name="message"
            placeholder="Ask a tax question..."
            value={input}
            onChange={handleInputChange}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            disabled={status === "streaming" || !input.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </Card>
  );
}
