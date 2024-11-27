import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"

export function ChatContainer() {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  )
}

