// extendings: O < A < B < C
interface O {}
interface A extends O { a: string; };
interface B extends A { b: string; };
interface C extends B { c: string; };

const o: O = {};
const a: A = { a: 'a' };
const b: B = { a: 'a', b: 'b' };
const c: C = { a: 'a', b: 'b', c: 'c' };

function assign<T>(...v: T[]) {
  return Object.assign({}, ...v) as T;
}

assign(o, a, b, c).c;
// -> error TS2339: Property 'c' does not exist on type 'O'.

assign(a, b, c).c;
// -> error TS2339: Property 'c' does not exist on type 'A'.

assign(b, c).c;
// -> error TS2339: Property 'c' does not exist on type 'B'.

assign(c).c;
// -> no error

assign(c, b, a, o).c;
// -> error TS2339: Property 'c' does not exist on type 'O'.
