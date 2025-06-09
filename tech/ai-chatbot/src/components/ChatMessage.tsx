import React from 'react';
import type { Message } from '../hooks/useChat';

interface ChatMessageProps {
  msg: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = React.memo(({ msg }) => (
  <div
    className={`chat ${msg.role === 'user' ? 'chat-end' : 'chat-start'} transition-all`}
  >
    <div
      className={`chat-bubble ${
        msg.role === 'user'
          ? 'bg-primary text-primary-content'
          : 'bg-base-300 text-base-content'
      } transition-all`}
    >
      {msg.content}
    </div>
  </div>
));

export default ChatMessage;
