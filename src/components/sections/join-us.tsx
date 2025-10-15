import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function JoinUs() {
  return (
    <section id="join-us" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
              Become a Part of Our Community
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground font-body">
              Ready to take the next step in your journey? Join WaveZ Club today to unlock access to exclusive events, mentorship opportunities, and a network of inspiring innovators who are making a difference.
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline">Registration Form</CardTitle>
              <CardDescription className="font-body">
                Click the button below to fill out the form .. be a part of our family.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdIyP1Z_Fd8_u9DbDWKN4V_piOr6RPekx3IzbNeRaAn6ckaCg/viewform?usp=preview" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Go to the form
                  </a>
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
