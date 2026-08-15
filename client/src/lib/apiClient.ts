const API_BASE = import.meta.env.VITE_API_URL ?? '';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, init);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      typeof data.error === 'string' ? data.error : 'Something went wrong. Please try again.',
    );
  }

  return data as T;
}

export const apiClient = {
  health: () => request<{ ok: boolean }>('/api/health'),
  submitContact: (body: unknown) =>
    request<{ id: string; status: string }>('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
  submitInternApplication: (formData: FormData) =>
    request<{ id: string; status: string }>('/api/intern/applications', {
      method: 'POST',
      body: formData,
    }),
};
