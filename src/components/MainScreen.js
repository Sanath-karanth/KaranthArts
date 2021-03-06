import React, { memo, useEffect, useContext, Fragment } from 'react'
import '../css/MainScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import HeaderScreen,{portraitClick, photographyClick} from '../common/headerScreen';
import FooterScreen from '../common/footerScreen';
import { slideData, indiamapCardData, 
         indiaarmysoldierCardData, jokersCardData, 
         pulvamathreeCardData, armysniperCardData,
         actorsCardData, godsthreeCardData,
         teareyeCardData, waterdropomCardData,
         jokerhrithikthreeCardData, bottleEgleCardData,
         lovebirdsCardData, singlealoneCardData,
         redeyeCardData, racingCardData,
         beachCardData, beachbikeCardData,
         sunRiseCardData, sunsetCardData, 
         sunshineCardData, redRoseCardData, 
         yellowRoseCardData, OceanCardData, RivershoreCardData} from "../json/jsonData"
import { useNavigate  } from "react-router-dom";
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import AOS from 'aos';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, faImage, faCircleUser, faPenToSquare, faSun, faMoon, faCamera } from '@fortawesome/free-solid-svg-icons'


const MainScreen = memo((props) => {
    const navigate  = useNavigate();
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    // console.log("theme is ", theme)
    const actions = [
      { icon: <FontAwesomeIcon icon={faHome} size="lg" />, name: 'Home', navigationto: homeClick },
      { icon: <FontAwesomeIcon icon={faPalette} size="lg" />, name: 'Portrait Arts and Sketchings', navigationto: portraitClick },
      { icon: <FontAwesomeIcon icon={faCamera} size="lg" />, name: 'Photography', navigationto: photographyClick },
      { icon: <FontAwesomeIcon icon={faImage} size="lg" />, name: 'Gallery', navigationto: galleryClick },
      { icon: <FontAwesomeIcon icon={faCircleUser} size="lg" />, name: 'About', navigationto: aboutClick },
      { icon: <FontAwesomeIcon icon={faPenToSquare} size="lg" />, name: 'Feedback', navigationto: feedbackClick },
      { icon: <FontAwesomeIcon icon={isDark === false ? faSun : faMoon} size="lg" />, name: 'Theme', navigationto: toggleTheme },
    ];

    function homeClick() 
    {
      navigate("/");
      document.getElementById('back-to-top-anchor').scrollIntoView({
        behavior: 'smooth'
      });
    }

    function aboutClick() 
    {
      navigate("/about");
    }

    function feedbackClick() 
    {
      navigate("/feedback");
    }

    function galleryClick() 
    {
      navigate("/gallery");
    }

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
                    color: theme.speeddialPluscolor,
                    bgcolor: theme.speeddialcolor,
                    '&:hover': {
                      color: theme.speeddialPluscolor,
                      bgcolor: theme.speeddialcolor,
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
                       style={{
                         backgroundColor:theme.backgroundColor, 
                         color: theme.color,
                         overflow: 'hidden'
                         }}>

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

                {/* -----------    Heading Sketching   ------------- */}

                <Container>
                  <div className='headertextContent' id='PortraitArts'>
                    <h2 style={{color:theme.maincontentheadtextcolor}}>Portrait Arts and Sketchings</h2>
                  </div>
                </Container>

                {/* -----------    India map Container   ------------- */}
                
               <Container>
                  <div className='maincontentContainer mt-3 mb-3 pt-3 pb-3'>
                  {indiamapCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                        <div className='shadow-lg bg-white rounded' 
                             data-aos={item.carddirection}
                             data-aos-duration={item.twosecondDuration} 
                        >
                        <Card 
                          style={{
                            border: 'none',
                            borderRadius:'0',
                            backgroundColor:theme.cardbgColor, 
                            color: theme.color
                            }}>
                          <Row className='gx-0' key={key}>
                            <Col xxs="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5" xxxl="5">
                                <div className='cardone-image shadow p-3 bg-white'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection} 
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                       style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                            </Col>
                            <Col xxs="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7" xxxl="7">
                              <div className='singlecardtext-contentContainer'>
                                <div className='maincard-title-content'>
                                  <h3 data-aos={item.textdirection}
                                      data-aos-duration={item.twosecondDuration} 
                                      style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                </div>
                                <div className='maincard-quotedesp-content'>
                                  <p>
                                    <i className="fa fa-quote-left p-2"></i> 
                                      {item.quotedescription}
                                    <i className="fa fa-quote-right p-2"></i>
                                  </p>
                                </div>
                                <div className='maincard-desp-content'>
                                  <p>
                                    {item.description}
                                  </p>
                                </div>
                                <div className='maincard-artdesp-content'>
                                  <p>Art Creation Date:&nbsp;
                                    <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                  </p>
                                </div>
                                <div className='maincard-button-content'>
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
                          </Card>
                        </div>
                        <div className='borderbox-bottom pb-2'
                            style={{background: eval("theme." + item.bordercolor)}}
                            data-aos={item.borderdirection}
                            data-aos-duration={item.twosecondDuration}>
                        </div>
                      </Fragment>
                      )
                  })}
                  </div>
              </Container>

              {/* -----------    Indian army soldier Container   ------------- */}

              <Container>
                <div className='maincontentContainer mt-3 mb-3 pt-3 pb-3'>
                {indiaarmysoldierCardData.map((item,key) => {
                    return(
                    <Fragment key={key}>   
                      <div className='shadow-lg bg-white rounded' 
                           data-aos={item.carddirection}
                           data-aos-duration={item.twosecondDuration}
                          >
                        <Card 
                          style={{
                              border: 'none',
                              borderRadius:'0',
                              backgroundColor:theme.cardbgColor, 
                              color: theme.color
                              }}>
                        
                            <Row className='gx-0' >
                            <Col xxs="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7" xxxl="7">
                              <div className='singlecardtext-contentContainer'>
                                <div className='maincard-title-content'>
                                  <h3 data-aos={item.textdirection}
                                      data-aos-duration={item.twosecondDuration}
                                      style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                </div>
                                <div className='maincard-quotedesp-content'>
                                  <p>
                                    <i className="fa fa-quote-left p-2"></i> 
                                      {item.quotedescription}
                                    <i className="fa fa-quote-right p-2"></i>
                                  </p>
                                </div>
                                <div className='maincard-desp-content'>
                                  <p>
                                    {item.description}
                                  </p>
                                </div>
                                <div className='maincard-artdesp-content'>
                                  <p>Art Creation Date:&nbsp;
                                    <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                  </p>
                                </div>
                                <div className='maincard-button-content'>
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
                                <div className='cardone-image shadow p-3 bg-white'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection} 
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                      <div className='borderbox-bottom pb-2'
                           style={{background: eval("theme." + item.bordercolor)}}
                           data-aos={item.borderdirection}
                           data-aos-duration={item.twosecondDuration}>
                      </div>
                  </Fragment>
                   )
                   })}
                </div>
              </Container>

              {/*---------   Two cards Joker   -------  */}

              <Container fluid>
                <div className='paddingmarginContainer bggradient1'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {jokersCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                            <div className='shadow-lg card-topborders' 
                                  data-aos={item.carddirection}
                                  data-aos-duration={item.twosecondDuration}
                                  >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardone-image p-0'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='doublecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
                                    <Button 
                                        className='buttonanchor'
                                        style={{boxShadow: "4px 4px 3px rgba(46, 46, 46, 0.62)"}}
                                        onClick={()=> window.open(item.aboutUrl, "_blank", "noopener noreferrer")}
                                        variant={`outline-${theme.cardbuttoncolor}`}>
                                          {item.abouttext}
                                    </Button>
                                  </div>
                                </div>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>

            {/*---------   Three cards pulwama   -------  */}

              <Container fluid>
                <div className='paddingContainer bggradient2'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {pulvamathreeCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                            <div className='shadow-lg card-topborders' 
                                 data-aos={item.carddirection}
                                 data-aos-duration={item.twosecondDuration}
                            >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardthree-image'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='thribblecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                <Card.Footer className="text-muted">
                                <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>

            {/* --------------- Single Sniper gun card ----------------- */}

              <Container>
                <div className='maincontentContainer mt-3 mb-3 pt-3 pb-3'>
                  {armysniperCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                              <Row className='gx-0' >
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image shadow-lg'>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                    <div className="arttextoverlay" 
                                        style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                        >
                                      <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                    </div>
                                  </div>
                                  
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>

              {/*---------   Two cards actors   -------  */}

              <Container fluid>
                <div className='paddingmarginContainer bggradient3'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {actorsCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                            <div className='shadow-lg card-topborders' 
                                 data-aos={item.carddirection}
                                 data-aos-duration={item.twosecondDuration}
                            >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardone-image p-0'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='doublecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
                                    <Button 
                                        className='buttonanchor'
                                        style={{boxShadow: "4px 4px 3px rgba(46, 46, 46, 0.62)"}}
                                        onClick={()=> window.open(item.aboutUrl, "_blank", "noopener noreferrer")}
                                        variant={`outline-${theme.cardbuttoncolor}`}>
                                          {item.abouttext}
                                    </Button>
                                  </div>
                                </div>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>

               {/*---------   Three cards God   -------  */}

               <Container fluid>
                <div className='paddingContainer bggradient4'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {godsthreeCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                            <div className='shadow-lg card-topborders' 
                                 data-aos={item.carddirection}
                                 data-aos-duration={item.twosecondDuration}
                            >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardthree-image'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='thribblecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                <Card.Footer className="text-muted">
                                <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>

               {/* -----------    Indian army soldier Container   ------------- */}

               <Container>
                <div className='maincontentContainer mt-3 mb-3 pt-3 pb-3'>
                {teareyeCardData.map((item,key) => {
                    return(
                    <Fragment key={key}>   
                      <div className='shadow-lg bg-white rounded' 
                           data-aos={item.carddirection}
                           data-aos-duration={item.twosecondDuration}
                      >
                        <Card 
                          style={{
                              border: 'none',
                              borderRadius:'0',
                              backgroundColor:theme.cardbgColor, 
                              color: theme.color
                              }}>
                        
                            <Row className='gx-0' >
                            <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                              <div className='singlecardtext-contentContainer'>
                                <div className='maincard-title-content'>
                                  <h3 data-aos={item.textdirection}
                                      data-aos-duration={item.twosecondDuration}
                                      style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                </div>
                                <div className='maincard-quotedesp-content'>
                                  <p>
                                    <i className="fa fa-quote-left p-2"></i> 
                                      {item.quotedescription}
                                    <i className="fa fa-quote-right p-2"></i>
                                  </p>
                                </div>
                                <div className='maincard-desp-content'>
                                  <p>
                                    {item.description}
                                  </p>
                                </div>
                                <div className='maincard-artdesp-content'>
                                  <p>Art Creation Date:&nbsp;
                                    <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                  </p>
                                </div>
                                <div className='maincard-button-content'>
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
                            <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='cardone-image shadow p-3 bg-white'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection} 
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                            </Col>
                          </Row>
                      
                        </Card>
                      </div>
                      <div className='borderbox-bottom pb-2'
                           style={{background: eval("theme." + item.bordercolor)}}
                           data-aos={item.borderdirection}
                           data-aos-duration={item.twosecondDuration}>
                      </div>
                  </Fragment>
                   )
                   })}
                </div>
              </Container>

              {/*---------   Two cards Drop Omm   -------  */}

              <Container fluid>
                <div className='paddingmarginContainer bggradient5'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {waterdropomCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                            <div className='shadow-lg card-topborders' 
                                 data-aos={item.carddirection}
                                 data-aos-duration={item.twosecondDuration}
                            >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardone-image p-0'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='doublecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
                                    <Button 
                                        className='buttonanchor'
                                        style={{boxShadow: "4px 4px 3px rgba(46, 46, 46, 0.62)"}}
                                        onClick={()=> window.open(item.aboutUrl, "_blank", "noopener noreferrer")}
                                        variant={`outline-${theme.cardbuttoncolor}`}>
                                          {item.abouttext}
                                    </Button>
                                  </div>
                                </div>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>


               {/*---------   Three cards koker hrithik wolworine   -------  */}

               <Container fluid>
                <div className='paddingContainer bggradient6'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {jokerhrithikthreeCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                            <div className='shadow-lg card-topborders' 
                                 data-aos={item.carddirection}
                                 data-aos-duration={item.twosecondDuration}
                            >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardthree-image'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='thribblecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                <Card.Footer className="text-muted">
                                <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>


            {/*---------   Three cards bottle egle bird   -------  */}

            <Container fluid>
                <div className='paddingContainer bggradient7'>
                  <Container>
                  <Row className='gx-0 custom-gutters'>
                  {bottleEgleCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>
                          <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                            <div className='shadow-lg card-topborders' 
                                 data-aos={item.carddirection}
                                 data-aos-duration={item.twosecondDuration}
                            >
                              <Card 
                                className='card-topborders' 
                                style={{
                                  border:'none',
                                  backgroundColor:theme.cardbgColor, 
                                  color: theme.color
                                  }}>
                                <div className='cardthree-image p-3'>
                                  <img
                                      className='p-0' 
                                      data-aos={item.imagedirection}
                                      data-aos-duration={item.twosecondDuration}
                                      src={item.imgUrl}
                                      alt='Cardimages here'
                                      >
                                  </img>
                                  <div className="artnameoverlay maincard-title-content">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="arttextoverlay" 
                                      style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                      >
                                    <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                  </div>
                                </div>
                                <div className='thribblecardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                <Card.Footer className="text-muted">
                                <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </div>
                            <div className='borderbox-bottom pb-2'
                                 style={{background: eval("theme." + item.bordercolor)}}
                                 data-aos={item.borderdirection}
                                 data-aos-duration={item.twosecondDuration}>
                            </div>
                          </Col>
                      </Fragment>
                      )
                    })}
                    </Row>
                  </Container>
                </div> 
              </Container>

            {/* --------------- Single lovebirds card ----------------- */}

            <Container>
                <div className='maincontentContainer'>
                  {lovebirdsCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                              <Row className='gx-0' >
                              <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                                  <div className='cardone-image shadow-lg'>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                    <div className="arttextoverlay" 
                                        style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                        >
                                      <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                    </div>
                                  </div>
                                  
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8" xxxl="8">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single Alone man card ----------------- */}

            <Container>
                <div className='maincontentContainer'>
                  {singlealoneCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                              <Row className='gx-0 cardreverse' >
                              
                              <Col xxs="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8" xxxl="8">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                              <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                                  <div className='cardone-image shadow-lg'>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                    <div className="arttextoverlay" 
                                        style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                        >
                                      <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                    </div>
                                  </div>
                              </Col>
                            </Row>
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>

            {/* --------------- Single Red Eye card ----------------- */}

            <Container>
                <div className='maincontentContainer'>
                  {redeyeCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                              <Row className='gx-0' >
                              <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                                  <div className='cardone-image shadow-lg'>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                    <div className="arttextoverlay" 
                                         style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                         >
                                      <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                    </div>
                                  </div>
                                  
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8" xxxl="8">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single Alone man card ----------------- */}

            <Container>
                <div className='maincontentContainer'>
                  {racingCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0 cardreverse' >
                              <Col xxs="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8" xxxl="8">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                              <Col xxs="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4" xxxl="4">
                                  <div className='cardone-image shadow-lg'>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                    <div className="arttextoverlay" 
                                        style={Object.assign({justifyContent: item.artworkdisplay}, item.artworkposition === 'bottom' ? {bottom: 0} : {top:0})}
                                        >
                                      <p style={{color:item.arttextcolor,padding: item.artworkpadding}}>{item.artworkcategory}</p>
                                    </div>
                                  </div>
                              </Col>
                            </Row>
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>

              {/* -----------    Heading Photography   ------------- */}

              <Container>
                <div className='headertextContent' id='Photography'>
                  <h2 style={{color:theme.maincontentheadtextcolor}}>Photography</h2>
                </div>
              </Container>


               {/* --------------- Single Beach card ----------------- */}

               <Container>
                <div className='maincontentContainer'>
                  {beachCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                              <Row className='gx-0' >
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single BeachBike card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {beachbikeCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0 cardreverse'>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                            </Row>
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single Sun Raise card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {sunRiseCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0' >
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single Sun Set card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {sunsetCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0 cardreverse'>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                            </Row>
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


      {/* --------------- Single Sun Shine card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {sunshineCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0'>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                                  
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single Red Rose card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {redRoseCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0 cardreverse'>
                              <Col xxs="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7" xxxl="7">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                            </Row>
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>

        {/* --------------- Single Yellow Rose card ----------------- */}

            <Container>
                <div className='maincontentContainer'>
                  {yellowRoseCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0'>
                              <Col xxs="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5" xxxl="5">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7" xxxl="7">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


              {/* --------------- Single Ocean Wave card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {OceanCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0 cardreverse'>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                              </Col>
                            </Row>
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>


      {/* --------------- Single River Shore card ----------------- */}

              <Container>
                <div className='maincontentContainer'>
                  {RivershoreCardData.map((item,key) => {
                      return(
                      <Fragment key={key}>   
                        <div 
                            data-aos={item.carddirection}
                            data-aos-duration={item.twosecondDuration}
                            style={{
                              border: 'none',
                              borderRadius:'0',
                              color: theme.color
                              }}
                            >
                            <Row className='gx-0'>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                  <div className='cardone-image' style={{boxShadow:theme.imageshadow}}>
                                    <img
                                        className='p-0' 
                                        data-aos={item.imagedirection} 
                                        data-aos-duration={item.twosecondDuration}
                                        src={item.imgUrl}
                                        alt='Cardimages here'
                                        >
                                    </img>
                                    <div className="artnameoverlay maincard-title-content">
                                      <h3>{item.title}</h3>
                                    </div>
                                  </div>
                                  
                              </Col>
                              <Col xxs="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6" xxxl="6">
                                <div className='singlewithoutcardtext-contentContainer'>
                                  <div className='maincard-title-content'>
                                    <h3 data-aos={item.textdirection}
                                        data-aos-duration={item.twosecondDuration}
                                        style={{color:theme.cardtitletextcolor}}>{item.title}</h3>
                                  </div>
                                  <div className='maincard-quotedesp-content'>
                                    <p>
                                      <i className="fa fa-quote-left p-2"></i> 
                                        {item.quotedescription}
                                      <i className="fa fa-quote-right p-2"></i>
                                    </p>
                                  </div>
                                  <div className='maincard-desp-content'>
                                    <p>
                                      {item.description}
                                    </p>
                                  </div>
                                  <div className='maincard-artdesp-content'>
                                    <p>Art Creation Date:&nbsp;
                                      <small style={{color:theme.cardartdatetextcolor}}>{item.artdate}</small>
                                    </p>
                                  </div>
                                  <div className='maincard-button-content'>
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
                        </div>
                    </Fragment>
                    )
                    })}
                </div>
              </Container>

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