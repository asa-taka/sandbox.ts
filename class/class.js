"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// デフォルト値処理を行う関数
function defaults(...v) {
    v.reverse();
    return Object.assign({}, ...v);
}
// base class ------------------------------------------------------------------
class Base {
    constructor(params) {
        this.params = params;
        // 引数 > デフォルト値の優先順でオプション値を拾ってくる
        this.options = defaults(params.options, Base.defaultOptions);
    }
}
// クラス変数にデフォルトオプションを定義
Base.defaultOptions = {
    o1: 'Base.default',
    o2: 'Base.default',
    o3: 'Base.default',
};
exports.Base = Base;
// extended class --------------------------------------------------------------
class Extended extends Base {
    constructor(params) {
        super(params);
        this.params = params;
        // 引数 > デフォルト値 > 親クラスで処理された状態の `this.options`
        // の優先順でオプション値を拾ってくる
        // - `super` が終わった時点で `this.options` には `Base` のデフォルト値処理がなされている
        this.options = defaults(params.options, Extended.defaultOptions, this.options);
    }
}
Extended.defaultOptions = {
    e_o1: 'Extended.default',
    e_o2: 'Extended.default',
    o2: 'Extended.default overwrite Base.default',
};
exports.Extended = Extended;
