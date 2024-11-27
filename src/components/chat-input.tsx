import { PaperclipIcon, SendIcon } from 'lucide-react'

export function ChatInput() {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-2 bg-white rounded-full border shadow-sm px-4 py-2">
        <button className="text-gray-400 hover:text-gray-600" aria-label="Attach file">
          <PaperclipIcon className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Hey, Let us know how can we help you Today!"
          className="flex-1 outline-none text-gray-700"
          aria-label="Chat input"
        />
        <button 
          className="bg-[#1a0533] text-white p-2 rounded-full hover:bg-[#2a0843] transition-colors"
          aria-label="Send message"
        >
          <SendIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

