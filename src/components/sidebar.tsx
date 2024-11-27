import Image from "next/image"
import { Brain } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-[280px] bg-[#1a0533] text-white flex flex-col">
      <div className="p-4 flex items-center gap-2">
        <Brain className="w-8 h-8" />
        <span className="text-xl font-semibold">BrainVC</span>
      </div>
      
      <div className="flex-1 flex flex-col gap-4 p-4">
        <div>
          <h2 className="text-lg mb-2 font-semibold">Better Brain</h2>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=240"
              alt="Person smiling while using a laptop"
              width={240}
              height={200}
              className="w-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-lg mb-2 font-semibold">Better Choice.</h2>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=240"
              alt="People in a meeting discussing choices"
              width={240}
              height={200}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Sarah S. profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">Sarah S.</div>
            <div className="text-sm text-white/70">Startuply.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

