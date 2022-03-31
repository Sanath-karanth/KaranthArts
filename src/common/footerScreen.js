import React, { memo, useContext } from 'react'
import '../css/footerstyle.css';
import logo from '../logo.svg';
import { ThemeContext } from '../contexts/themeContext';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const FooterScreen = memo(() => {
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    const currentyear = moment().format('YYYY');
  return (
    <Container 
        fluid 
        className='footer-Container pt-4'
        style={{backgroundColor:theme.footerbgcolor, color: theme.color}}>
        <div className='footer-sub-container'>
            <Row className="gx-0 footergutters">
                <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                    <div className='footer-headleft-text pb-2'>
                        <h4 style={{color: theme.footerheadtext}}>About us</h4>
                    </div>
                    <div className='footer-subleft-text'>
                        <FontAwesomeIcon 
                            icon={faUser} 
                            size="sm"
                            className='iconstyle' 
                            color={theme.headericoncolor} />
                        <h6>Sanath S Karanth</h6>
                    </div>
                    <div className='footer-subleft-text'>
                        <FontAwesomeIcon 
                            icon={faBriefcase} 
                            size="sm"
                            className='iconstyle' 
                            color={theme.headericoncolor} />
                        <h6>Software Engineer</h6>
                    </div>
                    <div className='footer-subleft-text'>
                        <FontAwesomeIcon 
                            icon={faEnvelope} 
                            size="sm"
                            className='iconstyle' 
                            color={theme.headericoncolor} />
                        <h6>sanathsk97@gmail.com</h6>
                    </div>
                    <div className='footer-subleft-text'>
                        <FontAwesomeIcon 
                            icon={faPhone} 
                            size="sm"
                            className='iconstyle' 
                            color={theme.headericoncolor} />
                        <h6>+91 9449685219</h6>
                    </div>
                </Col>
                <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                    <div className='footer-headcenter-text pb-2'>
                        <h4 style={{color: theme.footerheadtext}}>Services</h4>
                    </div>
                    <div className='footer-subcenter-text'>
                        <h6>Web Development</h6>
                    </div>
                    <div className='footer-subcenter-text'>
                        <h6>Responsive Web design and development</h6>
                    </div>
                    <div className='footer-subcenter-text'>
                        <h6>Web Hosting</h6>
                    </div>
                    <div className='footer-subcenter-text'>
                        <h6>React Framework</h6>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </Col>
                <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                    <div className='footer-headright-text pb-2'>
                        <h4 style={{color: theme.footerheadtext}}>Art Gallery</h4>
                    </div>
                    <div className='footer-subright-text'>
                        <p>Art is a creative activity that expresses imaginative or technical skill. 
                            It produces a product, an object. 
                            Art is a diverse range of human activities in creating visual,
                            performing artifacts, and expressing the author's imaginative mind. 
                            The product of art is called a work of art, for others to experience.</p>
                    </div>
                </Col>
    
            </Row>
            {/* <hr></hr> */}
            <Row className="gx-0">
                <div className="social-icons-container">
                    <div className='icon-cont'>
                        <a href="http://www.gmail.com" target="_blank">
                            <i className="fa fa-google-plus socialicon" style={{color:theme.footericoncolor}}></i>
                        </a>
                    </div>
                    <div className='icon-cont'>
                        <a href="http://www.facebook.com" target="_blank">
                            <i className="fa fa-facebook socialicon" style={{color:theme.footericoncolor}}></i>
                        </a>
                    </div>
                    <div className='icon-cont'>
                        <a href="http://www.linkedin.com" target="_blank">
                            <i className="fa fa-linkedin-square socialicon" style={{color:theme.footericoncolor}}></i>
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <p style={{color: theme.footerCopyrighttext}}>
                            Copyright &#169; {currentyear}. All Rights Reserved
                        </p>
                    </div>
                </div>
            </Row>
        </div>
    </Container>
  )
})

export default FooterScreen;