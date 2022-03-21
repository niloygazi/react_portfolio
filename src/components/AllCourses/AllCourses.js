import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

export default class AllCourses extends Component {
    constructor() {
        super();
        this.state={
            CourseList:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            if(result == null)
            {
                this.setState({error:true})
            }
            else
            {
            this.setState({CourseList: result, loading:false})
            }
        }).catch(error=>{
            this.setState({error:true})
        });
    }

render() {

    if(this.state.loading == true)
    {
        return <Loading/>
    }
    else if(this.state.loading==false)
    {
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
                <Container className='text-center mt-5'>
                    <Row>
                        {CourseView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
    else if(this.state.error == true)
    {
        <WentWrong/>
    }
}
}
