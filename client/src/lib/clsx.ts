export type ClassValue = string | false | null | undefined;

export function clsx(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ');
}
