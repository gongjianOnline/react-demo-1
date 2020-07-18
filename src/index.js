import React, {createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//初使用useMemo和React.memo
//用于防止App组件对子组件进行重复渲染,只要props不变就不会重新渲染子组件

function App(){
    console.log("调用了app")
    const [n,setN] = useState(0)
    const [m,setM] = useState(0)
    const addN = ()=>{
        setN((state)=>{
            return state+1
        })
    }
    // const addM = useMemo(()=>{
    //     return ()=>{
    //                 setM((state)=>{
    //                     return state+1
    //                 })
    //             }
    // },[m])

    //useMemo的语法糖
    const addM =useCallback(
        ()=>{
            setM((state)=>{
                return state+1
            })
        },[m]
    )


    return (
        <div>
            <div>
                prend:{n}
                <button onClick={addN}>addN</button>
            </div>
            {/*<Child2 data={m} onClick={addM}></Child2>*/}
            <Child2 data={m} onClick={addM}></Child2>
        </div>
    )

}

const Child2 = React.memo((props)=>{
    console.log("调用了CHild")
    return(
        <div>
            Child: {props.data}
            <button onClick={props.onClick}>addM</button>
        </div>
    )
})







ReactDOM.render(<App />, rootElement);
