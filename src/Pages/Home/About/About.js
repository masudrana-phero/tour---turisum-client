import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-card">
      <Container>
        <h1 className="text-danger py-3">Latest News & Articles</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src="https://image.freepik.com/free-photo/magnificent-dawn-with-hot-air-balloons_129479-8.jpg" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Journeys are best measured in new friends</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://img.freepik.com/free-photo/bag-beach-accessories-kept-sand_1252-475.jpg?size=338&ext=jpg" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lets start adventure with best tripo guides</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://image.freepik.com/free-photo/man-traveling-alone-montenegro_23-2149040707.jpg" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">South asia tour limited time packages</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
