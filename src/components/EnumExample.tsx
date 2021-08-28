import React,{FC} from "react";
export enum HairColor{
    Brown = "Hair is brown in color",
    Blue = "Eyes are blue"
}
interface iProps {
    name:string
    hairColor:HairColor
}

const EnumExample: FC<iProps>=({name,hairColor})=>{
    return(
        <div>
            <h1>{name}</h1>
            <h2>{hairColor}</h2>
        </div>
    )
}
export default EnumExample;