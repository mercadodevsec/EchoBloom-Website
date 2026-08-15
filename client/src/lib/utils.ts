import { clsx, type ClassValue } from './clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'tertiary-mono';
export type ButtonSize = 'lg' | 'sm';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-background-brand-eb text-content-on-brand hover:brightness-110 active:brightness-95',
  secondary:
    'border border-border-default bg-background-primary text-content-primary hover:bg-background-muted active:bg-background-disabled',
  tertiary:
    'bg-transparent text-content-brand-eb hover:bg-background-muted active:bg-background-disabled',
  'tertiary-mono':
    'bg-transparent text-content-primary hover:bg-background-muted active:bg-background-disabled',
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'h-14 min-w-[200px] px-3 text-base',
  sm: 'h-[38px] min-w-[76px] px-3 text-sm',
};

export function buttonClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'lg',
  className?: string,
) {
  return cn(
    'inline-flex items-center justify-center rounded-xs font-body font-normal leading-[26px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-content-brand-eb disabled:cursor-not-allowed disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
