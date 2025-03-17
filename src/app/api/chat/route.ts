import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages,
    system: `You are a helpful tax assistant AI. 
    Provide accurate, clear, and concise information about tax-related questions.
    If you're unsure about specific tax laws or regulations, acknowledge the limitations and suggest consulting with a tax professional.
    Always maintain a professional and helpful tone.`,
  });

  return result.toDataStreamResponse();
}
