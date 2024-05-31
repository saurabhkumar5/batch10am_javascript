
// 1. getElementByid

        //    const a = document.getElementById('123');
        //    const b = document.getElementById('kullu')
        //      console.log(a,b)


// 2. getElementByTagname

                //   const a  = document.getElementsByTagName('h1')
                //    console.log(a)

                //    const b = document.getElementsByTagName('p')
                //    console.log(b)

//   3. getElementByClassName     

                //   const value = document.getElementsByClassName('momo');
                //   console.log(value)

// 4.queryselector
                //        const data  = document.querySelectorAll('#hola')
                //        console.log(data)



// manipulation

            //        let value   =  document.querySelector('h1')
                        
            //             // value.style.backgroundColor = "red";
            //             // value.style.color = "yellow";
            //             // value.style.fontSize = "100px"
            //             // value.innerHTML = "i love india";
            //             // value.classList.add('momo')
            //             //  value.classList.replace('momo','hola')
            //             // value.classList.remove('momo')
            //             // console.log(value)


                        

            //          const data  =  document.createElement('h1')
                     
            //              data.innerHTML = "munisha simran preeti"
            //              console.log(data);
                             
            //              const a   = document.querySelector('.momo')
            //                     a.appendChild(data)
            //                     console.log(a)



            //     const para  =  document.createElement('p')
            //           para.innerHTML = "i am going to shimla"

            //           a.appendChild(para)
            //     console.log(para)


            //      const h1  =  document.querySelector('h1');
            //      const btn =  document.querySelector('button');



            //                let a = true;
            //                btn.addEventListener('click',function(){
                                 
            //                   // console.log("hello")
            //                   // h1.style.backgroundColor = "green"
                              
            //                  if(a){
            //                   h1.style.backgroundColor = "yellow"
            //                   h1.style.color = "red"
            //                   h1.style.textAlign = "center"
                            
            //                  }else{
            //                   h1.style.backgroundColor = ""
            //                   h1.style.color = ""
            //                   h1.style.textAlign = ""
            //                  }
            //                  a = !a
            //                  console.log(a)
                             
            //                })

                     
            

         const bulb  = document.querySelector('#img')
         const btn = document.querySelector('button')

           console.log(btn)

              btn.addEventListener('click',()=>{
                   
                  if(bulb.src.includes('bulboff.jpg')){
                        bulb.src = 'bulbon.jpg'
                   }else{
                        bulb.src = 'bulboff.jpg'
                   }
              })
             