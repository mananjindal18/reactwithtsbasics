import React, { FC,useRef, useState }  from "react";

interface Person{
    firstName:string;
    lastName:string;
}
interface Props{
    name:string; //Mandatory as no ? is there
    ok?:boolean;
    i?:number; 
    fn?:(bob:string)=>string; //string is return type
    person?:Person;
    handleChange?:React.ChangeEventHandler<HTMLInputElement>;
}

export const TextField:FC<Props> = ({name,handleChange})=>{
    //const [count,setCount]=useState<number| null | undefined>(5);  //undefined and null are different type
    // const handleButton = ()=>{
    //     setCount(undefined)
    // }
    // const inputRef = useRef<HTMLInputElement>(null); //input Ref element
    // const divRef = useRef<HTMLDivElement>(null);
    // const handleChange = ()=>{
    //     console.log("Hello")
    // }
    const [country,setCountry]=useState('');
    const handleCounty = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("country",event.target.value);
    }
    return(
        <div>
         {/* <div ref={divRef}> */}
        <h1>{name}</h1>
         {/* <h2>{count}</h2> */}
         {/* <button onClick={handleButton} >Clicke</button> */}
         {/* <input ref={inputRef} onChange={handleChange}/> */}
<input placeholder="Enter here" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setCountry(event.target.value)}}/>
<input placeholder="Enter Country" onChange={handleCounty}/>
         <h4>{country}</h4>
        </div>
    )
}