import React, {createContext, useContext, useEffect, useReducer, useState} from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");

//初使用useEffect和uselayoutEffect
/*
* useEffect的执行时机是在先虚拟DOM转换成DOM然后直接渲染UI后再执行useEffect(推荐 优选渲染UI)
* uselayoutEffect的执行时机是虚拟DOM转换成DOM后先执行layoutEffect然后在执行渲染UI的操作(用法和useEffect相同,只是执行时机不同)
*
* */


function App(){
    const [n,setN] = useState(0)
    const add =()=>{
        setN((state)=>{return state+1})
    }
    useEffect(()=>{
        let id = setInterval(()=>{ //页面初始化的时候调用定时器
            console.log("页面初始化的定时器")
        });
        return ()=>{ //页面销毁是清空定时器
            return window.clearInterval(id)
        }
    },[])
    return(
        <div>
            {n}
            <button onClick={add}>add</button>


        </div>
    )
}





ReactDOM.render(<App />, rootElement);
