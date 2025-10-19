"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { motion, AnimatePresence } from "framer-motion";
 
export default function Hero() {
  // 1️⃣ Select multiple hero images
  const heroImages = PlaceHolderImages.filter((img) =>
    ["hero-image-1", "hero-image-2", "hero-image-3 , hero-image-4 , hero-image-5"].includes(img.id)
  );

  // 2️⃣ State for the current image index
  const [current, setCurrent] = useState(0);

  // 3️⃣ Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[500px] max-h-[720px] overflow-hidden"
    >
      {/* 4️⃣ Animate image transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current].imageUrl}
            alt={heroImages[current].description}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* 5️⃣ Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 6️⃣ Hero Text */}
      <div className="relative container mx-auto h-full flex flex-col items-center justify-end text-center pb-20">
        <div className="flex flex-wrap items-end justify-center text-center space-x-2">
          <TypingText
            text={["Connect", "Develop", "Hack"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-none"
            textColors={["#3b82e2", "#8b5cf6", "#06b6d4"]}
            variableSpeed={{ min: 50, max: 120 }}
          />
          <h1 className="font-headline font-bold tracking-tight text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-none">
            The future
          </h1>
        </div>

        <p className="mt-6 text-xl max-w-3xl leading-8 text-foreground/80 font-body">
          A dynamic club fostering creativity and innovation in robotics, bringing together passionate minds
          to explore, build, and shape the future of technology.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#join-us">Become a Member</Link>
          </Button>

          <Button asChild variant="link" size="lg" className="text-foreground">
            <Link href="#events">Upcoming Events &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
