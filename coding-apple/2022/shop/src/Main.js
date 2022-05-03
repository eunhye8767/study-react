import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const Main = ({shoes, setShoes}) => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200/000"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200/000"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200/000"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='container'>
                <div className="row">
                {
                    shoes.map((ele, index) => {
                    return (
                        <Card shoes={shoes[index]} index={index} key={index} />
                    )
                    })
                }
                </div>
                <button 
                    className='btn btn-primary'
                    onClick={ () => {

                        axios.get("https://codingapple1.github.io/shop/data2.json")
                            .then( (result)=> { 
                                console.log(result.data);
                                setShoes([...shoes, ...result.data]);
                            } )
                            .catch( ()=> {} )
                    }}
                    >더보기</button>
            </div>
        </div>
    );
}

function Card({shoes, index}) {
    return (
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(index + 1)+'.jpg'} alt="" width="100%" />
        <h4>{ shoes.title }</h4>
        <p>{ shoes.content} & { shoes.price}</p>
      </div>
    )
}

export default Main;