import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { founders } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import FlipCountdown from '@/components/Countdown/CalendarCountdown';
export default function About() {
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
            We are dedicated to fostering a supportive and inclusive environment where women can build meaningful connections, develop new skills, and advance their careers. We believe in the power of community to inspire change and create leaders.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-headline font-bold text-center tracking-tight text-foreground sm:text-3xl">
            Meet the Leaders
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {founders.map((founder) => {
              const founderImage = PlaceHolderImages.find((img) => img.id === founder.imageId);
              return (
                <Card key={founder.id} className="text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
                    <p className="text-muted-foreground font-body">{founder.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
