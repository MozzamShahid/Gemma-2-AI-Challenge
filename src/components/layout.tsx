import { Sidebar } from "./sidebar"
import { ChatContainer } from "./chat-container"

export default function Layout() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#f8f5ff] to-[#e2c6e9]">
      <div className="w-[280px] bg-[#1a0533] text-white shadow-lg rounded-xl transition-transform hover:scale-105 ease-in-out duration-300">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col bg-[#2e0b4e] text-white rounded-xl shadow-lg overflow-hidden transition-all ease-in-out duration-300">
        <ChatContainer />
      </div>
    </div>
  )
}
