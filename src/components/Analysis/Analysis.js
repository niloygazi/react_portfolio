import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import parse from 'html-react-parser';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class Analysis extends Component {
    constructor(){
        super();

        this.state={
            data: [],
            techDesc: ""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data:result})
        })

        RestClient.GetRequest(AppUrl.TechDesc).then(result=>{
            this.setState({techDesc:result[0]['tech_description']})
        })
    }

    render() {
    var blue = "rgba(0, 115, 230, 0.8)";
    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>Technology Used</h1>
                <Row>
                    <Col style= {{height:'300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                <Tooltip/>
                                <Bar dataKey="Projects" fill={blue}></Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className='text-start des'>{parse(this.state.techDesc)}</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
  }
}
