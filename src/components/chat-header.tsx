import { ArrowUpRight } from 'lucide-react'

export function ChatHeader() {
  return (
    <div className="bg-[#1a0533] text-white p-5 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-all">
      <h1 className="text-2xl font-semibold">
        Chat with <b className="text-[#e9e1ff]">BrainVC</b>
      </h1>
      <a 
        href="#"
        className="flex items-center gap-3 text-sm bg-white/10 px-5 py-3 rounded-full hover:bg-white/20 transition-all ease-in-out duration-300"
      >
        Make your startup better with our new AI Report
        <ArrowUpRight className="w-5 h-5 text-[#e9e1ff]" />
      </a>
    </div>
  )
}
