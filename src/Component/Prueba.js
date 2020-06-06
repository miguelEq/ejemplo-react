import React from 'react';import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css'
import Image from 'react-bootstrap/Image'
import dig from '../Dig.png'
import { Row,Col, Container } from 'react-bootstrap'
export default class Prueba extends React.Component{

    render(){
        return (<Container>
          <Col xs={0} md={0}>
              <Image src={dig} rounded />
            </Col>

        
        </Container>)

    }
}

{/* <div className="wrapper">

  <div classname="color"><div className="box a">A</div></div>
  <div className="box b">B</div>
  <div className="box c">C</div>
  <div className="box d">D</div>
  <div className="box e">E</div>
  <div className="box f">F</div>
</div>          */}