'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/lib/data';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-10 max-w-7xl items-center mx-auto relative">
      <div className="mr-4 flex ">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" width={80} height={100} style={{ marginTop: 14 }} alt="WaveZ Club Logo" />
          <span className="font-bold font-headline sm:inline-block">
            WaveZ Club
          </span>
        </Link>
      </div>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-accent-foreground/80 text-accent-foreground/60"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-2">
          <Button className="hidden md:flex" asChild>
            <Link href="#join-us">Join Now</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                  <Image src="/logo.png" width={32} height={32} alt="WaveZ Club Logo" />
                  <span className="font-bold font-headline">WaveZ Club</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setSheetOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button asChild >
                  <Link href="#join-us" onClick={() => setSheetOpen(false)}>Join Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>

    
    <div className="relative w-full h-[10px] bg-transparent">
      {/* Progress Line */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] bg-blue-600 rounded-full"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      />
      
      {/* Perfect Circle */}
      <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-blue-600 shadow-[0_0_15px_4px_rgba(37,99,235,0.8)] bg-transparent"
      style={{
        left: `calc(${scrollProgress}% - 3px)`,
      }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
    />

</div>

  </header>
);

}
