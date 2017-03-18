;
;
;
const o = {};
const a = { a: 'a' };
const b = { a: 'a', b: 'b' };
const c = { a: 'a', b: 'b', c: 'c' };
function assign(...v) {
    return Object.assign({}, ...v);
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
