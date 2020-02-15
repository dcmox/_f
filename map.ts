export const map = (a: any[], fn: () => any | string): any[] =>
	typeof fn === 'string' ? a.map((item: any) => item[fn]) : a.map(fn)
