import { wrap_a_, wrap_a_T } from '@ctx-core/function'
import { union_set_ } from './union_set_'
import type { set_member_T } from './set_member_T'
/**
 * Returns a new set with a _difference of the array-like arguments.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_set_<I extends unknown = unknown>(
	member_a_nowrap_a_nowrap:I
):Set<I> {
	const member_a_nowrap_a = wrap_a_<I>(member_a_nowrap_a_nowrap)
	const root_a_nowrap = member_a_nowrap_a[0] as wrap_a_T<I>
	const rest_a_nowrap_a = member_a_nowrap_a.slice(1) as wrap_a_T<I>
	const root_a = wrap_a_<I>(root_a_nowrap)
	const rest_set = union_set_(rest_a_nowrap_a) as Set<wrap_a_T<I>>
	let set_member_a = [] as (set_member_T<typeof rest_set>)[]
	for (let i = 0; i < root_a.length; i++) {
		const x = root_a[i] as set_member_T<typeof rest_set>
		if (!rest_set.has(x)) set_member_a.push(x)
	}
	return new Set(set_member_a) as Set<I>
}
export {
	difference_set_ as _difference,
	difference_set_ as set_difference_,
	difference_set_ as _difference__set,
}
