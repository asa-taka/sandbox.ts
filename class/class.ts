// デフォルト値処理を行う関数
function defaults<T>(...v: T[]) {
  v.reverse();
  return Object.assign({}, ...v) as T;
}

// base class ------------------------------------------------------------------

export class Base {

  // クラス変数にデフォルトオプションを定義
  static defaultOptions: Base.Options = {
    o1: 'Base.default', // ユーザ上書き用
    o2: 'Base.default', // 継承先上書き用
    o3: 'Base.default',
  };

  // インスタンス変数にオプションを定義
  options: Base.Options;

  constructor(public params: Base.Params) {

    // 引数 > デフォルト値の優先順でオプション値を拾ってくる
    this.options = defaults(params.options, Base.defaultOptions);
  }
}

// namespace でクラスと同一の名前空間にインタフェースを登録する
export namespace Base {
  export interface Params {
    p1: string;
    options?: Options;
  }
  export interface Options {
    o1?: string;
    o2?: string;
    o3?: string;
  }
}

// extended class --------------------------------------------------------------

export class Extended extends Base {

  static defaultOptions: Extended.Options = {
    e_o1: 'Extended.default', // ユーザ上書き用
    e_o2: 'Extended.default',
    o2: 'Extended.default overwrite Base.default', // Base のデフォルト値を上書き
  };

  options: Extended.Options;

  constructor(public params: Extended.Params) {
    super(params);

    // 引数 > デフォルト値 > 親クラスで処理された状態の `this.options`
    // の優先順でオプション値を拾ってくる
    // - `super` が終わった時点で `this.options` には `Base` のデフォルト値処理がなされている
    this.options = defaults(params.options, Extended.defaultOptions, this.options);
  }
}

export namespace Extended {
  export interface Params extends Base.Params {
    e_p1: string;
    options?: Options;
  }
  export interface Options extends Base.Options {
    e_o1?: string;
    e_o2?: string;
  }
}
