interface INode {
	key: any
	value: any
	next: INode | null
	prev: INode | null
}

export class LRUCache {
	public cache: Map<any, any>
	private limit: number
	private head: INode | null
	private tail: INode | null

	constructor(limit: number) {
		this.limit = limit
		this.head = null
		this.tail = null
		this.cache = new Map()
	}

	public write(key: any, value: any): void {
		this.prune()
		if (!this.head) {
			this.head = this.tail = {
				key,
				next: null,
				prev: null,
				value,
			}
		} else {
			const node = {
				key,
				next: null,
				prev: null,
				value,
			}
			this.head.prev = node
			this.head = node
		}
		this.cache.set(key, this.head)
		return value
	}

	public has(key: any): any {
		return this.cache.has(key)
	}

	public read(key: any): any {
		if (this.cache.get(key)) {
			const value = this.cache.get(key).value
			this.remove(key)
			this.write(key, value)
			return value
		}
		return undefined
	}

	public clear(): void {
		this.head = null
		this.tail = null
		this.cache.clear()
	}

	private prune(): void {
		if (this.cache.size === this.limit && this.tail && this.tail.key) {
			this.remove(this.tail.key)
		}
	}

	private remove(key: any): void {
		const node = this.cache.get(key)
		if (node) {
			if (node.prev !== null) {
				node.prev.next = node.next
			} else {
				this.head = node.next
			}

			if (node.next !== null) {
				node.next.prev = node.prev
			} else {
				this.tail = node.prev
			}
		}
		this.cache.delete(key)
	}
}
