import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from '../ui/Alert';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { apiClient } from '../../lib/apiClient';
import { internApplicationSchema, type InternApplicationFormData } from '../../lib/schemas';

export function InternApplicationForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InternApplicationFormData>({
    resolver: zodResolver(internApplicationSchema),
    defaultValues: { website: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    setSuccessMessage(null);

    if (!resumeFile) {
      setSubmitError('Please upload your CV or resume.');
      return;
    }

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    formData.append('resume', resumeFile);

    try {
      await apiClient.submitInternApplication(formData);
      setSuccessMessage('Your application has been submitted. Thank you for applying to EchoBloom.');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit application.');
    }
  });

  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-[720px] flex-col gap-6">
      {submitError ? <Alert status="error">{submitError}</Alert> : null}
      {successMessage ? <Alert status="success">{successMessage}</Alert> : null}
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="First Name" error={errors.firstName?.message} {...register('firstName')} />
        <Input label="Last Name" error={errors.lastName?.message} {...register('lastName')} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="Email" type="email" error={errors.email?.message} {...register('email')} />
        <Input label="Phone" error={errors.phone?.message} {...register('phone')} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="University" error={errors.university?.message} {...register('university')} />
        <Input label="Major" error={errors.major?.message} {...register('major')} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Graduation Year"
          error={errors.graduationYear?.message}
          {...register('graduationYear')}
        />
        <Input
          label="Portfolio URL"
          error={errors.portfolioUrl?.message}
          {...register('portfolioUrl')}
        />
      </div>
      <Input label="LinkedIn URL" error={errors.linkedinUrl?.message} {...register('linkedinUrl')} />
      <Textarea label="Cover Letter" error={errors.coverLetter?.message} {...register('coverLetter')} />
      <div className="space-y-3">
        <p className="text-lg font-semibold text-content-primary">Submit CV &amp; Resume</p>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setResumeFile(event.target.files?.[0] ?? null)}
          className="block w-full text-sm text-content-secondary file:mr-4 file:rounded-xs file:border-0 file:bg-background-brand-eb file:px-4 file:py-2 file:text-content-on-brand"
        />
      </div>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('website')} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit Application'}
      </Button>
    </form>
  );
}
