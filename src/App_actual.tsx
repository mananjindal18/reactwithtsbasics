import React from "react";
import EnumExample,{HairColor} from "./components/EnumExample";
import { TextField } from "./components/TextField";

const App:React.FC = ()=>{
  // const handleChange= ()=>{
  //   console.log("Handle Change")
  // }
  return(
    <div>
    <TextField name="Manan"/>
   <EnumExample name="Robert" hairColor={HairColor.Brown}/>
    </div>
  )
}
export default App;