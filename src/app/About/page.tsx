// app/about/page.tsx
import Image from "next/image";
import Footers from "../components/Footers";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'], 
    weight: ['400', '700'], 
    variable: '--font-roboto', 
  });

export default function About(){

    return (
        <div className="flex flex-col min-h-screen"> {/* Použití flexbox pro celou stránku */}
        <main className="flex-grow grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </main>
        
      </div>

    )
}
