import Image from "next/image"

// Define the type for the message prop
interface Message {
  sender: 'user' | 'system';
  text: string;
}

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#2e0b4e] h-[500px]">
      {/* Container for messages */}
      {messages.map((msg, index) => (
        <div key={index} className={`flex gap-4 ${msg.sender === 'user' ? '' : 'justify-end'}`}>
          {msg.sender === 'user' ? (
            <div
              className="w-10 h-10 bg-[#e9e1ff] text-[#1a0533] flex items-center justify-center rounded-full font-bold text-lg"
              aria-label="User profile picture"
            >
              M
            </div>
          ) : (
            <div
              className="w-10 h-10 bg-[#e9e1ff] text-[#1a0533] flex items-center justify-center rounded-full font-bold text-lg"
              aria-label="AI profile picture"
            >
              AI
            </div>
          )}

          <div className={`rounded-lg p-4 max-w-[80%] shadow-lg transform transition-all hover:scale-105 ${msg.sender === 'user' ? 'bg-[#1a0533]' : 'bg-[#1a0533] text-white'}`}>
            <div className="font-semibold mb-2">{msg.sender === 'user' ? 'You' : 'System'}</div>
            <p className="text-sm">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
