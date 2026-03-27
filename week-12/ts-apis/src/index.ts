interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}
//PICK
type updateProps = Pick<User, 'name' | 'age' | 'email'>;
//PARTIAL
type updatePropsOptional = Partial<updateProps>;

function updateUser(user: updatePropsOptional) {
    //hit
}

//READONLY
type User2 = {
    username: string; //readonly specifically
    userage: number;
}

const user: Readonly<User2> = {
    username: 'yash',
    userage: 22
}

user.userage=21