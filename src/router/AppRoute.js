import React, { Component, Fragment } from 'react';
import {Route, Routes} from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import {CourseDetailsPage} from '../pages/CourseDetailsPage';
import CoursesPage from '../pages/CoursesPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import PrivacyPage from '../pages/PrivacyPage';
import {ProjectDetailsPage} from '../pages/ProjectDetailsPage'; //This is from a Functional Component
import RefundPage from '../pages/RefundPage';
import ServicePage from '../pages/ServicePage';
import TermsPage from '../pages/TermsPage';

export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
              <Route path='/' element = {<HomePage/>}/>
              <Route path='/Service' element = {<ServicePage/>}/>
              <Route path='/Course' element = {<CoursesPage/>}/>
              <Route path='/Portfolio' element = {<PortfolioPage/>}/>
              <Route path='/Contact' element = {<ContactPage/>}/>
              <Route path='/About' element = {<AboutPage/>}/>
              <Route path='/Refund' element = {<RefundPage/>}/>
              <Route path='/Terms' element = {<TermsPage/>}/>
              <Route path='/Privacy' element = {<PrivacyPage/>}/>
              <Route path='/ProjectDetails/:projectID/:projectName' element = {<ProjectDetailsPage/>}/>
              <Route path='/CourseDetails/:courseID' element = {<CourseDetailsPage/>}/>
          </Routes>
      </Fragment>
    )
  }
}
