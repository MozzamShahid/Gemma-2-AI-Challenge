'use client'

import { useState } from 'react'
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"

// Define the type for the message object
interface Message {
  sender: 'user' | 'system';
  text: string;
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: message },
      { sender: 'system', text: 'Ok' },  // System reply
    ])
  }

  return (
    <div className="flex-1 flex flex-col bg-[#1a0533] text-white">
      {/* Chat Header */}
      <div className="ml-6 mr-6 mt-6 mb-4">
        <ChatHeader />
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-auto bg-[#2e0b4e] rounded-lg p-4 mb-4 shadow-md">
        <ChatMessages messages={messages} />
      </div>
      
      {/* Chat Input */}
      <div className="p-4 bg-[#1a0533] border-t border-white/30 transition-all hover:border-white/50">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}
