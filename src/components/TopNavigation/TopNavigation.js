import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import '../../asset/css/responsive.css';
import whitelogo from '../../asset/image/navlogo.svg'
import bluelogo from '../../asset/image/navlogoScroll.svg'

export default class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            navBarTitle: "navTitle",
            navBarLogo: [whitelogo],
            navVariant: "dark",
            navBarBack: "navBackground",
            navBarItem: "navItem",
            pageTitle: props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100)
        {
            this.setState({navBarTitle:'navTitleScroll', navBarLogo:[bluelogo], navBarBack:'navBackgroundScroll', navBarItem: "navItemScroll", navVariant: "light"})
        }
        else if(window.scrollY<100)
        {
            this.setState({navBarTitle:'navTitle', navBarLogo:[whitelogo], navBarBack:'navBackground', navBarItem: "navItem", navVariant: "dark"})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

  render() {
    return (
        <Fragment>
            <title>{this.state.pageTitle}</title>
            <Navbar variant={this.state.navVariant} className = {this.state.navBarBack} fixed = "top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand ><NavLink to='/' className={this.state.navBarTitle}><img src = {this.state.navBarLogo}/> ABDUL JABBAR GAZI</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link><NavLink exact activeStyle={{color:'#00a88e'}} className={this.state.navBarItem} to='/'>HOME</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#00a88e'}} className={this.state.navBarItem} to='/Service'>SERVICES</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#00a88e'}} className={this.state.navBarItem} to='/Course'>COURSES</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#00a88e'}} className={this.state.navBarItem} to='/Portfolio'>PORTFOLIO</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#00a88e'}} className={this.state.navBarItem} to='/Contact'>CONTACT</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact activeStyle={{color:'#00a88e'}} className={this.state.navBarItem} to='/About'>ABOUT</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
  }
}
