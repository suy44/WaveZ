'use server';

/**
 * @fileOverview A flow to generate event taglines using a generative AI model.
 *
 * - generateEventTaglines - A function that generates multiple taglines for an event.
 * - GenerateEventTaglinesInput - The input type for the generateEventTaglines function.
 * - GenerateEventTaglinesOutput - The return type for the generateEventTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEventTaglinesInputSchema = z.object({
  eventDescription: z
    .string()
    .describe('A description of the event for which taglines are to be generated.'),
  numTaglines: z
    .number()
    .min(1)
    .max(5)
    .default(3)
    .describe('The number of taglines to generate.'),
});
export type GenerateEventTaglinesInput = z.infer<
  typeof GenerateEventTaglinesInputSchema
>;

const GenerateEventTaglinesOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of generated taglines.'),
});
export type GenerateEventTaglinesOutput = z.infer<
  typeof GenerateEventTaglinesOutputSchema
>;

export async function generateEventTaglines(
  input: GenerateEventTaglinesInput
): Promise<GenerateEventTaglinesOutput> {
  return generateEventTaglinesFlow(input);
}

const generateEventTaglinesPrompt = ai.definePrompt({
  name: 'generateEventTaglinesPrompt',
  input: {schema: GenerateEventTaglinesInputSchema},
  output: {schema: GenerateEventTaglinesOutputSchema},
  prompt: `You are a marketing expert specializing in creating catchy event taglines. Generate {{numTaglines}} taglines for the following event description:\n\n{{{eventDescription}}}\n\nTaglines:`,
});

const generateEventTaglinesFlow = ai.defineFlow(
  {
    name: 'generateEventTaglinesFlow',
    inputSchema: GenerateEventTaglinesInputSchema,
    outputSchema: GenerateEventTaglinesOutputSchema,
  },
  async input => {
    const {output} = await generateEventTaglinesPrompt(input);
    return output!;
  }
);
