import { describe, expect, it } from 'vitest';
import { buttonClassName } from '../lib/utils';

describe('buttonClassName', () => {
  it('applies primary large styles by default', () => {
    expect(buttonClassName()).toContain('bg-background-brand-eb');
    expect(buttonClassName()).toContain('h-14');
  });

  it('applies secondary variant styles', () => {
    expect(buttonClassName('secondary')).toContain('border-border-default');
  });
});
