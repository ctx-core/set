import { _wrap_a1 } from '@ctx-core/function';
import { _union } from './_union';
/**
 * Returns a new set with a _difference of the array-like arguments.
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference(member_a1_nowrap_a1_nowrap) {
    const member_a1_nowrap_a1 = _wrap_a1(member_a1_nowrap_a1_nowrap);
    const root_a1_nowrap = member_a1_nowrap_a1[0];
    const rest_a1_nowrap_a1 = member_a1_nowrap_a1.slice(1);
    const root_a1 = _wrap_a1(root_a1_nowrap);
    const rest_set = _union(rest_a1_nowrap_a1);
    let member_a1__set = [];
    for (let i = 0; i < root_a1.length; i++) {
        const x = root_a1[i];
        if (!rest_set.has(x))
            member_a1__set.push(x);
    }
    return new Set(member_a1__set);
}
export const _difference__set = _difference;
