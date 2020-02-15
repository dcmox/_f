export const nl2br = (s: string) => s.replace(/\n/g, '<br />')
export const br2nl = (s: string) =>
	s.replace(/(<br([ ]*)?>|<br([ ]*)?\/>)/gi, '\n')
