import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import TypingText from "@/components/ui/shadcn-io/typing-text";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] max-h-[720px]">
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
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />

      <div className="relative container mx-auto h-full flex flex-col items-center justify-end text-center pb-20">
        <div className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl">
          {/* Row containing typing area and fixed heading */}
          <div className="flex items-end justify-center md:justify-start md:text-left gap-x-4">
            {/* FIXED-SIZE BOX for typing: adjust w-[14ch] to match your longest word */}
            <div className="relative inline-block w-[14ch] h-auto overflow-hidden" aria-hidden>
              {/* Make the TypingText positioned absolutely so its width changes do not affect layout */}
              <div className="absolute inset-y-0 left-0 flex items-end">
                <TypingText
                  text={["Connect", "Develop", "Hack"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-none"
                  textColors={['#3b82e2', '#8b5cf6', '#06b6d4']}
                  variableSpeed={{ min: 50, max: 120 }}
                />
              </div>
            </div>

            {/* Heading won't shrink or move */}
            <h1 className="font-headline font-bold tracking-tight text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-none flex-shrink-0">
              The future
            </h1>
          </div>

          <p className="mt-6 text-lg max-w-2xl leading-8 text-foreground/80 font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            A dynamic club fostering creativity and innovation in robotics, bringing together passionate minds to explore, build, and shape the future of technology.
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
      </div>
    </section>
  );
}
