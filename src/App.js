import { Component } from "react";
import Profile from "./Components/profile/Profile";


class App extends Component{
 state={
   show : false,
   count : 0,
 };
 handleShow=()=>{
   this.setState({
   show: !this.state.show
   });
 }
 componentDidMount(){

  setInterval(() => {
    this.setState({count: this.state.count + 1})
  },1000);
 }
  render() { 
    return (<div className="container col text-center mt-5  ">
      
      <button  className="btn btn-dark center" onClick={this.handleShow}>Show</button>
    
      {this.state.show ? <Profile/> : null}
        <h1 className="fixed-bottom mb-5" m>{this.state.count}</h1>

    </div>  );
  }
}
 
export default App;
