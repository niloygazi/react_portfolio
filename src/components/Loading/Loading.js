import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import loadingicon from '../../asset/image/loader.svg'

export default class Loading extends Component {
    render() {
        return (
        <Fragment>
            <Container className='text-center'>
                <Row>
                    <Col>
                        <img className='loaderAnimation' src = {loadingicon}/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}
