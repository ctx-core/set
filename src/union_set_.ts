import { wrap_a_, a_item_T, wrap_a_T } from '@ctx-core/function'
/**
 * Returns a `set` with the _union of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function union_set_<I extends unknown = unknown>(member_a_nowrap_a_nowrap:I) {
	const member_a_nowrap_a = wrap_a_<I>(member_a_nowrap_a_nowrap)
	let set_member_a = [] as wrap_a_T<I>[]
	for (let i = 0; i < member_a_nowrap_a.length; i++) {
		const member_a = wrap_a_<a_item_T<typeof member_a_nowrap_a>>(
			member_a_nowrap_a[i] as a_item_T<typeof member_a_nowrap_a>
		) as typeof member_a_nowrap_a[]
		set_member_a.push(...member_a)
	}
	return new Set(set_member_a) as Set<I>
}
export {
	union_set_ as _union,
	union_set_ as set_union_fn,
	union_set_ as _union__set,
}
