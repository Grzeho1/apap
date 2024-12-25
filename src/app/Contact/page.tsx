"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';







export default function Contact() {
 
    return(
<div className="flex flex-col min-h-screen"> 
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