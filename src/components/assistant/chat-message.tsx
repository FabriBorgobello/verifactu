import type { Message } from "ai";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "mb-4 flex items-start",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      {!isUser && (
        <Avatar className="mr-2 h-8 w-8">
          <div className="bg-primary text-primary-foreground flex h-full w-full items-center justify-center rounded-full text-xs font-bold">
            AI
          </div>
        </Avatar>
      )}

      <Card
        className={cn(
          "max-w-[80%] rounded-xl px-4 py-3",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted",
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
      </Card>

      {isUser && (
        <Avatar className="ml-2 h-8 w-8">
          <div className="bg-secondary text-secondary-foreground flex h-full w-full items-center justify-center rounded-full text-xs font-bold">
            You
          </div>
        </Avatar>
      )}
    </div>
  );
}
