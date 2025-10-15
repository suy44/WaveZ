import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { events } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground font-body max-w-3xl mx-auto">
            Join us for our upcoming workshops, talks, and networking sessions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const eventImage = PlaceHolderImages.find((img) => img.id === event.imageId);
            return (
              <Card key={event.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="relative h-56 w-full">
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
                <CardHeader>
                  <CardTitle className="font-headline">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3 text-muted-foreground font-body">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 font-body text-foreground/80">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
