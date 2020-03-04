import { LRUCache } from './lru'
import { stringifyCache } from './stringify'

export const memoize = (memoSize: number) => {
	const cache: any = new LRUCache(memoSize)
	let template: any = null
	return (fn: (...args: any) => any) => {
		return (...args: any) => {
			if (!template) {
				template = stringifyCache(args)
			}
			const key = template(args)
			if (cache.has(key)) {
				return cache.read(key)
			} else {
				return cache.write(key, fn(...args))
			}
		}
	}
}
