import React from 'react'; import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap'
import '../App.css'
import logo512 from './logo512.png'
import Carousel from 'react-bootstrap/Carousel'
import dig from '../Dig.png'
import {withRouter}from 'react-router-dom'

class Login extends React.Component {

  constructor(props){
    super(props)
    this.state={
      email:""
    }
  }
  cambiarEmail = (event) => { this.props.setEmail(event.target.value) }

  cambiarPassWord = (event) => { this.props.setPassword(event.target.value) }

  confirmarDatos = () => {
    this.props.comprobar(this.props)
  }

  render() {
    return (
     <Carousel controls={false}>
       <Carousel.Item>
              <img
                className="d-block w-100"
                src={dig}
                alt="First slide"
              />
              <Carousel.Caption>
     <Form className="Formulario">
      <div className="centrarImagen"><img className="imagen" src={logo512}></img></div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={()=>{this.setState({email:"asas"})}} />
          <Spin state={this.state.email}></Spin>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <div className="bub">
        <Button variant="primary"  onClick={()=>{

          this.props.history.push("/Home")}} >
          Log In
        </Button>
        <Button variant="secondary"  >
          Register
        </Button>
        </div>
      </Form>
      </Carousel.Caption>
      </Carousel.Item>

      </Carousel>);
  }

}
const Spin =(state)=>{if (state.length >0) {return <div>escribiendo</div>}else{return null} }
export default withRouter(Login)