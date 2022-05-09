import React, { memo, useContext, Fragment } from 'react'
import '../css/aboutScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import HeaderScreen from '../common/headerScreen';
import { useNavigate  } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage,  
         faPenToSquare, faSun, 
         faMoon, faEnvelope,
         faPhone, faGlobe,
         faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Title from 'react-vanilla-tilt'

const AboutScreen = memo(() => {
  const headertextShow = 'about';
  const navigate  = useNavigate();
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

    const actions = [
      { icon: <FontAwesomeIcon icon={faHome} size="lg" />, name: 'Home', navigationto: homeClick },
      { icon: <FontAwesomeIcon icon={faImage} size="lg" />, name: 'Gallery', navigationto: galleryClick },
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

    function feedbackClick() 
    {
      navigate("/feedback");
    }

    function galleryClick() 
    {
      navigate("/gallery");
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
                        backgroundImage: "url('./images/a5.jpg')"
                      }}
                   >
              <Title options={{ scale: 2, max: 25 }}>
                
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
                                <a href="https://www.facebook.com/sanaths.karanth/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook Aboutsocial-socialicon" style={{color:theme.aboutsocialiconcolor}}></i>
                                </a>
                            </div>
                            <div className='Aboutsocial-icon-cont'>
                                <a href="https://www.linkedin.com/in/sanath-s-karanth-758bbb176" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square Aboutsocial-socialicon" style={{color:theme.aboutsocialiconcolor}}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>
                  </Title>
              </div>

            {/* ---------    main div close  ----------- */}
          </div>
        </div>
      </div>
    </Fragment>
  )
})

export default AboutScreen