import React from 'react';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: (e: React.FormEvent) => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend, loading }) => (
  <form onSubmit={onSend} className='flex gap-2 items-center transition-all'>
    <input
      className='flex-1 transition-all border border-gray-300 rounded-md shadow-sm focus:border-primary/30 focus:ring-2 focus:ring-primary/10 px-4 py-2 focus:outline-none'
      placeholder='Type your message...'
      value={value}
      onChange={onChange}
      disabled={loading}
    />
    <button
      className='btn btn-primary transition-all'
      type='submit'
      disabled={loading}
    >
      {loading && <span className='loading loading-spinner loading-xs'></span>}
      Send
    </button>
  </form>
);

export default ChatInput;
