import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//useRef使用
//强制更新的例子
function App(){
    const nRef = React.useRef(0)
    const update = React.useState()[1]
    const add = ()=>{
        return ((nRef.current++),update(nRef.current))
    }
    return (
        <div>
            <p>{nRef.current}</p>
            <button onClick={add}>add</button>
            <button>log</button>
        </div>
    )
}



ReactDOM.render(<App />, rootElement);
