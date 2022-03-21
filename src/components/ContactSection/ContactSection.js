import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

export default class ContactSection extends Component {

    constructor() {
        super();

        this.state={
            address:"",
            email:"",
            phone:"",
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({
                address: result[0]['address'], 
                email: result[0]['email'],
                phone: result[0]['phone'],
                loading:false
            })
                
        })
    }

    sendContact(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let msg = document.getElementById('msg').value;

        let jsonObject = {name:name,email:email,messege:msg};

        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(result=>{
            alert('Success');
        }).catch(error=>{
            alert("Failed");
        })
    }

    render() {
        if(this.state.loading==true)
        {
            return <Loading/>
        }
        else
        {
        return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                            <h1 className='serviceName'>Conact Now</h1>
                            <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className='servicsDes'>Name</Form.Label>
                                <Form.Control id='name' type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='servicsDes'>Email</Form.Label>
                                <Form.Control id='email' type="email" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='servicsDes'>Messege</Form.Label>
                                <Form.Control id='msg' as="textarea" Row='3' />
                            </Form.Group>
                            <Button onClick={this.sendContact} variant="primary">
                                Submit
                            </Button>
                            </Form>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                            <h1 className='serviceName'>Discuss Now</h1>
                            <p className='servicsDes'>{this.state.address}</p>
                            <p className='servicsDes'><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</p>
                            <p className='servicsDes'><FontAwesomeIcon icon={faPhone}/> {this.state.phone}</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
        }
    }
}
