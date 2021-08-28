import React, { useState } from "react";

interface Istate{
    persono:{
        first_Name:string
        second_Name:string
        mobile:number
        isVerify:boolean
    }[]
}
const AddPerson = ()=>{
    const [person,setPerson]=useState<Istate["persono"]>([]);
    person.map((item)=>{
        console.log(item.first_Name)
    })
    // const [person,setPerson]=useState([{
    //     "first_Name":"Manan",
    //     "second_Name":"Jindal",
    //     "mobile":98654331,
    //     "isVerify":true
    // },
    // {
    //     "first_Name":"Suman",
    //     "second_Name":"Sunita",
    //     "mobile":98765431,
    //     "isVerify":undefined
    // }])
    return(
        <div>
            <h1>Add New Person</h1>
        </div>
    )
}

export default AddPerson;