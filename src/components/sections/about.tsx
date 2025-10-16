"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { founders } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import FlipCountdown from "@/components/Countdown/CalendarCountdown";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? founders.length - 1 : prev - 1
    );

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % founders.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container">
        {/* === Intro === */}
        <div className="text-center">
          <main className="flex flex-col items-center justify-center min-h-screen">
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

        {/* === Carousel Section === */}
        <div className="mt-28">
          <h3 className="text-2xl font-headline font-bold text-center tracking-tight text-foreground sm:text-3xl">
            Meet the Leaders
          </h3>

          <div
            className="relative mt-20 flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute left-[4%] sm:left-[8%] md:left-[12%] z-20"
            >
              <Button
                size="icon"
                variant="secondary"
                onClick={prevSlide}
                className="rounded-full shadow-lg backdrop-blur-md bg-background/80 hover:bg-primary hover:text-white transition-all duration-300 w-12 h-12"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[620px] lg:max-w-[820px] xl:max-w-[950px] h-[520px] md:max-h-[300px] lg:max-h-[300px] flex items-center justify-center overflow-hidden">
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
                    x = "-65%";
                    scale = 0.85;
                    blur = 3;
                    opacity = 0.7;
                    zIndex = 2;
                  } else if (isRight) {
                    x = "65%";
                    scale = 0.85;
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
                      className="absolute w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px]"
                      animate={{ x, scale, opacity, zIndex }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        filter: `blur(${blur}px)`,
                      }}
                    >
                      <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-border/40 h-[500px] md:h-[540px] lg:h-[600px] flex flex-col justify-between">
                        <CardHeader>
                          <div className="flex justify-center">
                            <Avatar className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
                              {founderImage && (
                                <AvatarImage
                                  src={founderImage.imageUrl}
                                  alt={`Photo of ${founder.name}`}
                                  data-ai-hint={founderImage.imageHint}
                                />
                              )}
                              <AvatarFallback className="text-xl">
                                {founder.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <CardTitle className="pt-5 font-headline text-lg md:text-xl lg:text-2xl">
                            {founder.name}
                          </CardTitle>
                          <p className="text-sm md:text-base lg:text-lg text-primary font-semibold font-body">
                            {founder.role}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground font-body px-6 leading-relaxed text-base md:text-lg lg:text-xl">
                            {founder.bio}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute right-[4%] sm:right-[8%] md:right-[12%] z-20"
            >
              <Button
                size="icon"
                variant="secondary"
                onClick={nextSlide}
                className="rounded-full shadow-lg backdrop-blur-md bg-background/80 hover:bg-primary hover:text-white transition-all duration-300 w-12 h-12"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
