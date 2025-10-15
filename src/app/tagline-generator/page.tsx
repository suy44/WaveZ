import TaglineForm from './tagline-form';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TaglineGeneratorPage() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'tagline-generator-bg');
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
              AI Tagline Generator
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground font-body">
              Craft the perfect tagline for your event. Describe your event below, and our AI will generate catchy and creative options for you.
            </p>
          </div>
          <TaglineForm />
      </div>
    </div>
  );
}
