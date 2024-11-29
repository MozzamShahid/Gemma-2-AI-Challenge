import { useState } from "react"
import { PaperclipIcon, SendIcon } from 'lucide-react'

// Define the type for the props
interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSendMessage(inputValue)
      setInputValue("") // Clear input field after sending
    }
  }

  return (
    <div className="p-4 border-t border-gray-200">
      <form onSubmit={handleSubmit} className="flex items-center gap-4 bg-[#2e0b4e] rounded-full border border-[#4c2a64] shadow-xl px-6 py-3">
        <button className="text-gray-300 hover:text-white transition-colors" aria-label="Attach file">
          <PaperclipIcon className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="How can we assist you today?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 outline-none text-white bg-[#2e0b4e] placeholder-[#b4b4b4] px-4 py-2 text-lg"
          aria-label="Chat input"
        />
        <button 
          type="submit"
          className="bg-[#1a0533] text-white p-3 rounded-full hover:bg-[#2a0843] transition-colors"
          aria-label="Send message"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
