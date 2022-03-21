import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RefundSection from '../components/RefundDescription/RefundSection'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class RefundPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
          <TopNavigation title='Refund Policy'/>
          <PageTop pageTitle='Refund Policy'/>
          <RefundSection/>
          <Footer/>
      </Fragment>
    )
  }
}
