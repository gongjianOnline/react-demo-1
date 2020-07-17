import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

//useState实现思路
/**
 *更改函数实现缺点
 * 若第一次渲染是n第一个,m是第二个,k是第三个
 * 则第二次渲染师必须保证顺序完全一致
 * (app组件中)
 * if(n%2===1){
 *      [m,setM] = useState(0)
 * }
 * */
let _state = [];
let index = 0;
const myuseState = (value)=>{
    let blockIndex = index;
    _state[blockIndex] = _state[blockIndex]===undefined?value:_state[blockIndex];
    const setState = (newValue)=>{
        _state[blockIndex] = newValue;
        console.log(_state)
        render()
    }
    index++
    return [_state[blockIndex],setState]
}
const render = ()=>{
    index=0
    return ReactDOM.render(<App />, document.getElementById('root'));
}


function App(){
    const [n,setN] = myuseState(0);
    const [m,setM] = myuseState(0);
    const add = ()=>{
        setN(n+1)
    }
    const addM = ()=>{
        setM(m+1)
    }
    useEffect(()=>{
        console.log("n update")
    },[n])
    return (
        <div>
            <p>{n}</p>
            <button onClick={add}>add</button>
            <p>{m}</p>
            <button onClick={addM}>add</button>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
