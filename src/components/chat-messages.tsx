import Image from "next/image"

export function ChatMessages() {
  return (
    <div className="flex-1 overflow-auto p-6 space-y-6 bg-[#2e0b4e]">
      {/* Sarah's Message */}
      <div className="flex gap-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Sarah's profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="bg-[#e9e1ff] rounded-lg p-4 max-w-[80%] shadow-lg transform transition-all hover:scale-105">
          <div className="font-semibold mb-2 text-[#1a0533]">Sarah</div>
          <p className="text-sm text-gray-800">Hey, Here is a Brand Presentation. Can you help me in checking the Startup's Current Stats? Is it fit the current success scenario, and where am I lacking?</p>
        </div>
      </div>
      
      {/* BrainVC's Reply */}
      <div className="flex gap-4 justify-end">
        <div className="bg-[#1a0533] text-white rounded-lg p-4 max-w-[80%] shadow-lg transform transition-all hover:scale-105">
          <div className="font-semibold mb-2">BrainVC</div>
          <p className="text-sm mb-4">Hey, based on the information you provided, here is the report! The current stats fit the success ratio, but here are the fields where you are lagging.</p>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Presentation showing a person presenting to a group"
            width={800}
            height={400}
            className="rounded-lg w-full shadow-md"
          />
        </div>
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="BrainVC logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      
      {/* Sarah's Follow-Up Message */}
      <div className="flex gap-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Sarah's profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="bg-[#e9e1ff] rounded-lg p-4 max-w-[80%] shadow-lg transform transition-all hover:scale-105">
          <div className="font-semibold mb-2 text-[#1a0533]">Sarah</div>
          <p className="text-sm text-gray-800">Awesome! Thanks, that is so great!</p>
        </div>
      </div>
    </div>
  )
}
