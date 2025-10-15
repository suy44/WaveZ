'use client';
import { galleryImages } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import next from 'next';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Moments from Our Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground font-body max-w-3xl mx-auto">
            A glimpse into the vibrant and inspiring moments at WaveZ Club memebers.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((galleryImg) => {
            const image = PlaceHolderImages.find((i) => i.id === galleryImg.imageId);
            if (!image) return null;

            return (
              <Dialog key={galleryImg.id}>
                <DialogTrigger asChild>
                  <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-contain"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
