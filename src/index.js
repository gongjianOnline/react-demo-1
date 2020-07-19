import React, {createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState,useRef} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//初始useRef
function App(){
    const count = useRef(0)
    const [n,setN] = useState(0)
    const [_,set_] = useState(0)
    const addN =()=>{
        count.current+=1
        set_(Math.random())
    }
    return (
        <div>
            <div>
                ref:{count.current}
                <button onClick={addN}>addN</button>
            </div>

        </div>
    )

}







ReactDOM.render(<App />, rootElement);
