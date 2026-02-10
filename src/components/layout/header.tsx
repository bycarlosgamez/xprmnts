'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import experiments from '../../../experiments.json';

export function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed top-4 left-4 z-1000'>
      <DropdownMenu>
        <DropdownMenuTrigger className='px-3 py-1.5 text-sm text-white/90 border rounded-md bg-black/80 backdrop-blur-sm hover:text-black/50 hover:bg-white/90 transition-colors outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-300'>
          Select project
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='min-w-[180px]'>
          {experiments.map((experiment) => {
            const isActive = pathname === experiment.url;
            return (
              <DropdownMenuItem key={experiment.url} asChild>
                <Link
                  href={experiment.url}
                  className={isActive ? 'font-medium' : ''}
                >
                  {experiment.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
