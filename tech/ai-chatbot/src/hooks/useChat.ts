import { useState } from 'react';
import ollama from 'ollama/browser';

export interface Message {
  role: 'user' | 'ai';
  content: string;
}

const MODEL = 'deepseek-r1:1.5b';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sanitizeResponse = (text: string) => text.replace(/<[^>]*>/g, '');

  const sendMessage = async (input: string) => {
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const response = await ollama.chat({
        model: MODEL,
        messages: [
          ...messages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content,
          })),
          { role: 'user', content: input },
        ],
      });
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: sanitizeResponse(response.message.content) },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Sorry, something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, sendMessage };
}
