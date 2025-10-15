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
              Ready to take the next step in your journey? Join WiveZ Club today to unlock access to exclusive events, mentorship opportunities, and a network of inspiring women who are making a difference.
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline">Registration Form</CardTitle>
              <CardDescription className="font-body">
                Fill out the form below to start your application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Kevin" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>                        <Input id="last-name" placeholder="Hart" />
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="personal@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to join?</Label>
                  <Textarea id="message" placeholder="Tell us a little about yourself and your goals from joining our club..." />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
