import React, { memo, useState, useEffect, useContext, Fragment } from 'react'
import '../css/reviewScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate  } from "react-router-dom";
import ReactStars from 'react-stars'
import CssBaseline from '@mui/material/CssBaseline';
import HeaderScreen,{portraitClick, photographyClick} from '../common/headerScreen';
import { Container, Row, Col, Button, Card, Alert, Form } from 'react-bootstrap';
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
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { fontFamily } from '@mui/system';

const ReviewScreen = memo(() => {

  const [headertextShow,setHeadertextShow] = useState('feedback');
  const navigate  = useNavigate();
  const { createdata } = useAuth();
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  const [usernameval, setUsernameval] = useState('');
  const [feedbackval, setFeedbackval] = useState('');
  const [alertshowsuccess, setAlertshowsuccess] = useState(false);
  const [alertshowfail, setAlertshowfail] = useState(false);
  const [rate,setRate] = useState(5);
  var interval = null;

  const actions = [
    { icon: <FontAwesomeIcon icon={faHome} size="lg" />, name: 'Home', navigationto: homeClick },
    { icon: <FontAwesomeIcon icon={faPalette} size="lg" />, name: 'Portrait Arts and Sketchings', navigationto: portraitClick },
    { icon: <FontAwesomeIcon icon={faImage} size="lg" />, name: 'Photography', navigationto: photographyClick },
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

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        height: '50px',
        width: '50px',
        fontSize: '30px',
        fontFamily: '"Montserrat", sans-serif'
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const nameofsanath = 'S'

  return (
    <Fragment>
      <div className='MainContainer-review'>
        <div className='SubContainer-review'>
          <div className='HeadContainer-review'>
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

              <Container fluid 
                       style={{
                           backgroundColor:theme.backgroundColorother, 
                           color: theme.color,
                           overflow: 'hidden'
                           }}>
                <Row>
                  <Col xxs="0" xs="0" sm="2" md="2" lg="2" xl="3" xxl="4" xxxl="4"></Col>
                  <Col xxs="12" xs="12" sm="8" md="8" lg="8" xl="6" xxl="4" xxxl="4">
                    <div className='reviewMain-cont'>
                      <Card 
                          className='feedback-card-cont mt-3 mb-3 p-2 shadow-lg' 
                          style={{
                              backgroundColor:theme.cardbgColor, 
                              color: theme.color}}>
                          <Card.Body>
                            <Row>
                              <Col xxs="1" xs="1" sm="1" md="1" lg="1" xl="1" xxl="2" xxxl="2">
                                <Avatar {...stringAvatar(nameofsanath)}></Avatar>
                              </Col>
                              <Col xxs="8" xs="8" sm="8" md="8" lg="8" xl="8" xxl="8" xxxl="8">
                                <div className='reviewcard-header-cont'>
                                      <div className='reviewcard-title'>
                                        <h3>Sanath</h3>
                                      </div>
                                      
                                      <span style={{display:'flex',flexDirection:'row'}}>
                                        <ReactStars
                                            count={5}
                                            value={5}
                                            size={25}
                                            color={'#ffd700'}>
                                        </ReactStars>
                                        <p className='review-rating-number'>2</p>
                                      </span>
                                </div>
                              </Col>
                              <Col xxs="3" xs="3" sm="3" md="3" lg="3" xl="3" xxl="2" xxxl="2">
                                <div className='reviewcard-date-cont'>
                                  <p>05-05-2022</p>
                                </div>
                              </Col>
                            </Row>
                            {/* <Divider variant="inset" /> */}
                            <p style={{paddingTop:'20px'}}>
                                The system prop that allows defining system overrides as well as additional CSS styles.
                            </p>
                          </Card.Body>
                      </Card>
                    </div>

                    
                  </Col>
                  <Col xxs="0" xs="0" sm="2" md="2" lg="2" xl="3" xxl="4" xxxl="4"></Col>
                </Row>
              </Container>

              {/* ---------    main div closes  ----------- */}
          </div>
        </div>
      </div>
    </Fragment>
  )
})

export default ReviewScreen