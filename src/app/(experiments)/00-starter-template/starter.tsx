'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(SplitText);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {}, {
    scope: containerRef,
  });

  return (
    <div className='bg-black text-red-300'>
      <div
        ref={containerRef}
        className='flex h-screen items-end justify-left overflow-hidden'
      >
        <h1 className='title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left'>
          ANTIC
          <br />
          didone
        </h1>
      </div>
    </div>
  );
}
