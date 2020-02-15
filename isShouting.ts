export const isShouting = (s: string, threshold: number = 0.51) =>
	(s.match(/[A-Z]/g)?.length || 0) / s.length >= threshold && s.length > 5
