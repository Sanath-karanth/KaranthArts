import React, { memo, useState, useEffect, useContext } from 'react'
import '../css/MainScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import HeaderScreen,{portraitClick} from '../common/headerScreen';
import FooterScreen from '../common/footerScreen';
import { slideData, indiamapCardData, indiaarmysoldierCardData } from "../json/jsonData"
import { makeStyles } from '@mui/styles';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import AOS from 'aos';
import { useNavigate  } from "react-router-dom";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, faImage, faCircleUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((thememui) => ({

}))

const MainScreen = memo((props) => {
    const classes = useStyles();
    const navigate  = useNavigate();
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    const actions = [
      { icon: <FontAwesomeIcon icon={faHome} size="lg" />, name: 'Home', navigationto: homeClick },
      { icon: <FontAwesomeIcon icon={faPalette} size="lg" />, name: 'Portrait Arts and Sketchings', navigationto: portraitClick },
      { icon: <FontAwesomeIcon icon={faImage} size="lg" />, name: 'Photography', navigationto: portraitClick },
      { icon: <FontAwesomeIcon icon={faCircleUser} size="lg" />, name: 'About', navigationto: portraitClick },
      { icon: <FontAwesomeIcon icon={faPenToSquare} size="lg" />, name: 'Feedback', navigationto: portraitClick },
    ];

    function homeClick() {
      console.log("home clicked")
      // navigate("/demo");
      document.getElementById('back-to-top-anchor').scrollIntoView({
        behavior: 'smooth'
      });
    }
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
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 20, left: 10 }}
                icon={<SpeedDialIcon />}
                FabProps={{
                  sx: {
                    bgcolor: theme.speeddialcolor,
                    color: theme.speeddialPluscolor,
                    '&:hover': {
                      bgcolor: theme.speeddialcolor,
                      color: theme.speeddialIconhovercolor,
                    }
                  }
                }}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                      onClick={action.navigationto}
                      sx={{
                        color:theme.speeddialIconcolor, 
                        bgcolor: theme.speeddialcolor, 
                        '&:hover': {
                        color:theme.speeddialIconcolor, 
                        bgcolor: theme.speeddialIconhovercolor
                      }
                    }}
                    />
                  ))}
              </SpeedDial>
              <div id="back-to-top-anchor"></div>
            <CssBaseline  />
            <HeaderScreen  />
            
            <Container fluid 
                  className='mainheader' 
                  style={{backgroundColor:theme.backgroundColor, color: theme.color}}>
            

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
             

                {/* -----------    India map Container   ------------- */}
               <Container>
                <div className='headertextContent' id='PortraitArts'>
                  <h2 style={{color:theme.maincontentheadtextcolor}}>Portrait Arts and Sketchings</h2>
                </div>
                
                <div className='maincontentContainer mt-3 mb-3 pt-3 pb-3'>
                  <div className='shadow-lg bg-white rounded' 
                       data-aos="fade-up"
                       data-aos-duration="2000" 
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
                            <div className='card-image shadow p-3 bg-white'>
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
                              <h3 data-aos="fade-left"
                                  data-aos-duration="2000" 
                                  style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
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
                              {/* <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='anchorbutton'
                                onMouseOver={{color:'red'}}
                                style={{color: theme.cardbuttontextbordercolor, 
                                        border: `1px solid ${theme.cardbuttontextbordercolor}`}} 
                                href={item.aboutUrl}>
                                  {item.abouttext}
                              </a> */}
                              <Button 
                                className='buttonanchor'
                                style={{boxShadow: "4px 4px 3px rgba(46, 46, 46, 0.62)"}}
                                onClick={()=> window.open(item.aboutUrl, "_blank", "noopener noreferrer")}
                                variant={`outline-${theme.cardbuttoncolor}`}>
                                  {item.abouttext}
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      )
                    })}
                    </Card>
                  </div>
                  <div className='borderbox-bottom pb-2'
                       style={{backgroundColor:theme.bordercoloraqua}}
                       data-aos="zoom-in"
                       data-aos-duration="2000">
                  </div>
                </div>
              </Container>

              {/* -----------    Indian army soldier Container   ------------- */}

              <Container>
                <div className='maincontentContainer mt-3 mb-3 pt-3 pb-3'>
                  <div className='shadow-lg bg-white rounded' 
                       data-aos="fade-down"
                       data-aos-duration="2000" 
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
                              <h3 data-aos="fade-right"
                                  data-aos-duration="2000"
                                  style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
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
                                  style={{boxShadow: "4px 4px 3px rgba(46, 46, 46, 0.62)"}}
                                  onClick={()=> window.open(item.aboutUrl, "_blank", "noopener noreferrer")}
                                  variant={`outline-${theme.cardbuttoncolor}`}>
                                    {item.abouttext}
                              </Button>
                            </div>
                            
                          </div>
                          
                        </Col>
                        <Col xxs="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5" xxxl="5">
                            <div className='card-image shadow p-3 bg-white'>
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
                  <div className='borderbox-bottom pb-2'
                       style={{backgroundColor:theme.bordercolorpurple}}
                       data-aos="zoom-in"
                       data-aos-duration="2000">
                  </div>
                </div>
              </Container>

              <Container fluid >
                <div style={{backgroundColor:'#e2e8f0 '}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div container 2</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>

              <Container fluid >
                <div style={{backgroundColor:'#faf0e6'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div container 3</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>

              <Container fluid >
                <div style={{backgroundColor:'#fddde6'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div container 4</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{backgroundColor:'#e7feff'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div container 5</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{backgroundColor:'#c9ffe5'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div container 6</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #EFEFBB 0%, #D4D3DD 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 1</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #4b6cb7 0%, #182848 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 2</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #c9ffe5 0%, #0ABFBC 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 3</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #5f2c82 0%, #49a09d 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 4</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #EC6F66 0%, #F3A183 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 5</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #ECE9E6 0%, #D4D3DD 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 6</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #283048 0%, #859398 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 7</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #757F9A 0%, #D7DDE8 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 8</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #076585 0%, #ffffff 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 9</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>
              <Container fluid >
                <div style={{background: 'linear-gradient(to right, #BBD2C5 0%, #536976 100%)'}}>
                  <Row className='gx-0'>
                    <Col>
                        <h2>Div gradient 10</h2>
                    </Col>
                  </Row>
                </div> 
              </Container>

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