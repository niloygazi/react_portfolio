import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import ReactVisibilitySensor from 'react-visibility-sensor';

export default class Summary extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid = {true} className = "summaryBanner summarySection p-0">
                <div className='summaryBannerOverlay'>
                    <Container className="text-center">
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row className="countSection">
                                    <Col>
                                        <h1 className='countNumber'>
                                        <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <ReactVisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </ReactVisibilitySensor>  
                                        )}
                                        </CountUp>
                                        </h1>
                                        <h4 className='countTitle'>Total Projects</h4>
                                        {/* <hr className="bg-white w-25"/> */}
                                    </Col>
                                    <Col>
                                        <h1 className='countNumber'>
                                        <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <ReactVisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </ReactVisibilitySensor>  
                                        )}
                                        </CountUp>
                                        </h1>
                                        <h4 className='countTitle'>Total Client</h4>
                                        {/* <hr className="w-25 bg-white "/> */}
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <Card className='workCard'>
                                <Card.Body>
                                    <Card.Title className='cardTitle text-start'>How i Work</Card.Title>
                                    <Card.Text>
                                        <p className='cardSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle}/> Requirement Gathering</p>
                                        <p className='cardSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle}/> System Analysis</p>
                                        <p className='cardSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle}/> Implementation</p>
                                        <p className='cardSubTitle text-start'> <FontAwesomeIcon className='iconBullet' icon={faCheckCircle}/> Testing</p>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
    );
  }
}
