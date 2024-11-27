import Image from "next/image"

export function ChatMessages() {
  return (
    <div className="flex-1 overflow-auto p-4 space-y-6">
      <div className="flex gap-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Sarah's profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="bg-[#e9e1ff] rounded-lg p-4 max-w-[80%]">
          <div className="font-semibold mb-1">Sarah</div>
          <p>Hey, Here is a Brand Presentation. can you help me in checking there Startup Current Stats, Is it fit current success scenario, & Where I am lagging?</p>
        </div>
      </div>
      
      <div className="flex gap-4 justify-end">
        <div className="bg-[#1a0533] text-white rounded-lg p-4 max-w-[80%]">
          <div className="font-semibold mb-1">BrainVC</div>
          <p className="mb-4">Hey, Based on the information you have provided here is the report! Current Stats fit the Success Ratio, Here are the field you are lagging.</p>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Presentation showing a person presenting to a group"
            width={800}
            height={400}
            className="rounded-lg w-full"
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
      
      <div className="flex gap-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Sarah's profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="bg-[#e9e1ff] rounded-lg p-4 max-w-[80%]">
          <div className="font-semibold mb-1">Sarah</div>
          <p>Awesome Thanks Thats is so great.</p>
        </div>
      </div>
    </div>
  )
}

