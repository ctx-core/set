import { _wrap_a1, a1_nowrap_type } from '@ctx-core/function'
/**
 * Returns a `set` with the _union of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _union<I>(member_a1_nowrap_a1_nowrap: a1_nowrap_type<a1_nowrap_type<I>>) {
	const member_a1_nowrap_a1 = _wrap_a1<a1_nowrap_type<I>>(member_a1_nowrap_a1_nowrap)
	let member_a1__set = [] as I[]
	for (let i = 0; i < member_a1_nowrap_a1.length; i++) {
		const member_a1 = _wrap_a1<I>(member_a1_nowrap_a1[i])
		member_a1__set.push(...member_a1)
	}
	return new Set(member_a1__set)
}
export const _union__set = _union
