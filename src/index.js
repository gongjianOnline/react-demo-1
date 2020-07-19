import React, {createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState,useRef} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//初始forwardRef
function App(){
    const buttonRef = useRef(null)
    return (
        <div>
            <Button3 ref={buttonRef}>button</Button3>
        </div>
    )
}

const Button3 = React.forwardRef((props,ref)=>{
    return(
        <button ref={ref} {...props}></button>
    )
})











ReactDOM.render(<App />, rootElement);
