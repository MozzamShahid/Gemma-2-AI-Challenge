import Image from "next/image";
import brainVC from "../images/brianVC.png";
import imageMain from "../images/imageeso.png";
import icon from "../images/iconone.png";

export function Sidebar() {
  return (
    <div className="w-[240px] bg-[#1a0533] text-white flex flex-col h-full">
      {/* Logo Section */}
      <div className="p-4 flex items-center justify-center">
        <Image
          src={brainVC}
          alt="BrainVC logo"
          className="w-40 h-auto"
          width={160} // Ensure the image has width and height defined
          height={40}
        />
      </div>

      {/* Images Section */}
      <div className="flex-1 flex flex-col gap-6 p-2">
        {/* Main Image */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden">
        <Image
            src={imageMain}
            alt="Person smiling while using a laptop"
            className="object-cover justify-center"
            width={500}
            height={40} // For a 16:9 aspect ratio
            />
          </div>
        </div>

        {/* Uncomment if you want the second image back */}
        {/* <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={imagePain}
              alt="People in a meeting discussing choices"
              className="object-cover w-full max-w-[240px]"
              width={240}
              height={auto}
            />
          </div>
        </div> */}
      </div>

      {/* Profile Section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-center gap-3">
          <Image
            src={icon}
            alt="Sarah S. profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-semibold leading-tight">Sarah S.</div>
            <div className="text-sm text-white/70 leading-tight">
              Startuply.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
