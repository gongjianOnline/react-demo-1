import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

//useState实现思路
let _state = null;
const myuseState = (value)=>{
    _state = _state===null?value:_state;
    const setState = (newValue)=>{
        _state = newValue;
        console.log(_state)
        render()
    }
    return [_state,setState]
}
const render = ()=>{
    return ReactDOM.render(<App />, document.getElementById('root'));
}


function App(){
    const [n,setN] = myuseState(0);
    const add = ()=>{
        setN(n+1)
    }
    useEffect(()=>{
        console.log("n update")
    },[n])
    return (
        <div>
            <p>{n}</p>
            <button onClick={add}>add</button>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
