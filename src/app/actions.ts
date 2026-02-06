'use server';

import {
  generateAboutMe,
  type GenerateAboutMeInput,
} from '@/ai/flows/generate-about-me';
import {
  suggestProjectDescriptionImprovements,
  type SuggestProjectDescriptionImprovementsInput,
} from '@/ai/flows/suggest-project-description-improvements';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  console.log('New contact form submission:', validatedFields.data);

  return {
    message: 'Your message has been sent successfully! I will get back to you soon.',
    success: true,
  };
}

export async function handleGenerateAboutMe(
  input: GenerateAboutMeInput
): Promise<{ summary: string } | { error: string }> {
  try {
    const result = await generateAboutMe(input);
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating about me:', error);
    return { error: 'Failed to generate summary. Please try again.' };
  }
}

export async function handleSuggestImprovements(
  input: SuggestProjectDescriptionImprovementsInput
): Promise<{ improvedDescription: string } | { error: string }> {
  try {
    const result = await suggestProjectDescriptionImprovements(input);
    return { improvedDescription: result.improvedDescription };
  } catch (error) {
    console.error('Error suggesting improvements:', error);
    return { error: 'Failed to suggest improvements. Please try again.' };
  }
}
