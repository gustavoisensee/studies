import React, { useRef, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useChat } from './hooks/useChat';
import ChatList from './components/ChatList';
import ChatInput from './components/ChatInput';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { messages, loading, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className='min-h-screen bg-base-200 flex flex-col items-center justify-center transition-all'>
      <div className='w-full max-w-xl bg-base-100 shadow-xl rounded-xl p-6 flex flex-col h-[80vh]'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-3xl font-bold text-center flex-1'>AI Chatbot</h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className='flex-1 overflow-y-auto space-y-4 mb-4 transition-all'>
          <ChatList messages={messages} />
          {loading && (
            <div className='chat chat-start transition-all'>
              <div className='chat-bubble bg-base-300 text-base-content flex items-center gap-2'>
                <span className='loading loading-spinner loading-xs'></span>
                I'm thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={handleSend}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default App;
