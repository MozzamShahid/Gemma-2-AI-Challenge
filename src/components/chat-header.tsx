import { ArrowUpRight } from 'lucide-react'

export function ChatHeader() {
  return (
    <div className="bg-[#1a0533] text-white p-3 rounded-sm flex items-center justify-between">
      <h1 className="text-xl">Chat with <b>BrainVC</b></h1>
      <a 
        href="#"
        className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
      >
        make your startup better with our new AI Report
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  )
}

