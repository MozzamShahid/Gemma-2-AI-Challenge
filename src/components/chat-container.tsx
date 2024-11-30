'use client'

import { useState, useEffect } from 'react'
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import axios from 'axios'

interface Message {
  sender: 'user' | 'system';
  text: string;
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/chat/messages')
      setMessages(response.data.map((msg: any) => ({
        sender: msg.user_id ? 'user' : 'system',
        text: msg.content
      })))
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  const handleSendMessage = async (message: string) => {
    try {
      const response = await axios.post('http://localhost:5000/chat/messages', {
        content: message,
        user_id: 1 // Replace with actual user ID when authentication is implemented
      })
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: message },
        { sender: 'system', text: response.data.ai_message.content }
      ])
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-[#1a0533] text-white">
      <div className="ml-6 mr-6 mt-6 mb-4">
        <ChatHeader />
      </div>
      
      <div className="flex-1 overflow-auto bg-[#2e0b4e] rounded-lg p-4 mb-4 shadow-md">
        <ChatMessages messages={messages} />
      </div>
      
      <div className="p-4 bg-[#1a0533] border-t border-white/30 transition-all hover:border-white/50">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}

