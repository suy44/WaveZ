'use server';

import {
  generateEventTaglines,
  type GenerateEventTaglinesInput,
} from '@/ai/flows/generate-event-taglines';
import { z } from 'zod';

const schema = z.object({
  eventDescription: z
    .string()
    .min(20, { message: 'Description must be at least 20 characters long.' }),
});

export type FormState = {
  message: string;
  taglines?: string[];
  errors?: {
    eventDescription?: string[];
  };
};

export async function createTaglines(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    eventDescription: formData.get('eventDescription'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed.',
    };
  }

  try {
    const input: GenerateEventTaglinesInput = {
      eventDescription: validatedFields.data.eventDescription,
      numTaglines: 3,
    };
    const result = await generateEventTaglines(input);
    return { message: 'success', taglines: result.taglines };
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred.' };
  }
}
