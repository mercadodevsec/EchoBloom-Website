import { describe, expect, it } from 'vitest';
import { contactSchema } from '../lib/schemas';

describe('contactSchema', () => {
  it('accepts valid contact payloads', () => {
    const result = contactSchema.safeParse({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      message: 'Hello from EchoBloom',
      website: '',
    });

    expect(result.success).toBe(true);
  });

  it('rejects short messages', () => {
    const result = contactSchema.safeParse({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      message: 'Hi',
      website: '',
    });

    expect(result.success).toBe(false);
  });
});
