//ARRAYS IN TS
// type numArr = number[]
// function maxArr(arr: numArr){
//     let max = arr[0];
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// maxArr([1, 2, 3, 4, 5]);


//INTERSECTION
// type emp ={
//     name: string;
//     age: number;
// }
// interface manager {
//     department: string;
// }
// type managerEmp = emp & manager;

// const yash: managerEmp = {
//     name: "yash",
//     age: 18,
//     department: "IT"
// }


//UNION
// type greetArg = string | number | boolean;

// function greet(arg: greetArg){

// }
// greet("yash");
// greet(1);
// greet(true);


// type user ={
//     firstName: string;
//     age: number;
//     email?: string;
// }


// interface user {
//     firstName: string;
//     age: number;
//     email?: string;
// }
// function isLegal (user: user){
//     if(user.age >= 18){
//         return true;
//     } else{
//         return false;
//     }
// }

// isLegal({
//     firstName: "yash",
//     age: 18
// })


// function runsAfter1S(fn: () => void){
//     setInterval(() => {
//         fn();
//     }, 1000);
// }
// runsAfter1S(function(){
//     console.log("Hello World");
// })


// function auth(age: number): boolean{
//     if(age >= 18){
//         return true;
//     } else{
//         return false;
//     }
// }
// const value = auth(18);
// console.log(value);


// function sum(a: number, b: number): number{
//     return a+b;
// }
// const value = sum(1, 2);
// console.log(value);


// function greet(firstName: string){
//     console.log("Hello " + firstName)
// }
// greet("yash")


// const x: number =1;
// console.log(x)