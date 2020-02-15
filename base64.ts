export const toBase64 = (s: string) =>
	window ? btoa(s) : new Buffer(s).toString('base64')
export const fromBase64 = (s: string) =>
	window ? atob(s) : new Buffer(s).toString('ascii')
