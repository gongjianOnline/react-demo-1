import React,{useState,useEffect} from 'react';

// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {n:1}
//   };
//   onClick= ()=>{
//     this.setState((state)=>({
//       n:state.n+1
//     }))
//   };
//   render(){
//     return (
//         <div>
//           <span>{this.state.n}</span>
//           <button onClick={this.onClick}>add</button>
//         </div>
//     )
//   }
// }


const App = (props)=>{ //消除了 this
  const [n,setN] = useState(0);
  const [m,setM] = useState(0);
  const onClickN = ()=>{
    setN(n+1)
  }
  const onClickM = ()=>{
    setM(m+1)
  }
  useEffect(()=>{
    console.log("第一次渲染")
  },[]);
  useEffect(()=>{
    console.log("n update")
  },[n])
  useEffect(()=>{
    console.log("n AND m update")
  },[n,m])

  return (
      <div>
        <div>
          {n}
          <button onClick={onClickN}>add</button>
        </div>
        <div>
          {m}
          <button onClick={onClickM}>add</button>
        </div>

      </div>
  )
}
export default App