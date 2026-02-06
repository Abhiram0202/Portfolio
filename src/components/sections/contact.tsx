'use client';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const initialState: ContactFormState = {
  message: '',
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Message
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
      toast({
        variant: 'destructive',
        title: 'Oops! Something went wrong.',
        description: 'Please check the form for errors.',
      });
    }
  }, [state, toast]);

  return (
    <SectionWrapper id="contact" className="bg-card">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        aria-label="Name"
                        required
                        />
                        {state.errors?.name && (
                        <p className="text-sm text-destructive">{state.errors.name[0]}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        aria-label="Email"
                        required
                        />
                        {state.errors?.email && (
                        <p className="text-sm text-destructive">{state.errors.email[0]}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        aria-label="Message"
                        rows={5}
                        required
                        />
                        {state.errors?.message && (
                        <p className="text-sm text-destructive">
                            {state.errors.message[0]}
                        </p>
                        )}
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
