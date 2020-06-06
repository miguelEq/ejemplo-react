import React from 'react';import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form} from 'react-bootstrap'
import '../App.css'
import dig from '../Dig.png'
import Carousel from 'react-bootstrap/Carousel'
import {withRouter}from 'react-router-dom'

 class Home extends React.Component{
    render(){
        return (
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={dig}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Esta es la HOME</h3>
             
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
            );
    }
}

export default withRouter(Home)