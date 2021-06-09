import React from "react";
import { Carousel } from "react-bootstrap";

import firstbed from "../images/bed1.jpg";
import secondbed from "../images/bed2.jpg";
import thirdbed from "../images/bed3.jpg";
import fourthbed from "../images/bed4.jpg";
import fifthbed from "../images/bed5.jpg";

import sofa from "../images/sofa.png";
import bed from "../images/bed.png";

import './MainPart.css'

const MainPart = () => {
  return (
    <div className="mt-3" style={{ backgroundColor: "#2D232B" }}>
      <div
        style={{
          backgroundColor: "#181219",
          marginTop: "4px",
          marginBottom: "4px",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <div
          className="row"
          style={{ backgroundColor: "#1C191", width: "800px" }}
        >
          <div className="col-md-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block img-style"
                  src={firstbed}
                  style={{ borderRadius: "10px", }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={secondbed}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={thirdbed}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={fourthbed}
                  alt="fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={fifthbed}
                  alt="fifth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8" style={{ color: "white" }}>
            <p>3 bed room flat in Hackney Bridge</p>
            <p> € 1,420 pcm</p>
            <br />
            <img style={{ height: "30px", width: "40px" }} src={bed} alt=".." />
            &nbsp; 3 &nbsp;
            <img
              style={{ height: "30px", width: "40px" }}
              src={sofa}
              alt=".."
            />
            &nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
            <br />
            <br />
            <p>south kensington (0.1 mile)</p>
            <p>20/04/2021</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#181219",
          marginTop: "4px",
          marginBottom: "4px",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <div
          className="row"
          style={{ backgroundColor: "#1C191", width: "800px" }}
        >
          <div className="col-md-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block img-style"
                  src={firstbed}
                  style={{ borderRadius: "10px", }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={secondbed}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={thirdbed}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={fourthbed}
                  alt="fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={fifthbed}
                  alt="fifth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8" style={{ color: "white" }}>
            <p>3 bed room flat in Hackney Bridge</p>
            <p> € 1,420 pcm</p>
            <br />
            <img style={{ height: "30px", width: "40px" }} src={bed} alt=".." />
            &nbsp; 3 &nbsp;
            <img
              style={{ height: "30px", width: "40px" }}
              src={sofa}
              alt=".."
            />
            &nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
            <br />
            <br />
            <p>south kensington (0.1 mile)</p>
            <p>20/04/2021</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#181219",
          marginTop: "4px",
          marginBottom: "4px",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <div
          className="row"
          style={{ backgroundColor: "#1C191", width: "800px" }}
        >
          <div className="col-md-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block img-style"
                  src={firstbed}
                  style={{ borderRadius: "10px", }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={secondbed}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={thirdbed}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={fourthbed}
                  alt="fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ borderRadius: "10px", }}
                  className="d-block img-style"
                  src={fifthbed}
                  alt="fifth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8" style={{ color: "white" }}>
            <p>3 bed room flat in Hackney Bridge</p>
            <p> € 1,420 pcm</p>
            <br />
            <img style={{ height: "30px", width: "40px" }} src={bed} alt=".." />
            &nbsp; 3 &nbsp;
            <img
              style={{ height: "30px", width: "40px" }}
              src={sofa}
              alt=".."
            />
            &nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
            <br />
            <br />
            <p>south kensington (0.1 mile)</p>
            <p>20/04/2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
