import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import TopNavigation from "../components/TopNavigation/TopNavigation";

export const CourseDetailsPage =()=>{

  useEffect(() => {
    window.scroll(0,0)
  });

  let { courseID } = useParams(); 
    return (
      <Fragment>
          <TopNavigation title='Course Details'/>
          <CourseDetails id={courseID}/>
          <Footer/>
      </Fragment>
    )
  }