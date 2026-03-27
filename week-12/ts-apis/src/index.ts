interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User): number {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: "Alice", age: 30 }, { name: "Bob", age: 25 });

console.log(age);