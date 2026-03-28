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

// user.userage=21 //error because user is readonly

//RECORD
type userAge = {
    [key: string]: number
}

type Users = Record<string, {age: number; name: string}>

const user2: Users = {
    "yash": {
        age: 22,
        name: "yash"
    },
    "yash@": {
        age: 3,
        name: "yash@"
    }
}

//MAP
const users = new Map<string, {age: number; name: string}>();
users.set("yash", {age: 22, name: "yash"});
users.set("yash@", {age: 3, name: "yash@"});

const first = users.get("yash");

//EXCLUDE
type eventType = 'click' | 'scroll' | 'mousemove';
type MouseEvent = Exclude<eventType, 'scroll'>; //click | mousemove

const eventHandle = (event: MouseEvent) => {
    //handle click and mousemove events
    console.log(`${event}`)
}

eventHandle('click'); // works
// eventHandle('scroll'); // error because scroll is excluded