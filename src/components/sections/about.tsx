import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { founders } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import FlipCountdown from '@/components/Countdown/CalendarCountdown';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + founders.length) % founders.length);
  };

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container">
        <div className="text-center">
          <main className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-4xl font-bold mb-10">🚀 WaveZ Open Day</h1>
            <FlipCountdown targetDate="2025-10-16T09:00:00" />
            <p className="mt-6 text-gray-400">Mark your calendar — don’t miss it!</p>
          </main>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground font-body max-w-3xl mx-auto">
            We are dedicated to empowering young innovators to explore the intersection of creativity and technology. Through hands-on projects, teamwork, and mentorship, we aim to transform ideas into impactful solutions that shape a smarter and more connected future.
          </p>
        </div>

        {/* === Leaders Section with Carousel === */}
        <div className="mt-20 relative">
          <h3 className="text-2xl font-headline font-bold text-center tracking-tight text-foreground sm:text-3xl">
            Meet the Leaders
          </h3>

          <div className="relative flex items-center justify-center mt-12 overflow-hidden">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-10 bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/10 text-foreground rounded-full p-3 transition-all duration-300 shadow-md hover:scale-110 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slides */}
            <div className="flex items-center justify-center relative w-full h-[400px] md:h-[480px]">
              {founders.map((founder, index) => {
                const offset = (index - currentIndex + founders.length) % founders.length;

                let classNames =
                  'absolute transition-all duration-700 ease-in-out transform w-[280px] md:w-[350px] h-[380px] md:h-[450px]';
                let style = {};

                if (offset === 0) {
                  // current card
                  classNames += ' z-20 scale-100 opacity-100';
                  style = { transform: 'translateX(0)' };
                } else if (offset === 1) {
                  // next card right
                  classNames += ' z-10 scale-90 opacity-50 blur-[2px]';
                  style = { transform: 'translateX(260px)' };
                } else if (offset === founders.length - 1) {
                  // previous card left
                  classNames += ' z-10 scale-90 opacity-50 blur-[2px]';
                  style = { transform: 'translateX(-260px)' };
                } else {
                  // hidden others
                  classNames += ' opacity-0 scale-75';
                  style = { transform: 'translateX(0)', pointerEvents: 'none' };
                }

                const founderImage = PlaceHolderImages.find((img) => img.id === founder.imageId);

                return (
                  <div key={founder.id} className={classNames} style={style}>
                    <Card className="text-center shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-full flex flex-col justify-between">
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
                            <AvatarFallback>{founder.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle className="pt-4 font-headline">{founder.name}</CardTitle>
                        <p className="text-sm text-primary font-semibold font-body">{founder.role}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-body px-4">{founder.bio}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-10 bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/10 text-foreground rounded-full p-3 transition-all duration-300 shadow-md hover:scale-110 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
