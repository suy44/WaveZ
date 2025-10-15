'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createTaglines, type FormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generating...' : 'Generate Taglines'}
    </Button>
  );
}

export default function TaglineForm() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createTaglines, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'Taglines Generated!',
        description: 'Your creative taglines are ready.',
      });
    } else if (state.message && state.message !== 'Validation failed.') {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive'
      });
    }
  }, [state, toast]);

  return (
    <Card className="shadow-2xl bg-background/80">
      <form action={dispatch}>
        <CardHeader>
            {/* The title is on the main page */}
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="eventDescription" className="text-lg font-headline">Event Description</Label>
            <Textarea
              id="eventDescription"
              name="eventDescription"
              placeholder="e.g., A three-day virtual summit for female entrepreneurs focusing on sustainable business growth, with workshops on digital marketing and keynote speeches from industry pioneers."
              rows={5}
              className="font-body"
              aria-describedby="description-error"
            />
            {state?.errors?.eventDescription && (
              <p id="description-error" className="text-sm font-medium text-destructive">
                {state.errors.eventDescription[0]}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
          
          {state.taglines && state.taglines.length > 0 && (
            <div className="w-full p-4 bg-secondary/50 rounded-lg space-y-3 mt-4">
                <h3 className="font-headline font-semibold flex items-center gap-2"><Sparkles className='w-4 h-4 text-primary' /> Generated Taglines:</h3>
                <ul className="list-disc list-inside space-y-2 font-body text-foreground/80">
                    {state.taglines.map((tagline, index) => (
                        <li key={index}>{tagline}</li>
                    ))}
                </ul>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
