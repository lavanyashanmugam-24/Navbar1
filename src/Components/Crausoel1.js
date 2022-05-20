import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'

class Crausoel1 extends Component{
   
    render(){
        return(
        <>
        <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src="https://tse4.mm.bing.net/th?id=OIP.Fwz5_GP9vDplNrBzoadfAQHaDS&pid=Api&P=0&w=420&h=186"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src="https://tse4.mm.bing.net/th?id=OIP.fRupoDxDHHhZwPtfsy9ANAHaEo&pid=Api&P=0&w=269&h=168"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                </Carousel>
        </>
        )
    }
}
export default Crausoel1;