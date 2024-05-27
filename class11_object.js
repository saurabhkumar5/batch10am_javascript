        //   state = panjab
        //   key-value pair = object

    //  let arr = ["manali","shimla","delhi","panjab"]
    // let arr = [[1,2,3],[],[]]
    //         // console.log(arr[0])

    //             let obj  =  {state:"panjab",capital:"delhi",pincode:123456}
    //                 // console.log(typeof(obj))
    //                 console.log(obj.capital)



                //   const a = {
                //         name:"mishu",
                //         age:10,
                //         hobbey:"singing",
                //         location:{
                //             country:"India",
                //             state:"panjab",
                //             dist:"mohali",
                //             pincode:456,
                //             dish:{
                //                veg:"momo" 
                //             }
                //         }

                //     }
                    // console.log(a.veg)
                    // console.log(a.location.pincode)

                    // console.log(a.location.dish.veg)

                 

                // const obj  =  {
                //         name:"rajwant",
                //         age:12,
                //         place:{
                //             country:"India",
                //             state:"Panjab"
                //         },
                //         hobbey:"dancing"

                //     }
                    // console.log(obj)

                    // for(let a in obj){
                    //     console.log(obj[a])
                    // }
                       
                    //   obj.place = "India"
                    //   obj.hobbey = "singing"
                    // //   delete obj.hobbey
                    // //   delete obj.place
                    // //   delete obj.name
                    //    obj.name = "simran"
                    // console.log(obj)


               let arr = [{name:"saahil",age:10,hobbey:"reading"},
                          {name:"naina",age:12,hobbey:"dancing"},
                          {name:"asraf",age:15,hobbey:"cricket"},
                        ]
                    //  console.log(arr[0])
                    //  console.log(arr[1])
                    //  console.log(arr[2])

                    // for(let i=0;i<3;i++){
                    //     console.log(arr[i])
                    // }
                    arr.map((value)=>{
                         console.log(value.name)
                    })