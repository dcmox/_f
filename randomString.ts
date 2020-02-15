export const randomString = (
	len: number = 10,
	charset: string = '!@#%=*_-~23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',
): string =>
	Array.from({ length: len }, (c: any) =>
		charset.charAt(Math.floor(Math.random() * charset.length)),
	).join('')
