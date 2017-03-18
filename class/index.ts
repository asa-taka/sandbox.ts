import { Base, Extended } from './class'

const b = new Base({ p1: 'val1', options: { o1: 'user-opt1' }});
console.log(b.options);
// { o1: 'user-opt1', o2: 'Base.default', o3: 'Base.default' }

const e = new Extended({ p1: 'val1', e_p1: 'val2', options: {
  o1: 'user-opt1', e_o1: 'user-opt2' }
});
console.log(e.options);
// { o1: 'user-opt1',
//   o2: 'Extended.default overwrite Base.default', <- 上書きされてる
//   o3: 'Base.default',
//   e_o1: 'user-opt2',
//   e_o2: 'Extended.default' }
