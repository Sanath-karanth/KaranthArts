import React, { memo, useState, useEffect, useContext, Fragment } from 'react'
import '../css/aboutScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { useNavigate  } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import HeaderScreen,{portraitClick, photographyClick} from '../common/headerScreen';
import FooterScreen from '../common/footerScreen';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, 
         faImage, faCircleUser, 
         faPenToSquare, faSun, 
         faMoon, faEnvelope,
         faPhone, faGlobe,
         faLocationDot} from '@fortawesome/free-solid-svg-icons'

const AboutScreen = memo(() => {
  const [headertextShow,setHeadertextShow] = useState('about');
  const navigate  = useNavigate();
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

    const actions = [
      { icon: <FontAwesomeIcon icon={faHome} size="lg" />, name: 'Home', navigationto: homeClick },
      { icon: <FontAwesomeIcon icon={faCircleUser} size="lg" />, name: 'About', navigationto: aboutClick },
      { icon: <FontAwesomeIcon icon={faPenToSquare} size="lg" />, name: 'Feedback', navigationto: feedbackClick },
      { icon: <FontAwesomeIcon icon={isDark === false ? faSun : faMoon} size="lg" />, name: 'Theme', navigationto: toggleTheme },
    ];

    function homeClick() 
    {
      console.log("home clicked")
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

  return (
    <Fragment>
      <div className='MainContainer-about'>
        <div className='SubContainer-about'>
          <div className='HeadContainer-about'>
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
              <CssBaseline  />
              <HeaderScreen headerData={headertextShow} />

              {/* ---------    main div   ----------- */}

              <div className='MainAbout-cont' 
                   style={{
                        backgroundColor:theme.backgroundColor, 
                        // color: theme.color,
                        backgroundImage: "url('./images/a5.jpg')"
                      }}
                   >

                  <div className='cardcontent' 
                       style={{boxShadow: theme.aboutgradient}}
                       >
                    <div className='card-cover-image'>
                      <img
                          src='./images/Sanathprofile2.jpg'
                          alt='Cardimages here'
                          >
                      </img>
                      <div className='card-profile-image'>
                        <img
                            src='./images/Sanath2.jpg'
                            alt='Cardimages here'
                            >
                        </img>
                      </div>
                    </div>

                    <div className='cardtext-cont'>
                        <div className='cardtitle-cont'>
                          <h2 style={{textShadow: theme.textShadow}}>
                            Sanath S Karanth
                          </h2>
                        </div>
                        <div className='carddesp-cont'>
                          <FontAwesomeIcon 
                              icon={faEnvelope} 
                              size="sm"
                              className='iconstyle' 
                              color={theme.abouticoncolor} />
                          <h6>sanathsk97@gmail.com</h6>
                        </div>
                        <div className='carddesp-cont'>
                          <FontAwesomeIcon 
                              icon={faPhone} 
                              size="sm"
                              className='iconstyle' 
                              color={theme.abouticoncolor} />
                          <h6>+91 9449685219</h6>
                        </div>
                        <div className='carddesp-cont'>
                          <FontAwesomeIcon 
                              icon={faGlobe} 
                              size="sm"
                              className='iconstyle' 
                              color={theme.abouticoncolor} />
                          <h6>karantharts.netlify.com</h6>
                        </div>
                        <div className='carddesp-cont'>
                          <FontAwesomeIcon 
                              icon={faLocationDot} 
                              size="sm"
                              className='iconstyle' 
                              color={theme.abouticoncolor} />
                          <h6>Bangalore</h6>
                        </div>

                        
                        <div className="Aboutsocial-icons-container">
                            <div className='Aboutsocial-icon-cont'>
                                <a href="http://www.gmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-google-plus Aboutsocial-socialicon" style={{color:theme.aboutsocialiconcolor}}></i>
                                </a>
                            </div>
                            <div className='Aboutsocial-icon-cont'>
                                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook Aboutsocial-socialicon" style={{color:theme.aboutsocialiconcolor}}></i>
                                </a>
                            </div>
                            <div className='Aboutsocial-icon-cont'>
                                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square Aboutsocial-socialicon" style={{color:theme.aboutsocialiconcolor}}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                  </div>

              </div>

            {/* ---------    main div close  ----------- */}
          </div>
        </div>
      </div>
    </Fragment>
  )
})

export default AboutScreen