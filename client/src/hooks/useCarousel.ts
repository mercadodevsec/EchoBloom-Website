import { useCallback, useState } from 'react';

export function useCarousel<T>(items: T[], visibleCount = 1) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visibleCount);

  const next = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  const visibleItems = items.slice(index, index + visibleCount);

  return { index, next, prev, visibleItems, hasMultiple: items.length > visibleCount };
}
