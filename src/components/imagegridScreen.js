import React, { memo, useState, useEffect, useContext, Fragment } from 'react'
import '../css/imageviewScreenstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate  } from "react-router-dom";
import ReactStars from 'react-stars'
import { Formik } from 'formik';
import moment from 'moment';
import { imagecol1Data, imagecol2Data, imagecol3Data, imagecol4Data} from "../json/jsonData"
import CssBaseline from '@mui/material/CssBaseline';
import Tooltip from '@mui/material/Tooltip';
import HeaderScreen,{portraitClick, photographyClick} from '../common/headerScreen';
import { Container, Row, Col, Button, Card, Alert, Modal } from 'react-bootstrap';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, 
         faImage, faCircleUser, 
         faPenToSquare, faSun, 
         faMoon, faEnvelope,
         faPhone, faDownload } from '@fortawesome/free-solid-svg-icons'

const ImagegridScreen = memo(() => {

    const [headertextShow,setHeadertextShow] = useState('imageview');
    const navigate  = useNavigate();
    const { createdata } = useAuth();
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    const [imagemodalShow, setImagemodalShow] = useState(false);
    const [modalData,setModalData] = useState({imageTitle: '', imageURL: ''});

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

      const ImageClick = (imgTitleval,imgUrlval) => {
        setImagemodalShow(true);
        setModalData({...modalData,
                      imageTitle:imgTitleval,
                      imageURL:imgUrlval
                    });
    }

      function ImageModal(props) {
        return (
          <Modal scrollable
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  <div className='modalheader'>
                    <h5>{props.dynData.imageTitle}</h5>
                  </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='image-content'>
                  <img src={props.dynData.imageURL} alt="Modalimages" style={{width:'100%'}} />
                </div>
            </Modal.Body>
            <Modal.Footer>
              <div className='download-content'>
                <Tooltip title="Download" placement="left">
                  <a href={props.dynData.imageURL} download>
                    <FontAwesomeIcon icon={faDownload} size="lg" />
                  </a>
                </Tooltip>
              </div>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
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
                         className='mb-4' 
                         style={{
                            backgroundColor:theme.backgroundColor, 
                            color: theme.color,
                            overflow: 'hidden'
                            }}>
                  <ImageModal
                      show={imagemodalShow}
                      onHide={() => setImagemodalShow(false)}
                      dynData={modalData}
                  />
                  <div className='gallery-header'>
                    <h1>Gallery</h1>
                  </div>
                  
                  <div class="imagerow"> 
                    <div class="imagecolumn">
                      { imagecol1Data.map((item,key) => {
                        return(
                          <Fragment key={key}>
                            <div onClick={() => ImageClick(item.imgTitle,item.imgURL)}>
                              <img src={item.imgURL} style={{width:'100%'}} />
                            </div>
                          </Fragment>
                        )
                      })}
                    </div>

                    <div class="imagecolumn">
                      { imagecol2Data.map((item,key) => {
                        return(
                          <Fragment key={key}>
                            <div onClick={() => ImageClick(item.imgTitle,item.imgURL)}>
                              <img src={item.imgURL} style={{width:'100%'}} />
                            </div>
                          </Fragment>
                        )
                      })}
                    </div>  

                    <div class="imagecolumn">
                      { imagecol3Data.map((item,key) => {
                        return(
                          <Fragment key={key}>
                            <div onClick={() => ImageClick(item.imgTitle,item.imgURL)}>
                              <img src={item.imgURL} style={{width:'100%'}} />
                            </div>
                          </Fragment>
                        )
                      })}
                    </div>

                    <div class="imagecolumn">
                      { imagecol4Data.map((item,key) => {
                        return(
                          <Fragment key={key}>
                            <div onClick={() => ImageClick(item.imgTitle,item.imgURL)}>
                              <img src={item.imgURL} style={{width:'100%'}} />
                            </div>
                          </Fragment>
                        )
                      })}
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