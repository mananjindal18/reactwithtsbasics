import React,{FC,createContext} from "react";

interface AppContextInterface{
  name:string;
  age:number;
  country:string;
}
const AppContext = createContext<AppContextInterface|null>(null)
const App:FC = ()=>{
  const contextValue:AppContextInterface = {
    name:"Tom",
    age:20,
    country:"Brazil"

  }
  return(
    <AppContext.Provider value={contextValue}>
    <div>
      <h1>{contextValue.age}</h1>
      <h1>{contextValue.name}</h1>
    </div>
    </AppContext.Provider>
  )
}
export default App;