export type set_member_type<I extends Set<unknown>> = I extends Set<infer O> ? O : never
