import React from 'react';

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      n:0
    }
  }; 
  add= ()=>{
    this.setState(state=>({
      n: state.n + 1
    }));
    this.setState(state=>({
      n: state.n - 1
    }))
  };
  // shouldComponentUpdate(newProps,newState){ //生命周期函数,用于监听state和props的值是否变化,返回false和true决定是否渲染视图
  //   return !(newState.n === this.state.n)
  // }
  render(){
    console.log("render")
    // return(
      // <>
      //   App
      //   <div>{this.state.n}</div>
      //   <div>
      //     <button onClick={this.add}>add</button>
      //   </div>
      // </>
    // )
      
    if(this.state.n % 2 === 0){
      return <div>偶数</div>
    }else{
      return <span>奇数</span>
    }

    
  }
}


export default App