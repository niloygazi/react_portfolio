import React, { Component } from 'react'
import { Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';

export default class ProjectDetails extends Component {

  constructor(props){
    super();

    this.state={
      MyProjectID:props.id,
      project_name:"",
      project_short_description:"",
      project_features:"",
      project_image_two:"",
      project_live_preview_url:"",
      loading:true

    }
  }

  componentDidMount(){
    RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectID).then(result=>{

      this.setState({project_name:result[0]['project_name'],
                    project_image_two:result[0]['project_image_two'], 
                    project_features:result[0]['project_features'], 
                    project_short_description:result[0]['project_short_description'], 
                    project_live_preview_url:result[0]['project_live_preview_url'],
                    loading:false})

    }).catch(error=>{

    })
  }

  render() {
    if(this.state.loading == true)
    {
      return <Loading/>
    }
    else
    {
      return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                          <img className='testClassOnProjectDetails' src={this.state.project_image_two}/>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                          <h2 className='serviceName'>{this.state.project_name}</h2>
                          <p className='serviceDes'>{this.state.project_short_description}</p>
                            {parse(this.state.project_features)} 
                          <Button variant="primary">Live Demo</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
      );
    }
  }
}
