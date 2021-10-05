import React from "react"
import { Link } from "react-router-dom"
import { Carousel } from "react-bootstrap";
import library from "./library.jpg"
import library1 from "./library1.jpg"
import library2 from "./library3.png"
class Library extends React.Component {
  render() {
    return (
      
      <div>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={library}
      height="900px"
      width="50px"
      align="center"
      alt="First slide"
      
    />
    <Carousel.Caption>
     {/* <p>“Who doesn’t love a library? It is a place you can go in any town and discover the world.” – Pat MacEnulty</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={library1}
      height="900px"
      width="50px"
      align="center"
      alt="Second slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={library2}
      height="900px"
      width="50px"
      align="center"
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
      
     
        
      </div>



    )
  }
}

export default Library;