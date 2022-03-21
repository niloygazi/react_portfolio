import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';

export default class RefundSection extends Component {

    constructor() {
        super();

        this.state={
            refund:"",
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({refund: result[0]['refund'],loading:false})
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
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} className='mt-5'>
                            {parse(this.state.refund)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
        }
    }
}
