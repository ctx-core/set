import { _wrap_a1, a1_nowrap_type } from '@ctx-core/function'
import { _union } from './_union'
/**
 * Returns a new set with a _difference of the array-like arguments.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference<I = unknown>(member_a1_nowrap_a1_nowrap: a1_nowrap_type<a1_nowrap_type<I>>) {
	const member_a1_nowrap_a1 = _wrap_a1<a1_nowrap_type<I>>(member_a1_nowrap_a1_nowrap)
	const [root_nowrap_a1, ...rest_nowrap_a1] = member_a1_nowrap_a1
	const rest_set = _union<I>(rest_nowrap_a1)
	const root_a1 = _wrap_a1<I>(root_nowrap_a1)
	let member_a1__set = [] as I[]
	for (let i = 0; i < root_a1.length; i++) {
		const x = root_a1[i]
		if (!rest_set.has(x)) member_a1__set.push(x)
	}
	return new Set(member_a1__set)
}
export const _difference__set = _difference
