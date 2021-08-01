

const data = [1 , 2 , 3, 4 ];
let sum = 4;



const begin = performance.now()
         
     data.map(datrix => {
        data.map(datum => {
             if( (datrix + datum ) == sum ){
                 console.log(datrix , datum)
             }
             else{
                 console.log("No number Like That");

             }
        })

        

     })

     const end = performance.now();


        console.log(end - begin);