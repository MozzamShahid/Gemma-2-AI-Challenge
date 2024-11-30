import { useState } from "react"
import { PaperclipIcon, SendIcon } from 'lucide-react'
import axios from 'axios'

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSendMessage(inputValue)
      setInputValue("")
    }
    if (file) {
      await handleFileUpload()
    }
  }

  const handleFileUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post('http://localhost:5000/chat/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('File uploaded successfully:', response.data)
      setFile(null)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div className="p-4 border-t border-gray-200">
      <form onSubmit={handleSubmit} className="flex items-center gap-4 bg-[#2e0b4e] rounded-full border border-[#4c2a64] shadow-xl px-6 py-3">
        <label className="cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <PaperclipIcon className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
        </label>
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
      {file && <p className="mt-2 text-sm text-gray-300">File selected: {file.name}</p>}
    </div>
  )
}