import { type SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  helpText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export function Select({
  label,
  error,
  helpText,
  id,
  className,
  options,
  placeholder,
  ...props
}: SelectProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-semibold text-content-primary">
        {label}
      </label>
      <div className="relative">
        <select
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
          className={cn(
            'h-12 w-full appearance-none rounded-s border bg-background-primary px-4 pr-10 text-base transition-colors focus:border-content-brand-eb focus:outline-none focus:ring-2 focus:ring-content-brand-eb/20 disabled:cursor-not-allowed disabled:bg-background-disabled',
            error ? 'border-red-500' : 'border-border-default',
            className,
          )}
          defaultValue=""
          {...props}
        >
          {placeholder ? (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <i
          className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-content-tertiary"
          aria-hidden="true"
        />
      </div>
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
