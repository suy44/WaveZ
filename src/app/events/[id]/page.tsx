import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, MapPin, Ticket, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  const eventImage = PlaceHolderImages.find((img) => img.id === event.imageId);
  
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-8">
            <Link href="/#events" className="text-primary hover:underline font-body">&larr; Back to all events</Link>
        </div>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
          {eventImage && (
            <Image
              src={eventImage.imageUrl}
              alt={eventImage.description}
              fill
              className="object-cover"
              data-ai-hint={eventImage.imageHint}
            />
          )}
        </div>

        <h1 className="text-4xl font-headline font-bold mb-4">{event.title}</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-muted-foreground font-body">
            <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{event.location}</span>
            </div>
        </div>

        <div className="prose prose-lg max-w-none font-body mb-12 text-foreground/80">
            <p>{event.longDescription}</p>
        </div>

        {event.speakers.length > 0 && (
            <div className="mb-12">
                <h2 className="text-2xl font-headline font-bold mb-6">Featured Speakers</h2>
                <div className="space-y-6">
                    {event.speakers.map(speaker => (
                        <div key={speaker.name} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                            <Avatar>
                                <AvatarFallback><User /></AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold font-headline">{speaker.name}</p>
                                <p className="text-sm text-muted-foreground font-body">{speaker.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        <div className="text-center p-8 bg-secondary/50 rounded-lg shadow-inner">
            <h2 className="text-2xl font-headline font-bold mb-4">Ready to Join?</h2>
            <p className="text-muted-foreground font-body mb-6">Secure your spot for this exciting event.</p>
            <Button size="lg">
                <Ticket className="w-5 h-5 mr-2" />
                Register Now
            </Button>
        </div>
      </div>
    </div>
  );
}
