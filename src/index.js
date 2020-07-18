import React, {useState} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");


function App(){
    const [n,setN] = useState(0)
    const add = ()=>{
        setN((state)=>{
            return state+1
        })
    }


    return (
        <div className='App'>
            <h1>n:{n}</h1>
            <button onClick={add}>add</button>

        </div>
    )

}


ReactDOM.render(<App />, rootElement);
