import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

export default class AboutDescription extends Component {
    constructor() {
        super();

        this.state={
            aboutDes:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            if(result == null)
            {
                this.setState({error:true, loading:false})
            }
            else
            {
            this.setState({aboutDes: result[0]['about'], loading:false, error:false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        });
    }

    render() {
        if(this.state.loading==true && this.state.error==false)
        {
            return <Loading/>
        }
        else if(this.state.loading==false && this.state.error==false)
        {
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12} className='mt-5'>
                                {parse(this.state.aboutDes)}
                            </Col>
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
