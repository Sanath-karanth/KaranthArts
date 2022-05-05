import React, { memo, useState, useContext, Fragment } from 'react'
import '../css/feedbackScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { useAuth } from "../contexts/AuthContext";
import HeaderScreen from '../common/headerScreen';
import { useNavigate  } from "react-router-dom";
import { Container, Row, Col, Button, Card, Alert, Form } from 'react-bootstrap';
import ReactStars from 'react-stars'
import { Formik } from 'formik';
import moment from 'moment';
import CssBaseline from '@mui/material/CssBaseline';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, faCircleUser, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'

const FeedbackScreen = memo(() => {
    const headertextShow = 'feedback';
    const navigate  = useNavigate();
    const { createdata } = useAuth();
    let feedbackdate = moment().format('LLL');;
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    const [usernameval, setUsernameval] = useState('');
    const [feedbackval, setFeedbackval] = useState('');
    const [alertshowsuccess, setAlertshowsuccess] = useState(false);
    const [alertshowfail, setAlertshowfail] = useState(false);
    const [rate,setRate] = useState(5);
    var interval = null;

    const actions = [
      { icon: <FontAwesomeIcon icon={faHome} size="lg" />, name: 'Home', navigationto: homeClick },
      { icon: <FontAwesomeIcon icon={faImage} size="lg" />, name: 'Gallery', navigationto: galleryClick },
      { icon: <FontAwesomeIcon icon={faCircleUser} size="lg" />, name: 'About', navigationto: aboutClick },
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
    
    function galleryClick() 
    {
      navigate("/gallery");
    }

    const ratingChange = (newRating) => {
        setRate(newRating);
      }

      const validate = (values) => {
        const errors = {};
    
        if (!values.username) {
            errors.username = '* Username is required.';
        }else if (!/^[A-Za-z\b\s]+$/.test(values.username)) {
            errors.username = 'Please enter a Valid username.';
        }

        if (!values.feedback) {
            errors.feedback = '* Feedback is required!';
            }else if (!/^[a-zA-Z0-9\&\)\(\+\/\.\,\:\;\'\"\-\b\s ]+$/g.test(values.feedback)) {
            errors.feedback = 'Please enter the valid characters.';
        }
    
        return errors;
    };

    const timeoutfinish = () => {
        clearInterval(interval);
        setAlertshowsuccess(false);
        setAlertshowfail(false);
        navigate("/");
    }

    const handleSubmit = async(values) => {
        interval = setTimeout(timeoutfinish, 3000);
        let userstorevalue = localStorage.getItem('UserName');
        if(userstorevalue === usernameval)
        {
          console.log("username equal");
          console.log(userstorevalue);
          setAlertshowfail(true);
          setAlertshowsuccess(false);
        }
        else
        {
            console.log("username not equal");
            console.log(userstorevalue);
            localStorage.setItem('UserName',usernameval);
            let uniqueID = Math.floor(Math.random() * 1000);
            let formfielddata = {uniqueID,usernameval,feedbackval,rate,feedbackdate}
            try {
              await createdata('feedbackdata',formfielddata)
              console.log("Database created...");
              setAlertshowfail(false);
              setAlertshowsuccess(true);
              values.username = ""
              values.feedback = ""
            } catch(err) {
              console.log(err);
              setAlertshowfail(true);
            }
        }
      }


  return (
    <Fragment>
      <div className='MainContainer-feedback'>
        <div className='SubContainer-feedback'>
          <div className='HeadContainer-feedback'>
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
                    <Col xxs="0" xs="0" sm="2" md="3" lg="3" xl="4" xxl="4" xxxl="4"></Col>
                    <Col xxs="12" xs="12" sm="8" md="6" lg="6" xl="4" xxl="4" xxxl="4">
                        <div className='feedbackMain-cont'>
                            <Card 
                                className='review-card-cont mt-3 p-2 shadow-lg' 
                                style={{
                                    backgroundColor:theme.cardbgColor, 
                                    color: theme.color}}
                            >
                            <Card.Body>
                                <div className='Loginheadtext'>
                                    <h4 className="text-center mb-3">Feedback Form</h4>
                                </div>
                                
                                    <Alert show={alertshowsuccess} variant="success">Thanks for your valuable feedback.</Alert>
                                    <Alert show={alertshowfail} variant="danger">You have already submitted your feedback!</Alert>
                                <Formik 
                                    initialValues={{ username: usernameval, feedback: feedbackval }}
                                    validate={validate}
                                    onSubmit={handleSubmit}
                                    >
                                {({ handleChange, handleSubmit, values, errors }) => (

                                <Form>        
                                    <Form.Group id="username" className='mb-3'>
                                        <Form.Label className="labeltext pb-1">User Name</Form.Label>
                                        <Form.Control type="text" 
                                                    placeholder="Enter Full name"
                                                    autoComplete='off' 
                                                    id="placeholdertext"
                                                    name="username" 
                                                    value={values.username}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setUsernameval(e.target.value)}
                                                        }
                                                    ></Form.Control>
                                    </Form.Group>
                                    { errors.username &&
                                        <div className='errortext mb-2'>
                                            {errors.username}
                                        </div>
                                    }
                                    <Form.Group id="feedback" className='mb-3'>
                                        <Form.Label className="labeltext pb-1">Feedback</Form.Label>
                                        <Form.Control type="text"
                                                    as="textarea" 
                                                    style={{ height: '100px' }}
                                                    placeholder="Enter your Valuable Feedback" 
                                                    id="placeholdertext"
                                                    name="feedback"
                                                    value={values.feedback}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setFeedbackval(e.target.value)}
                                                    } 
                                                    ></Form.Control>
                                    </Form.Group>
                                    { errors.feedback &&
                                        <div className='errortext mb-2'>
                                            {errors.feedback}
                                        </div>
                                    }
                                    <Form.Group id="rating">
                                        <div className='rating-cont'>
                                            <Form.Label className="labeltext" >
                                                Rating 
                                            </Form.Label>
                                            <p>
                                                (<span className='ratechange'> {rate} </span>
                                                /
                                                <span className='ratefixed'> 5 </span>)
                                            </p>
                                        </div>
                                        
                                        <ReactStars
                                            count={5}
                                            value={rate}
                                            onChange={ratingChange}
                                            size={30}
                                            color={'#ffd700'} />
                                    </Form.Group>
                                    
                                    <Button type="submit"
                                            onClick={handleSubmit}
                                            className="w-100 mt-3 mb-2"
                                            variant={`${theme.cardbuttoncolor}`}>SUBMIT
                                    </Button>
                                </Form>
                                )}
                                </Formik>   
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col xxs="0" xs="0" sm="2" md="3" lg="3" xl="4" xxl="4" xxxl="4"></Col>
            </Row>    
        </Container>

        {/* ---------    main div close  ----------- */}
          </div>
        </div>
      </div>
    </Fragment>
  )
})

export default FeedbackScreen