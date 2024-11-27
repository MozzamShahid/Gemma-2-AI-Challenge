import Image from "next/image";
import brainVC from "../images/brianVC.png";
import imageMain from "../images/imageeso.png";
import imagePain from "../images/imageesoo.png";
import icon from "../images/iconone.png"

export function Sidebar() {
    return (
        <div className="w-[240px] bg-[#1a0533] text-white flex flex-col">
            {/* Logo Section */}
            <div className="p-4 flex items-center justify-center">
                <Image src={brainVC} alt="logo-brain-vc" className="w-40 h-auto" />
            </div>

            {/* Images Section */}
            <div className="flex-1 flex flex-col gap-6 p-2">
                <div className="flex justify-center">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={imageMain}
                            alt="Person smiling while using a laptop"
                            className="w-50 h-auto object-cover max-w-[240px]"
                        />

                    </div>
                </div>

                {/* <div className="flex justify-center">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={imagePain}
                            alt="People in a meeting discussing choices"
                            className="w-20 object-cover max-w-[240px]"
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
                        className="rounded-sm"
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
