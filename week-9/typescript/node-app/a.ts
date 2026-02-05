function runsAfter1S(fn: () => void){
    setInterval(() => {
        fn();
    }, 1000);
}
runsAfter1S(function(){
    console.log("Hello World");
})


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