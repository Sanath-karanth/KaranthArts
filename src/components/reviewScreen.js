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
         faMoon, faAngleLeft,
         faPhone, faGlobe,
         faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { fontFamily, height } from '@mui/system';

const ReviewScreen = memo(() => {

  const [headertextShow,setHeadertextShow] = useState('feedback');
  const navigate  = useNavigate();
  const { getAlldata, createdata, deletedata } = useAuth();
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  const [carddatavalues,setCarddatavalues] = useState([]);
  const [tablevalues,setTablevalues] = useState([]);
  const [tablenull,setTablenull] = useState(false);
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


  function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
  
    return color;
  }

  const backClick = () => {
    navigate(-1);
}

const reviewData = async() => {
  try {
    getAlldata('feedbackdata').on('value', snapshot => {
     if (snapshot.val() != null) 
     {
      setTablenull(false);
       let mainarr = [];
       snapshot.forEach((item) => {
        let dbkey = item.key;
        let data = item.val();
        mainarr.push({
          dbkey: dbkey,
          uniqueID:data.uniqueID,
          username: data.usernameval,
          rating:data.rate,
          feedback: data.feedbackval,
          feedbackdate: data.feedbackdate,
        });
      });

      setCarddatavalues(mainarr);
       console.log("mail arr  ",mainarr);
      }
      else
      {
          setTablenull(true);
      }  
   })
 } catch(err) {
   console.log(err)
 }
};

useEffect(() => {
  reviewData();
},[]);

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
                {/* <HeaderScreen headerData={headertextShow} /> */}
                

              {/* ---------    main div   ----------- */}

              <Container fluid 
                       style={{
                           backgroundColor:theme.backgroundColorother, 
                           color: theme.color,
                           overflow: 'hidden'
                           }}>
                <div className='reviewcard-header' onClick={backClick}>
                  <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                </div>
                {tablenull ? <p className='emptydataerr'>There is no Data!!</p> : null }
                { carddatavalues.map((item,key) => {
                  return(
                    <Fragment key={key}>
                      <Row>
                        <Col xs="0" sm="2" md="2" lg="2" xl="3" xxl="4" xxxl="4"></Col>
                        <Col xs="12" sm="8" md="8" lg="8" xl="6" xxl="4" xxxl="4">
                          <div className='reviewMain-cont'>
                            <Card 
                                className='mt-3 mb-3 p-2 shadow-lg' 
                                style={{
                                    backgroundColor:theme.cardbgColor, 
                                    color: theme.color}}>
                                <Card.Body>
                                  <Row>
                                    <Col xs="3" sm="2" md="2" lg="2" xl="2" xxl="2" xxxl="2">
                                      <Avatar id='avatarContent' style={{
                                              backgroundColor: randomColor()
                                            }}>
                                          <p>{item?.username ?.charAt(0) || "UN"}</p>
                                      </Avatar>
                                    </Col>
                                    <Col xs="9" sm="10" md="10" lg="10" xl="10" xxl="10" xxxl="10">
                                      <div className='reviewcard-header-cont'>
                                            <div className='reviewcard-title'>
                                              <h3>{item.username}</h3>
                                            </div>
                                            
                                            <span style={{display:'flex',flexDirection:'row'}}>
                                              <ReactStars
                                                  count={5}
                                                  value={item.rating}
                                                  size={25}
                                                  color={'#ffd700'}>
                                              </ReactStars>
                                              <p className='review-rating-number'>{item.rating}</p>
                                            </span>

                                            <div className='reviewcard-date-cont'>
                                              <p>{item.feedbackdate}</p>
                                            </div>
                                      </div>
                                    </Col>
                                  </Row>
                                  {/* <Divider variant="inset" /> */}
                                  <Row>
                                    <Col>
                                      <div className='reviewcard-feedback-decription'>
                                        <p style={{paddingTop:'20px'}}>
                                          {item.feedback}
                                        </p>
                                      </div>
                                    </Col>
                                  </Row>
                                </Card.Body>
                            </Card>
                          </div>

                          
                        </Col>
                        <Col xs="0" sm="2" md="2" lg="2" xl="3" xxl="4" xxxl="4"></Col>
                      </Row>
                    </Fragment>
                  )
                })}
              </Container>

              {/* ---------    main div closes  ----------- */}
          </div>
        </div>
      </div>
    </Fragment>
  )
})

export default ReviewScreen