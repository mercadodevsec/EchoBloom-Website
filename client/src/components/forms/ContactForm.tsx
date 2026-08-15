import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../ui/Alert';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { apiClient } from '../../lib/apiClient';
import { contactSchema, type ContactFormData } from '../../lib/schemas';

export function ContactForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await apiClient.submitContact(values);
      navigate('/contact/success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send message.');
    }
  });

  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-[720px] flex-col gap-6">
      {submitError ? <Alert status="error">{submitError}</Alert> : null}
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="First Name" error={errors.firstName?.message} {...register('firstName')} />
        <Input label="Last Name" error={errors.lastName?.message} {...register('lastName')} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="Email" type="email" error={errors.email?.message} {...register('email')} />
        <Input
          label="Organization"
          error={errors.organization?.message}
          {...register('organization')}
        />
      </div>
      <Input
        label="Role / Interest"
        error={errors.roleInterest?.message}
        {...register('roleInterest')}
      />
      <Textarea label="Message" error={errors.message?.message} {...register('message')} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('website')} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
      <div className="space-y-1 text-center text-content-tertiary">
        <p className="text-lg font-semibold text-content-primary">Prefer email?</p>
        <p>For general questions, reach us at</p>
        <a href="mailto:EchoBloom@echo.com" className="text-content-brand-eb">
          EchoBloom@echo.com
        </a>
      </div>
    </form>
  );
}
