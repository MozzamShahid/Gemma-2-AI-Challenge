import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"

export function ChatContainer() {
  return (
    <div className="flex-1 flex flex-col bg-[#1a0533] text-white rounded-xl shadow-xl overflow-hidden transition-all ease-in-out duration-300">
      {/* Chat Header */}
      <div className="ml-6 mr-6 mt-6 mb-4">
        <ChatHeader />
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-auto bg-[#2e0b4e] rounded-lg p-4 mb-4 shadow-md">
        <ChatMessages />
      </div>
      
      {/* Chat Input */}
      <div className="p-4 bg-[#1a0533] border-t border-white/30 transition-all hover:border-white/50">
        <ChatInput />
      </div>
    </div>
  )
}
