import { _wrap_a1, a1_item_type } from '@ctx-core/function'
import { _union } from './_union'
import type { set_member_type } from './set_member_type'
/**
 * Returns a new set with a _difference of the array-like arguments.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference<I extends unknown>(
	member_a1_nowrap_a1_nowrap:I
) {
	const member_a1_nowrap_a1 = _wrap_a1<I>(member_a1_nowrap_a1_nowrap)
	const root_a1_nowrap = member_a1_nowrap_a1[0] as I extends unknown[] ? a1_item_type<I> : I
	const rest_a1_nowrap_a1 = member_a1_nowrap_a1.slice(1) as I extends unknown[] ? I : []
	const root_a1 = _wrap_a1<typeof root_a1_nowrap>(root_a1_nowrap)
	const rest_set = _union<typeof rest_a1_nowrap_a1>(rest_a1_nowrap_a1)
	let member_a1__set = [] as (set_member_type<typeof rest_set>)[]
	for (let i = 0; i < root_a1.length; i++) {
		const x = root_a1[i] as set_member_type<typeof rest_set>
		if (!rest_set.has(x)) member_a1__set.push(x)
	}
	return new Set(member_a1__set)
}
export const _difference__set = _difference
