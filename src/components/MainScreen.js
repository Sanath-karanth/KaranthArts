import React, { memo, useState, useEffect, useContext } from 'react'
import '../css/MainScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import HeaderScreen,{cardgo} from '../common/headerScreen';
import FooterScreen from '../common/footerScreen';
import { makeStyles } from '@mui/styles';
import { Container, Row, Col, Button, Card, Carousel, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

const useStyles = makeStyles((theme) => ({

}))

const MainScreen = memo((props) => {
  const classes = useStyles();
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme" ,theme);

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

  const colors = [
    "linear-gradient(to left, #ee9ca7  0%,rgba(0,0,0,0) 60%), url('./images/banner/slider2.jpg') no-repeat",
   "linear-gradient(to left, #ee9ca7  0%,rgba(0,0,0,0) 60%), url('./images/banner/slider1.jpg') no-repeat",
   "linear-gradient(286deg, #5563A926  0%,#E9EAF4E6 35%, #FCFCFD 72%, #FFFFFF 100%), url('./images/banner/slider3.jpg') no-repeat"
  ];
  const delay = 2500;
  
  
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    
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
              <div className='carousel-container w-100'>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./images/banner/slider1.jpg"
                      style={{height:'400px',objectFit:'cover'}}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>Portrait Sketching</h5>
                      <p>Portrait painting is a genre in painting, where the intent is to represent a specific human subject.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./images/banner/slider2.jpg"
                      style={{height:'400px',objectFit:'cover'}}
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
             


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

             <div>
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
             </div>
              
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