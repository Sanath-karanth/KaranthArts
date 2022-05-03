import React, { memo, useState, useEffect, useContext, Fragment } from 'react'
import '../css/imageviewScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate  } from "react-router-dom";
import ReactStars from 'react-stars'
import { Formik } from 'formik';
import moment from 'moment';
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
         faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'

const ImagegridScreen = memo(() => {

    const [headertextShow,setHeadertextShow] = useState('imageview');
    const navigate  = useNavigate();
    const { createdata } = useAuth();
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
      <div className='MainContainer-imageview'>
        <div className='SubContainer-imageview'>
          <div className='HeadContainer-imageview'>
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
                            backgroundColor:theme.backgroundColor, 
                            color: theme.color,
                            overflow: 'hidden'
                            }}>
                  <h1>Image </h1>
                  <div class="imagerow"> 
                    <div class="imagecolumn">
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="http://via.placeholder.com/640x360" style={{width:'100%'}} />
                    </div>
                    <div class="imagecolumn">
                      <img src="http://via.placeholder.com/640x360" style={{width:'100%'}} />
                      <img src="http://via.placeholder.com/640x360" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                    </div>  
                    <div class="imagecolumn">
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                    </div>
                    <div class="imagecolumn">
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                      <img src="https://picsum.photos/id/237/200/300" style={{width:'100%'}} />
                    </div>
                  </div>
              </Container>

              {/* ---------    main div closes  ----------- */}

          </div>
        </div>
      </div>
    </Fragment>
  )
})

export default ImagegridScreen