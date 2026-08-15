import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type AlertStatus = 'info' | 'warning' | 'error' | 'success';

const statusStyles: Record<AlertStatus, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
  error: 'border-red-200 bg-red-50 text-red-900',
  success: 'border-green-200 bg-green-50 text-green-900',
};

const statusIcons: Record<AlertStatus, string> = {
  info: 'ri-information-line',
  warning: 'ri-alert-line',
  error: 'ri-error-warning-line',
  success: 'ri-checkbox-circle-line',
};

export type AlertProps = {
  status?: AlertStatus;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Alert({ status = 'info', title, children, className }: AlertProps) {
  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn('flex gap-3 rounded-s border p-4', statusStyles[status], className)}
    >
      <i className={cn(statusIcons[status], 'text-xl')} aria-hidden="true" />
      <div>
        {title ? <p className="mb-1 font-semibold">{title}</p> : null}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
