export const isNullOrWhitespace = (text: string | undefined | null): boolean =>
  !text || text.trim().length === 0;
