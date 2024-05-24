// types of function
// 1. simple function
// 2. arrow function
// 3. callback function
// 4. self invoking function
// 5. closure function
// 6. function hosting
// 7. generator function
// 8. async  await function
// 9. function constructor
// 10. recursive function
// 11. lexical environment
// 12. inner function
// 13. promises
// 14. callback hell
// 15. high order function

// 1. simple function

//    function greeting(){
//         //   console.log("most welcome")
//         for(let i = 0; i<=10; i++){
//             console.log(i*2)
//         }
//    }

//    greeting();
//    greeting()
//    greeting()
//    greeting()
//    greeting()

// for(let i = 0; i<=10; i++){
//     greeting()
// }

// for(let i = 0; i<=10; i++){
//     console.log("hello")
// }

// for(let i = 0; i<=10; i++){
//     console.log(i*2)
// }

// for(let i = 0; i<=10; i++){
//     console.log(i*2)
// }

// for(let i = 0; i<=10; i++){
//     console.log(i*2)
// }

// function table(){

//     for(let i = 0; i<=10; i++){
//         console.log(i*2)
//     }

// }

// table()
// table()
// table();
// for(let i = 0; i<=10; i++){
//     //   console.log("welcome",table())
//     table()
// }

// function table()
// {
//     for(let i=0;i<=10;i++)
//         {
//             console.log(i*2);
//         }
// }
// // table();
// // table();
// for(let i=0;i<=10;i++)
//     {
//         table()
//     }

//    function add(a,b,c){
//       console.log("add",a+b+c)
//       console.log("sub",a-b+c)
//    }
// console.log(4+5+6)
// console.log(1+2+3)

//    add(4,5,10)
// add(8,10,20)
// add(20,50,10)

//  const addition = function (a,b){
//       // console.log(a+b)
//       return 56
//    }

//  const y = addition(2,2)
//  console.log(y)

//    if(y>5){
//       // console.log("hello")
//    }else{
//       console.log("bye")
//    }

// const momo = function(){

//    console.log(a+b)
//    return "kullu"
// }
//  const a = momo()
//  console.log(a)

// function momo(){
//    return 12
// }
// let a = momo()
// console.log(a)

// arrow function

//   const momo  = (a,b)=>{
//         // console.log("hello")
//         return a
//      }

//    const a = momo([1,2,3],"shimla")
//    console.log(a)

// const a  = ()=>"manali"

//  const b = a()
//  console.log(b)

// for(let i = 0; i<=10; i++){
//         console.log(i*2)
// }

// for(let i = 0; i<=10; i++){
//         console.log(i*2)
// }
// for(let i = 0; i<=10; i++){
//         console.log(i*2)
// }

// function table(a){

//         for(let i = 0; i<=10; i++){
//                 console.log(i*a)
//         }
// }
// table(2)
// table(3)
// table(4)

//        const table = (a) => {
//            for (let i = 0; i <= 10; i++) {
//            console.log(i * a);
//             }
//         };
       
//            table(98)


        // const a = ()=>console.log("hello"); 
        //        a()



        // self invoking function

//       (
//         function(a){
//                 console.log("shmila",a)
//         }
//       )(12)


// 3. callback function

      // function greeting(a,b){

      //     const z = b()

      //   console.log("manali",a,z)
      // }

      // function welcome(){
      //   console.log("most welcome")

      // }
   
      // greeting(12,()=>"simran")
      
      

      // 15.