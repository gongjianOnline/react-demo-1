import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      num:0,
      info:{
        name:'lilei',
        age:"18"
      }
    }
  };
  addFun = ()=>{
    console.log("123")
    this.setState({num:this.state.num + 1})
  }
  testFun =()=>{
    this.setState({name:this.state.info.name="tets"})
  }
  render(){
    return(
      <div>
        <p>appComponentVlaue:{this.state.num}</p>
        <button onClick={this.addFun}>add</button>
        <button onClick={this.testFun}>修改名称</button>
        <Child  number={this.state.num} 
                name={this.state.info.name} 
                age={this.state.info.age}></Child>
      </div>
    )
  }
}

class Child extends React.Component{
  constructor(props){
    super(props)
  };
  render(){
    return(
    <div>子组件{this.props.number},姓名{this.props.name},年龄：{this.props.age}</div>
    )
  }
}

export default App