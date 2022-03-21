import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class RecentProjects extends Component {

    constructor() {
        super();

        this.state={
            projectData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
            this.setState({projectData:result})
        })
    }

  render() {
        const homeProjects = this.state.projectData;
        const projectView = homeProjects.map(homeProjects=>{
            return <Col sm={12} md={6} lg={4} className='p-2'>
                        <Card className='projectCard'>
                            <Card.Img variant="top" className="projectImg" src={homeProjects.project_image_one} />
                            <Card.Body>
                                <Card.Title className='projectCardTitle'>{homeProjects.project_name}</Card.Title>
                                <Card.Text className='projectCardDes'>
                                    {homeProjects.project_short_description}
                                </Card.Text>
                                <Button variant="primary"><Link className='link-style' to={"/ProjectDetails/"+homeProjects.id+"/"+homeProjects.project_name}>Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
        })
    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>Recent Projects</h1>
                <Row>
                    {projectView}
                </Row>
            </Container>
        </Fragment>
    );
  }
}
