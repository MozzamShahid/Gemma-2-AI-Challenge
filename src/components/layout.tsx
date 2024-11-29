import { Sidebar } from "./sidebar"
import { ChatContainer } from "./chat-container"

export default function Layout() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#f8f5ff] to-[#e2c6e9]">
      <div className="w-[280px] bg-[#1a0533] text-white">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col bg-[#2e0b4e] text-white">
        <ChatContainer />
      </div>
    </div>
  )
}
