import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import WentWrong from '../WentWrong/WentWrong';

export default class Footer extends Component {

    constructor() {
        super();

        this.state={
            address:"",
            email:"",
            phone:"",
            social_link_one:"",
            social_link_two:"",
            footer_credit:"",
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            if(result == null)
            {
                this.setState({error:true})
            }
            else
            {
                this.setState({
                    address: result[0]['address'], 
                    email: result[0]['email'],
                    phone: result[0]['phone'],
                    social_link_one: result[0]['social_link_one'],
                    social_link_two: result[0]['social_link_two'],
                    footer_credit: result[0]['footer_credit']
                })
            }   
            }).catch(error=>{
                this.setState({error:true})
            });
    }


    render() {

        if(this.state.error == true)
        {
            return <WentWrong/>
        }

        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-2 text-start'>
                            <h1 className='serviceName'>Follow Me</h1>
                            <a className='socialLink' href='//facebook.com'><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className='socialLink' href='//youtube.com'><FontAwesomeIcon icon={faYoutube}/> Youtube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-2 text-start'>
                            <h1 className='serviceName'>Address</h1>
                            <p className='servicsDes'>{this.state.address}</p>
                            <p className='servicsDes'><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</p>
                            <p className='servicsDes'><FontAwesomeIcon icon={faPhone}/> {this.state.phone}</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-2 text-start'>
                            <h1 className='serviceName'>Information</h1>
                            <Link className='footerLink' to='/About'>About Me</Link><br/>
                            <a className='footerLink' href='#'>My Resume</a><br/>
                            <Link className='footerLink' to='/Contact'>Contact</Link><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-2 text-start'>
                            <h1 className='serviceName'>Legal</h1>
                            <Link className='footerLink' to="/Refund">Refund Policy</Link><br/>
                            <Link className='footerLink' to='/Privacy'>Privacy Policy</Link><br/>
                            <Link className='footerLink' to='/Terms'>Tearms and Condition</Link><br/>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className='text-center copyrightSection'>
                    <a className='copyrightLink' href='#'>Niloy.dev &copy; 2022-2023</a>
                </Container>
            </Fragment>
        );
    }
}
