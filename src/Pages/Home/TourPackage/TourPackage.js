import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './TourPackage.css';

const TourPackage = () => {

  const [packages, setPakages] = useState([])

  useEffect(() => {
    fetch('https://whispering-falls-46387.herokuapp.com/card')
      .then(res => res.json())
      .then(data => setPakages(data))
  }, [])


  return (
    <div className="main-card">
      {
        (packages.length !== 0) ? <div className="my-5">
          <h1 className="mb-3 text-danger">Our services</h1>
          <div className="tour-card">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {
                  packages.map(pack => <Col>
                    <Card className="card-style mb-3">
                      <Card.Img
                        style={{ height: '220px' }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body className="cardBody">
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Text>{pack.des}</Card.Text>
                      </Card.Body>
                      <Link to={`/selected/${pack._id}`}><button className="btn mx-1 bg-primary text-white mt-10">
                        Book Now
                      </button></Link>
                    </Card>
                  </Col>)
                }
              </Row>
            </Container>
          </div>
        </div> : <h1>Loading...</h1>
      }
    </div>

  );
};

export default TourPackage;
