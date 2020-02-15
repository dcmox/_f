export const uniqueId = (prefix?: string, postfix?: string) => {
	return (
		(prefix || '') +
		(process && process.pid ? process.pid.toString(36) : '') +
		Timestamp.get().toString(36) +
		(postfix || '')
	)
}

class Timestamp {
	public static time: any
	public static last: any
	public static get(): number {
		this.time = new Date().valueOf()
		this.last = this.last || this.time
		return (this.last = this.time > this.last ? this.time : this.last + 1)
	}
}
