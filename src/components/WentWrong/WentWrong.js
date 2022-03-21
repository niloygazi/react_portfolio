import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import error from '../../asset/image/error.svg'

export default class WentWrong extends Component {
    render() {
        return (
        <Fragment>
            <Container className='text-center'>
                <Row>
                    <Col>
                        <img className='loaderAnimation' src={error}/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}
