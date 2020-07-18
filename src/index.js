import React, {createContext, useContext, useReducer, useState} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//出使用useContent
const C = createContext(null)

function App(){
    const [n,setN] = useState(0)
    return(
       <C.Provider value={{n,setN}}>
           <div className="app">
               <Baba/>
           </div>
       </C.Provider>
    )
}

function Baba(){
    const {n,setN} = useContext(C)
    return(
        <div>
            this is baba n:{n}
            <Child/>
        </div>
    )
}

function Child(){
    const {n,setN} = useContext(C)
    const add = ()=>{
        setN((state)=>{
            return state+1
        })
    }
    return(
        <div>
            this is Child n:{n}
            <button onClick={add}>add</button>
        </div>
    )
}




ReactDOM.render(<App />, rootElement);
