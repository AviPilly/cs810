// conditional types
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type t1 = Boxed<string>;
type t2 = Boxed<number[]>;
type t3 = Boxed<string | number[]>;
