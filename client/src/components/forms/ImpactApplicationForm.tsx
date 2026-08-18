import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from '../ui/Alert';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { apiClient } from '../../lib/apiClient';
import { impactApplicationSchema, type ImpactApplicationFormData } from '../../lib/schemas';
import { academicStatusOptions, programPositionOptions } from '../../data/impact';

export function ImpactApplicationForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ImpactApplicationFormData>({
    resolver: zodResolver(impactApplicationSchema),
    defaultValues: { website: '', academicStatus: '', programPosition: '' },
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
      setSuccessMessage(
        'Your application has been submitted. Thank you for applying to EchoBloom.',
      );
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit application.');
    }
  });

  return (
    <div className="mx-auto w-full max-w-[820px] rounded-2xl bg-background-disabled/70 p-6 md:p-12">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        {submitError ? <Alert status="error">{submitError}</Alert> : null}
        {successMessage ? <Alert status="success">{successMessage}</Alert> : null}

        {/* Row 1: First Name + Last Name */}
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="First Name"
            placeholder="Enter first name"
            error={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            error={errors.lastName?.message}
            {...register('lastName')}
          />
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="E-mail"
            type="email"
            placeholder="Enter e-mail"
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            label="Phone"
            placeholder="+1"
            error={errors.phone?.message}
            {...register('phone')}
          />
        </div>

        {/* Row 3: Organization/School + Current Academic Status */}
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Organization/School"
            placeholder="Enter name of school"
            helpText="Optional"
            error={errors.organization?.message}
            {...register('organization')}
          />
          <Select
            label="Current Academic Status"
            placeholder="Choose an option"
            options={academicStatusOptions}
            error={errors.academicStatus?.message}
            {...register('academicStatus')}
          />
        </div>

        {/* Row 4: Program Positions (full width) */}
        <Select
          label="Program Positions"
          placeholder="Choose position"
          options={programPositionOptions}
          error={errors.programPosition?.message}
          {...register('programPosition')}
        />

        {/* Row 5: Submit CV & Resume */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-content-primary">
            Submit CV &amp; Resume
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(event) => {
              const file = event.target.files?.[0] ?? null;
              setResumeFile(file);
            }}
            className="sr-only"
            aria-label="Upload CV or Resume"
          />

          <div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex h-9 items-center justify-center rounded-xs bg-background-brand-eb px-6 text-sm font-medium text-content-on-brand transition-colors hover:brightness-110 active:brightness-95"
            >
              Upload
            </button>
          </div>

          {/* Uploaded state indicator */}
          <div className="flex items-center gap-3 rounded-s border border-[#a7f3d0] bg-[#ecfdf5] p-3 text-[#065f46]">
            <i className="ri-checkbox-circle-fill text-xl text-[#059669]" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold leading-tight">
                {resumeFile ? 'Resume uploaded !' : 'Resume uploaded !'}
              </p>
              <p className="text-xs text-content-tertiary">
                {resumeFile
                  ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(0)}kb)`
                  : 'Akawasha - #What weTH.pdf'}
              </p>
            </div>
          </div>
        </div>

        {/* Row 6: Link to LinkedIn */}
        <div className="relative">
          <Input
            label="Link to LinkedIn"
            placeholder="www.student-linkedin.com"
            error={errors.linkedinUrl?.message}
            {...register('linkedinUrl')}
          />
          <i
            className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-[38px] text-content-tertiary"
            aria-hidden="true"
          />
        </div>

        {/* Row 7: Link to Website/Portfolio/Github */}
        <div className="relative">
          <Input
            label="Link to Website/Portfolio/Github"
            placeholder="www.student.com"
            error={errors.portfolioUrl?.message}
            {...register('portfolioUrl')}
          />
          <i
            className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-[38px] text-content-tertiary"
            aria-hidden="true"
          />
        </div>

        {/* Honeypot */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('website')} />

        <div className="pt-2">
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Submitting…' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </div>
  );
}
