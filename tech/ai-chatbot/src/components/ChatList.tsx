import React from 'react';
import type { Message } from '../hooks/useChat';
import ChatMessage from './ChatMessage';

interface ChatListProps {
  messages: Message[];
}

const ChatList: React.FC<ChatListProps> = React.memo(({ messages }) => (
  <>
    {messages.map((msg, idx) => (
      <ChatMessage key={idx} msg={msg} />
    ))}
  </>
));

export default ChatList;
