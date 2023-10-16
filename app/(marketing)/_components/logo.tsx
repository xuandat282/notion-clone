import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Image
        src="/next.svg"
        alt="Notion"
        width={40}
        height={40}
        className="object-contain"
      />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};

export default Logo;
