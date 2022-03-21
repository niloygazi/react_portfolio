import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export default class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false,
            video_desc:"",
            video_url:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.VideoHome).then(result=>{
            this.setState({
                video_desc: result[0]['video_description'], 
                video_url: result[0]['video_url']
                
            })
                
            })
    }

    modalClose=()=>this.setState({show:false});
    modalOpen=()=>this.setState({show:true});

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col className='videoCard' sm={12} md={12} lg={12}>
                            <div>
                                <p className='videoTitle'>How I Do</p>
                                <p className='videoDes'>{this.state.video_desc}</p>
                                <p><FontAwesomeIcon className='playButton' onClick={this.modalOpen} icon={faPlayCircle}/></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src={this.state.video_url} />
                            <BigPlayButton position='center'></BigPlayButton>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}