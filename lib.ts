import { _wrap_a1 } from '@ctx-core/function'
/**
 * @module @ctx-core/set/lib.js
 */
/**
 * Returns a `set` with the _union of the members
 * @param {*|Array<Array>} member_a1_nowrap_a1_nowrap
 * @returns {Set} The _union of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _union(member_a1_nowrap_a1_nowrap) {
	const member_a1_nowrap_a1 = _wrap_a1(member_a1_nowrap_a1_nowrap)
	let member_a1__set = []
	for (let i = 0; i < member_a1_nowrap_a1.length; i++) {
		const member_a1 = _wrap_a1(member_a1_nowrap_a1[i])
		member_a1__set.push(...member_a1)
	}
	return new Set(member_a1__set)
}
export const _union__set = _union
/**
 * Returns a `set` with the _intersection of the members
 * @param {*|Array<Array>} member_a1_nowrap_a1_nowrap
 * @returns {Set} The _intersection of the members
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _intersection(member_a1_nowrap_a1_nowrap) {
	const member_a1_nowrap_a1 = _wrap_a1(member_a1_nowrap_a1_nowrap)
	const [root_a1_nowrap, ...rest_a1_nowrap_a1] = member_a1_nowrap_a1
	const root_a1 = _wrap_a1(root_a1_nowrap)
	const member_set = new Set(root_a1)
	for (let i =0; i < rest_a1_nowrap_a1.length; i++) {
		const rest_a1_nowrap = rest_a1_nowrap_a1[i]
		const rest_a1 = _wrap_a1(rest_a1_nowrap)
		const current_set = new Set(rest_a1)
		member_set.forEach(member => {
			if (!current_set.has(member)) member_set.delete(member)
		})
	}
	return member_set
}
export const _intersection__set = _intersection
/**
 * Returns a new set with a _difference of the array-like arguments.
 * @param {*|Array<Array>} member_a1_nowrap_a1_nowrap - An array-like to perform the _difference operation on.
 * @returns {Set} The _difference of the array-like arguments.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference(member_a1_nowrap_a1_nowrap) {
	const member_a1_nowrap_a1 = _wrap_a1(member_a1_nowrap_a1_nowrap)
	const [root_nowrap_a1, ...rest_nowrap_a1] = member_a1_nowrap_a1
	const set__rest = _union(rest_nowrap_a1)
	const root_a1 = _wrap_a1(root_nowrap_a1)
	let member_a1__set = []
	for (let i = 0; i < root_a1.length; i++) {
		const x = root_a1[i]
		if (!set__rest.has(x)) member_a1__set.push(x)
	}
	return new Set(member_a1__set)
}
export const _difference__set = _difference
