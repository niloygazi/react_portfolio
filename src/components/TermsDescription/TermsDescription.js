import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';

export default class TermsDescription extends Component {

    constructor() {
        super();

        this.state={
            terms:"",
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({terms: result[0]['terms'], loading:false})
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
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12} className='mt-5'>
                                {parse(this.state.terms)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}
