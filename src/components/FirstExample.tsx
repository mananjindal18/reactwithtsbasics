import React, { useState } from "react";

const FirstExample = ()=>{
     const [count,setCount]=useState<number|string>(5)
     const age:number = 5;
     const isMarried:boolean=true;
     const getName = (name:string):number=>{
         if(name=="abc"){
             return 20
         }
         else{
             return 10
         }
     }
    //const [count,setCount]=useState(5)
    const handleCount = ()=>{
        setCount("10");
        getName('abc')
    }
    return(
        <div>First Example - {count}</div>
    )
}

export default FirstExample;