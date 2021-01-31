import { _wrap_a1, a1_item_type, wrap_a1_type } from '@ctx-core/function'
/**
 * Returns a `set` with the _union of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _union<I extends unknown = unknown>(member_a1_nowrap_a1_nowrap:I) {
	const member_a1_nowrap_a1 = _wrap_a1<I>(member_a1_nowrap_a1_nowrap)
	let member_a1__set = [] as wrap_a1_type<I>[]
	for (let i = 0; i < member_a1_nowrap_a1.length; i++) {
		const member_a1 = _wrap_a1<a1_item_type<typeof member_a1_nowrap_a1>>(
			member_a1_nowrap_a1[i] as a1_item_type<typeof member_a1_nowrap_a1>
		) as typeof member_a1_nowrap_a1[]
		member_a1__set.push(...member_a1)
	}
	return new Set(member_a1__set) as Set<I>
}
export const _union__set = _union
