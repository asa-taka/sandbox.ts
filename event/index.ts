interface User {
  name: string;
  age: number;
}

type UserKey = keyof User;

const k:UserKey = 'name';
const k1:User['age'] = 1;
