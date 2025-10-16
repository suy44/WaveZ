"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { founders } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import FlipCountdown from "@/components/Countdown/CalendarCountdown";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? founders.length - 1 : prev - 1
    );

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container">
        <div className="text-center">
          <main className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-bold mb-10">🚀 WaveZ Open Day</h1>
            <FlipCountdown targetDate="2025-10-16T09:00:00" />
            <p className="mt-6 text-gray-400">
              Mark your calendar — don’t miss it!
            </p>
          </main>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground font-body max-w-3xl mx-auto">
            We are dedicated to empowering young innovators to explore the
            intersection of creativity and technology. Through hands-on
            projects, teamwork, and mentorship, we aim to transform ideas into
            impactful solutions that shape a smarter and more connected future.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-headline font-bold text-center tracking-tight text-foreground sm:text-3xl">
            Meet the Leaders
          </h3>

          {/* --- Carousel Wrapper --- */}
          <div className="relative mt-16 flex items-center justify-center">
            <Button
              variant="ghost"
              onClick={prevSlide}
              className="absolute left-2 z-10 text-3xl"
            >
              ‹
            </Button>

            <div className="relative w-full max-w-xl h-[400px] flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false}>
                {founders.map((founder, index) => {
                  const founderImage = PlaceHolderImages.find(
                    (img) => img.id === founder.imageId
                  );

                  const offset = index - currentIndex;
                  const isCenter = offset === 0;
                  const isLeft =
                    offset === -1 || offset === founders.length - 1;
                  const isRight =
                    offset === 1 || offset === -(founders.length - 1);

                  let x = 0,
                    scale = 1,
                    blur = 0,
                    opacity = 1,
                    zIndex = 1;

                  if (isCenter) {
                    scale = 1;
                    zIndex = 3;
                  } else if (isLeft) {
                    x = "-60%";
                    scale = 0.8;
                    blur = 3;
                    opacity = 0.7;
                    zIndex = 2;
                  } else if (isRight) {
                    x = "60%";
                    scale = 0.8;
                    blur = 3;
                    opacity = 0.7;
                    zIndex = 2;
                  } else {
                    opacity = 0;
                    scale = 0.5;
                    zIndex = 0;
                  }

                  return (
                    <motion.div
                      key={founder.id}
                      className="absolute w-[280px]"
                      animate={{ x, scale, opacity, zIndex }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        filter: `blur(${blur}px)`,
                      }}
                    >
                      <Card className="text-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-background">
                        <CardHeader>
                          <div className="flex justify-center">
                            <Avatar className="h-24 w-24">
                              {founderImage && (
                                <AvatarImage
                                  src={founderImage.imageUrl}
                                  alt={`Photo of ${founder.name}`}
                                  data-ai-hint={founderImage.imageHint}
                                />
                              )}
                              <AvatarFallback>
                                {founder.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <CardTitle className="pt-4 font-headline">
                            {founder.name}
                          </CardTitle>
                          <p className="text-sm text-primary font-semibold font-body">
                            {founder.role}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground font-body">
                            {founder.bio}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              onClick={nextSlide}
              className="absolute right-2 z-10 text-3xl"
            >
              ›
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
