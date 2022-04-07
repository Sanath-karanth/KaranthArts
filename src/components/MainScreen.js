import React, { memo, useState, useEffect, useContext } from 'react'
import {Link, useRoutes} from "react-router-dom";
import '../css/MainScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import HeaderScreen,{portraitClick} from '../common/headerScreen';
import FooterScreen from '../common/footerScreen';
import { slideData, indiamapCardData, indiaarmysoldierCardData } from "../json/jsonData"
import { makeStyles } from '@mui/styles';
import { Container, Row, Col, Button, Card, Carousel, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import AOS from 'aos';
import { height } from '@mui/system';

const useStyles = makeStyles((thememui) => ({

}))

const MainScreen = memo((props) => {
    const classes = useStyles();
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    console.log("theme" ,theme);
    // const colors = [
    //   "linear-gradient(to left, #ee9ca7  0%,rgba(0,0,0,0) 60%), url('./images/banner/slider2.jpg') no-repeat",
    // "linear-gradient(to left, #ee9ca7  0%,rgba(0,0,0,0) 60%), url('./images/banner/slider1.jpg') no-repeat",
    // "linear-gradient(286deg, #5563A926  0%,#E9EAF4E6 35%, #FCFCFD 72%, #FFFFFF 100%), url('./images/banner/slider3.jpg') no-repeat"
    // ];
    // const delay = 2500;
  
  
    // const [index, setIndex] = React.useState(0);
    // const timeoutRef = React.useRef(null);
  
    // function resetTimeout() {
    //   if (timeoutRef.current) {
    //     clearTimeout(timeoutRef.current);
    //   }
    // }

  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

 
  
    // React.useEffect(() => {
    //   resetTimeout();
    //   timeoutRef.current = setTimeout(
    //     () =>
    //       setIndex((prevIndex) =>
    //         prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    //       ),
    //     delay
    //   );
  
    //   return () => {
    //     resetTimeout();
    //   };
    // }, [index]);
  
    useEffect(() => {
      AOS.init({
          easing: 'ease-out-back',
          once: false,
      });
      AOS.refresh();
    }, []);

  return (
    <React.Fragment>
      <div className='MainContainer'>
        <div className='SubContainer'>
          <div className='HeadContainer'>

            <CssBaseline  />
            <HeaderScreen  />
            <Container fluid 
                  className='mainheader' 
                  style={{backgroundColor:theme.backgroundColor, color: theme.color}}>
            <div id="back-to-top-anchor"></div>

            {/* -----------   Slide Show design   ----------- */}
              
            <div className='carousel-container w-100'>
              <Carousel>
                { slideData.map((slideitem,key) => {
                  return(
                  <Carousel.Item key={key}>
                    <img
                      className="d-block w-100 carousel-img"
                      src={slideitem.imgUrl}
                      alt="First slide"
                    />
                    <Carousel.Caption className='carousel-content'>
                      <h5>{slideitem.title}</h5>
                      <p>{slideitem.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
                  })
                }
              </Carousel>
              
            </div>

             {/*--------------   Sketchings design part   ---------  */}
             

             <div className='maincontentContainer'>   {/* main div open */}

                {/* -----------    India map Container   ------------- */}
               <Container>
                <div className='headertextContent' id='PortraitArts'>
                  <h2 style={{color:theme.maincontentheadtextcolor}}>Portrait Arts and Sketchings</h2>
                </div>
                
                <div className='mb-4 mt-4 pt-4 pb-4'>
                  <div className='shadow-lg bg-white rounded' 
                       data-aos="fade-up" 
                       >
                    <Card 
                      style={{
                          border: 'none',
                          borderRadius:'0',
                          backgroundColor:theme.cardbgColor, 
                          color: theme.color
                          }}>
                    {indiamapCardData.map((item,key) => {
                      return(
                        <Row className='gx-0' key={key}>
                        <Col xxs="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5" xxxl="5">
                            <div className='card-image shadow p-3 bg-white rounded'>
                              <img
                                  className='p-0' 
                                  data-aos="flip-right" 
                                  data-aos-duration="2000"
                                  src={item.imgUrl}
                                  alt='Cardimages here'
                                  >
                              </img>
                            </div>
                        </Col>
                        <Col xxs="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7" xxxl="7">
                          <div className='cardtext-contentContainer'>
                            <div className='singlecard-title-content'>
                              <h3 style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                            </div>
                            <div className='singlecard-quotedesp-content'>
                              <p>
                                <i className="fa fa-quote-left p-2"></i> 
                                  {item.quotedescription}
                                <i className="fa fa-quote-right p-2"></i>
                              </p>
                            </div>
                            <div className='singlecard-desp-content'>
                              <p>
                                {item.description}
                              </p>
                            </div>
                            <div className='singlecard-artdesp-content'>
                              <p>Art Creation Date:&nbsp;
                                <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                              </p>
                            </div>
                            <div className='singlecard-button-content'>
                           
                              <Button 
                                className='buttonanchor'
                                variant={`outline-${theme.cardbuttoncolor}`}>
                                  <a 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    href={item.aboutUrl}>
                                      {item.abouttext}
                                  </a>
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      )
                    })}
                    </Card>
                  </div>
                  <div className='indiamap-borderbox pb-2'
                       style={{backgroundColor:theme.bordercoloraqua}}
                       data-aos="zoom-in"
                       data-aos-duration="2000">
                  </div>
                </div>
              </Container>

              {/* -----------    Indian army soldier Container   ------------- */}

              <Container>
                <div className='mb-4 mt-4 pt-4 pb-4'>
                  <div className='shadow-lg bg-white rounded' 
                       data-aos="fade-down" 
                       >
                    <Card 
                      style={{
                          border: 'none',
                          borderRadius:'0',
                          backgroundColor:theme.cardbgColor, 
                          color: theme.color
                          }}>
                    {indiaarmysoldierCardData.map((item,key) => {
                      return(
                        <Row className='gx-0' key={key}>
                        <Col xxs="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7" xxxl="7">
                          <div className='cardtext-contentContainer'>
                            <div className='singlecard-title-content'>
                              <h3 style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                            </div>
                            <div className='singlecard-quotedesp-content'>
                              <p>
                                <i className="fa fa-quote-left p-2"></i> 
                                  {item.quotedescription}
                                <i className="fa fa-quote-right p-2"></i>
                              </p>
                            </div>
                            <div className='singlecard-desp-content'>
                              <p>
                                {item.description}
                              </p>
                            </div>
                            <div className='singlecard-artdesp-content'>
                              <p>Art Creation Date:&nbsp;
                                <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                              </p>
                            </div>
                            <div className='singlecard-button-content'>
                           
                              <Button 
                                className='buttonanchor'
                                variant={`outline-${theme.cardbuttoncolor}`}>
                                  <a 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    href={item.aboutUrl}>
                                      {item.abouttext}
                                  </a>
                              </Button>
                            </div>
                            
                          </div>
                          
                        </Col>
                        <Col xxs="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5" xxxl="5">
                            <div className='card-image shadow p-3 bg-white rounded'>
                              <img
                                  className='p-0' 
                                  data-aos="flip-right" 
                                  data-aos-duration="2000"
                                  src={item.imgUrl}
                                  alt='Cardimages here'
                                  >
                              </img>
                            </div>
                            
                        </Col>
                      </Row>
                      )
                    })}
                    </Card>
                  </div>
                  <div className='indiamap-borderbox pb-2'
                       style={{backgroundColor:theme.bordercoloraqua}}
                       data-aos="zoom-in"
                       data-aos-duration="2000">
                  </div>
                </div>
              </Container>

              <Container fluid >
                <div className='bg-dark'>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div container 2</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>

            </div>    {/* main div close */}

             {/* <div className="slideshow">
                <div
                  className="slideshowSlider"
                  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                  {colors.map((backgroundColor, index) => (
                    <div
                      className="slide"
                      key={index}
                      style={{ background: backgroundColor }}
                    >
                      <p>uuu</p>
                    </div>
                  ))}
                </div>

                <div className="slideshowDots">
                  {colors.map((_, idx) => (
                    <div
                      key={idx}
                      className={`slideshowDot${index === idx ? " active" : ""}`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>
              </div> */}

             {/* <div>
               <Button onClick={cardgo}>
                 save
               </Button>
             </div>
             <div className='card-Container'>
             <Card style={{ width: '18rem',backgroundColor:theme.cardColor, color: theme.color }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary" className='buttonofgo'>Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',backgroundColor:theme.cardColor, color: theme.color }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary" className='buttonofgo'>Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',backgroundColor:theme.cardColor, color: theme.color }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary" className='buttonofgo'>Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card id='card4' style={{ width: '18rem',backgroundColor:theme.cardColor, color: theme.color }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary" className='buttonofgo'>Go somewhere</Button>
                </Card.Body>
              </Card>
             </div> */}
              
              <FooterScreen />
            </Container>
            
            <ScrollTop {...props}>
              <Fab color="error" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>

          </div>
        </div>
      </div> 
    </React.Fragment>
  )
})

export default MainScreen;  