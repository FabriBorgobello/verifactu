"use client";

import { useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, FileText } from "lucide-react";
import { QuickActionButton } from "./quick-action-button";
import { ChatMessage } from "./chat-message";
import { Dictionary } from "@/dictionaries";

interface TaxAssistantChatProps {
  dict: Dictionary;
}

export function TaxAssistantChat({ dict }: TaxAssistantChatProps) {
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

  // Quick action templates
  const QUICK_ACTIONS = [
    {
      title: dict.assistant.quickActions.taxDeductions.title,
      description: dict.assistant.quickActions.taxDeductions.description,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: dict.assistant.quickActions.filingStatus.title,
      description: dict.assistant.quickActions.filingStatus.description,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: dict.assistant.quickActions.taxCredits.title,
      description: dict.assistant.quickActions.taxCredits.description,
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: dict.assistant.quickActions.deadline.title,
      description: dict.assistant.quickActions.deadline.description,
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  return (
    <Card className="w-full rounded-lg border">
      <div className="flex h-[600px] flex-col">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-6 p-6">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-medium">{dict.assistant.welcome}</h3>
              <p className="text-muted-foreground">
                {dict.assistant.welcomeDescription}
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
          <div className="flex-1 overflow-auto p-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        <div className="flex-shrink-0 border-t p-4">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input
              name="message"
              placeholder={dict.assistant.inputPlaceholder}
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
      </div>
    </Card>
  );
}
