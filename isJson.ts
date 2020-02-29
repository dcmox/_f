export const isJson = (s: string) => {
	if (s.trim().search(/^(\[|\{){1}/) > -1) {
		try {
			const tmp = JSON.parse(s)
			return true
		} catch (e) {
			return false
		}
	}
	return false
}
