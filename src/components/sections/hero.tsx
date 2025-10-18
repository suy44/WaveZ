import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import TypingText from "@/components/ui/shadcn-io/typing-text";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] max-h-[720px] overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}

      {/* bottom gradient only */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

      <div className="relative container mx-auto h-full flex flex-col items-center justify-end text-center pb-20">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-end justify-center text-center md:justify-start md:text-left space-x-2">
            <TypingText
              text={["Connect", "Develop", "Hack"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-none drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]"
              textColors={['#3b82e2', '#8b5cf6', '#06b6d4']}
              variableSpeed={{ min: 50, max: 120 }}
            />
            <h1 className="font-headline font-bold tracking-tight text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-none drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                The future
              </span>
            </h1>
          </div>

          <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-white/90 font-body drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            A dynamic club fostering creativity and innovation in robotics, bringing together passionate minds to explore, build, and shape the future of technology.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#join-us">Become a Member</Link>
            </Button>
            <Button asChild variant="link" size="lg" className="text-white">
              <Link href="#events">Upcoming Events &rarr;</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
