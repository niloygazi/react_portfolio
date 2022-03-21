import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import clintImg from '../../asset/image/cr.jpg';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class ClientReview extends Component {
    constructor() {
        super();
        this.state={
            ClientReview:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({ClientReview: result})
        })
    }

    render() {

    var settings = {
        autoplay: true,
        autoplayspeed:3000,
        dots: true,
        infinite: true,
        speed: 3000,
        vertical: true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    const review = this.state.ClientReview;
    const ClientReview = review.map(review=>{
        return <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img className='circleImg' src={review.client_image}/>
                            <h1 className='serviceName'>{review.client_title}</h1>
                            <p className='servicsDes'>{review.client_description}</p>
                        </Col>
                    </Row>
                </div>
    })

    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>Client Says</h1>
                <Slider {...settings}>
                    {ClientReview}
                </Slider>
            </Container>
        </Fragment>
    );
  }
}
