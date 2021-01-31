import { _wrap_a1, a1_item_type, a_nowrap_type } from '@ctx-core/function'
/**
 * Returns a `set` with the _intersection of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _intersection<I extends unknown = unknown>(member_a1_nowrap_a1_nowrap:a_nowrap_type<I>) {
	const member_a1_nowrap_a1 = _wrap_a1<I>(member_a1_nowrap_a1_nowrap)
	const root_a1_nowrap = member_a1_nowrap_a1[0] as I extends unknown[] ? a1_item_type<I> : I
	const rest_a1_nowrap_a1 = member_a1_nowrap_a1.slice(1) as I extends unknown[] ? I : []
	const root_a1 = _wrap_a1<typeof root_a1_nowrap>(root_a1_nowrap)
	const member_set = new Set(root_a1) as Set<I>
	for (let i = 0; i < rest_a1_nowrap_a1.length; i++) {
		const rest_a1_nowrap = rest_a1_nowrap_a1[i]
		const rest_a1 = _wrap_a1(rest_a1_nowrap)
		const current_set = new Set(rest_a1)
		member_set.forEach(member=>{
			if (!current_set.has(member)) member_set.delete(member)
		})
	}
	return member_set
}
export const _intersection__set = _intersection
