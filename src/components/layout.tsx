import { Sidebar } from "./sidebar"
import { ChatContainer } from "./chat-container"

export default function Layout() {
  return (
    <div className="flex h-screen bg-[#f8f5ff]">
      <Sidebar />
      <ChatContainer />
    </div>
  )
}

