import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class Courses extends Component {

    constructor() {
        super();
        this.state={
            CourseList:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({CourseList: result})
        })
    }
render() {

        const courseList = this.state.CourseList;
        const CourseView = courseList.map(courseList=>{
            return <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row className='p-3'>
                            <Col className='p-2' lg={6} md={6} sm={12}>
                                <img className='courseImg' src={courseList.small_img}/>
                            </Col>
                            <Col className='p-2' lg={6} md={6} sm={12}>
                                <h5 className='text-start courseTitle'>{courseList.short_title}</h5>
                                <p className='text-start courseDes'>{courseList.short_description}</p>
                                <Link to={"/CourseDetails/"+courseList.id} className='courseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
        })


    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>Our Courses</h1>
                <Row>
                    {CourseView}
                </Row>
            </Container>
        </Fragment>
    );
  }
}
