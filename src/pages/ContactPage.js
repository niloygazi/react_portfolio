import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
          <TopNavigation title='Contact'/>
          <PageTop pageTitle="Contact Section"/>
          <ContactSection/>
          <Footer/>
      </Fragment>
    )
  }
}
