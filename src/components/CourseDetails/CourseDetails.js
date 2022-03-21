import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BigPlayButton from 'video-react/lib/components/BigPlayButton'
import Player from 'video-react/lib/components/Player'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser'
import Loading from '../Loading/Loading';

export default class CourseDetails extends Component {

    constructor(props){
        super();

        this.state={
            MyCourseID:props.id,
            long_title:"",
            long_des:"",
            total_student:"",
            total_lecture:"",
            video_url:"",
            all_skill:"",
            loading:true
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseID).then(result=>{
            this.setState({long_title:result[0]['long_title'],
                            long_des:result[0]['long_des'],
                            total_student:result[0]['total_student'],
                            total_lecture:result[0]['total_lecture'],
                            video_url:result[0]['video_url'],
                            all_skill:result[0]['all_skill'],
                            loading:false
                    })
        })
    }

    render() {
        if(this.state.loading === true)
        {
            return <Loading/>
        }
        else
        {
            return (
                <Fragment>
                    <Container fluid = {true} className = "topFixedPageBanner p-0">
                        <div className='topPageBannerOverlay'>
                            <Container className ='topPageContentCourseDetails'>
                                <Row>
                                    <Col className='text-center' sm={12} md={6} lg={6}>
                                        <h3 className='coursePageFullTitle'>{this.state.long_title}</h3>
                                        <h5 className='coursePageSubTitle'>Total Student {this.state.total_student}</h5>
                                        <h5 className='coursePageSubTitle'>Total class {this.state.total_lecture}</h5>
                                    </Col>
                                    <Col sm={12} md={6} lg={6}>
                                        <p className='coursePageDes'>{this.state.long_des}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                    <Container className='mt-5'>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h1 className='serviceName'>Skill You will get</h1>
                                {parse(this.state.all_skill)}
                                <Button variant="primary">More Info</Button>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <Player>
                                    <source src={this.state.video_url} />
                                    <BigPlayButton position='center'></BigPlayButton>
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}
