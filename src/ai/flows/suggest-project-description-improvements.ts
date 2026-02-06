'use server';

/**
 * @fileOverview An AI tool that suggests improvements to project descriptions.
 *
 * - suggestProjectDescriptionImprovements - A function that suggests improvements to a project description.
 * - SuggestProjectDescriptionImprovementsInput - The input type for the suggestProjectDescriptionImprovements function.
 * - SuggestProjectDescriptionImprovementsOutput - The return type for the suggestProjectDescriptionImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectDescriptionImprovementsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The original project description to be improved.'),
});
export type SuggestProjectDescriptionImprovementsInput = z.infer<
  typeof SuggestProjectDescriptionImprovementsInputSchema
>;

const SuggestProjectDescriptionImprovementsOutputSchema = z.object({
  improvedDescription: z
    .string()
    .describe('The improved project description suggested by the AI.'),
});
export type SuggestProjectDescriptionImprovementsOutput = z.infer<
  typeof SuggestProjectDescriptionImprovementsOutputSchema
>;

export async function suggestProjectDescriptionImprovements(
  input: SuggestProjectDescriptionImprovementsInput
): Promise<SuggestProjectDescriptionImprovementsOutput> {
  return suggestProjectDescriptionImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectDescriptionImprovementsPrompt',
  input: {schema: SuggestProjectDescriptionImprovementsInputSchema},
  output: {schema: SuggestProjectDescriptionImprovementsOutputSchema},
  prompt: `You are an AI assistant designed to improve project descriptions to be more engaging and effective.

  Original Description: {{{projectDescription}}}

  Please provide an improved description that highlights the accomplishments and key aspects of the project.`,
});

const suggestProjectDescriptionImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestProjectDescriptionImprovementsFlow',
    inputSchema: SuggestProjectDescriptionImprovementsInputSchema,
    outputSchema: SuggestProjectDescriptionImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
