import React from 'react';
import { Switch, Route } from  'react-router' 
import { BrowserRouter,NavLink} from 'react-router-dom';
import logo512 from './Component/logo512.png' 
import {Button} from 'react-bootstrap'

import Login from './Component/Login';
import Prueba from './Component/Prueba'
import Home from './Component/Home'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:"" ,
        error:"datos incompletos",
        mostraNav:false
      }
  }
  
  check=()=>{
    if(this.state.email !== "" && this.state.password !== "" ){
      console.log("datos completos")
      
    }
    else{
      
      console.log(this.state.error)
    }
  }
  cambiar=()=>{
    this.setState({mostraNav:true})
  }  

  cambiarT=()=>{
    this.setState({mostraNav:false})
  }  

   render(){
     return (
      <BrowserRouter>
        <NavBar name={this.state.mostraNav} setNav={this.cambiarT}></NavBar>
          <Switch>
            <Route exact path="/" render={props=><Login setNav={this.cambiar}></Login>}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/prueba" component={Prueba}></Route>
            <Route path ="/*" children={notFound}></Route>
            
          </Switch>
        
         
        </BrowserRouter>      
      );
    }
}


const NavBar=(name)=>{
  if (name.mostraNav) {  console.log(name)
    return (<NavLink to="/" onClick={(props)=>{props.setNavF()}} ><h1>Log Out</h1></NavLink>)}else{ console.log(name) ;return null}
 
}
const notFound= (props) =>  <Button variant="primary" type="submit" onClick={()=> props.history.push("/Login")} >
Log In
</Button>
