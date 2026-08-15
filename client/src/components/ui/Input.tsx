import { type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helpText?: string;
};

export function Input({ label, error, helpText, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-semibold text-content-primary">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
        className={cn(
          'h-12 w-full rounded-s border bg-background-primary px-4 text-base text-content-primary transition-colors placeholder:text-content-tertiary focus:border-content-brand-eb focus:outline-none focus:ring-2 focus:ring-content-brand-eb/20 disabled:cursor-not-allowed disabled:bg-background-disabled',
          error ? 'border-red-500' : 'border-border-default',
          className,
        )}
        {...props}
      />
      {helpText && !error ? (
        <p id={`${inputId}-help`} className="text-sm text-content-tertiary">
          {helpText}
        </p>
      ) : null}
      {error ? (
        <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export type TextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, id, className, rows = 5, ...props }: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-semibold text-content-primary">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          'w-full rounded-s border bg-background-primary px-4 py-3 text-base text-content-primary transition-colors placeholder:text-content-tertiary focus:border-content-brand-eb focus:outline-none focus:ring-2 focus:ring-content-brand-eb/20',
          error ? 'border-red-500' : 'border-border-default',
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={`${inputId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
