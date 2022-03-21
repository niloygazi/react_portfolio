import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import graphicslogo from '../../asset/image/graphics.svg';
import weblogo from '../../asset/image/web.svg';
import mobilelogo from '../../asset/image/mobile.svg';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


export default class Services extends Component {

    constructor() {
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Service).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg ={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img src={weblogo}/>
                            <h2 className='serviceName'>{myList.service_name}</h2>
                            <p className='servicsDes'>{myList.service_description}</p>
                        </div>
                    </Col>
        })
    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>My Services</h1>
                <Row>
                    {myView}
                </Row>
            </Container>
        </Fragment>
    );
  }
}
