import React, {useReducer, useState} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//出使用reducer
const initData = {
    n:0
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'add' :
            return {n: state.n + action.number}
            break;
        case 'muti' :
            return {n:state.n*2}
            break;
        default:
            alert("未知type")
    }
}




function App(){
   const [state,dispatch] = useReducer(reducer,initData);
   const add = ()=>{
       return dispatch({type:"add",number:1})
   }

    return (
        <div className='App'>
            <h1>n:{state.n}</h1>
            <button onClick={add}>add</button>

        </div>
    )

}


ReactDOM.render(<App />, rootElement);
