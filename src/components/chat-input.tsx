import { PaperclipIcon, SendIcon } from 'lucide-react'

export function ChatInput() {
  return (
    <div className="p-6 border-t border-gray-200">
      <div className="flex items-center gap-4 bg-[#2e0b4e] rounded-full border border-[#4c2a64] shadow-xl px-6 py-3">
        <button className="text-gray-300 hover:text-white transition-colors" aria-label="Attach file">
          <PaperclipIcon className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="How can we assist you today?"
          className="flex-1 outline-none text-white bg-[#3e1b66] placeholder-[#b4b4b4] rounded-full px-4 py-2 text-lg"
          aria-label="Chat input"
        />
        <button 
          className="bg-[#1a0533] text-white p-3 rounded-full hover:bg-[#2a0843] transition-colors"
          aria-label="Send message"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
