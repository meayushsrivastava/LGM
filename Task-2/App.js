
import Users from "./cards";
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :([]), loading : false                
  }
  
	this.updateUsers = this.updateUsers.bind(this)
  }
  //Page 1 
  updateUsers(){

    this.setState({loading: true});

      setTimeout(async function(){
        const response1=await fetch("https://reqres.in/api/users?page=1");
      
      const jsonresponse1=await response1.json();
      
      // console.log(jsonresponse)
      this.setState({users_data:jsonresponse1["data"],loading:false});
      }.bind(this),1000);
      
    }



    
  render() {
  return (
    <>
    <nav className="navbar">
    <div className="navitems">
      <h2>Task2 GI</h2>
      <a name="" id="" class="btn btn-primary" onClick={this.updateUsers} role="button">Get Users</a>
       
    </div>
  </nav>
  <div className="users_data">
    <Users loading={this.state.loading} users={this.state.users_data}/>
  </div>

  </>
  );
  }
}

export default App;
