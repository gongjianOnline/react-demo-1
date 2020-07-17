import React,{useState,useEffect} from 'react';
import useUpdate from "./useUpdate"

const App = (props)=>{ //消除了 this
  const [n,setN] = useState(0);
  const onClickN = ()=>{
      setN(n+1)
  }
  
  //调用变化的监听
  useUpdate(()=>{
    console.log("n update")
  },n)

  return (
      <div>
        <div>
          {n}
          <button onClick={onClickN}>add</button>
        </div>
      </div>
  )
}
export default App