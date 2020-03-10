export const stripTags = (s: string): string => s.replace(/<([^>]*)>/g, '')
