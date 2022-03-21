import React, { Fragment, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import {useParams} from "react-router-dom";

  export const  ProjectDetailsPage = () => {

    useEffect(() => {
      window.scroll(0,0)
    });

    let { projectID, projectName } = useParams();
    return (
      <Fragment>
          <TopNavigation title ='Project Details'/>
          <PageTop pageTitle={projectName}/>
          <ProjectDetails id={projectID}/>
          <Footer/>
      </Fragment>
    )
}