import React, { memo, useContext, useEffect } from 'react'
import '../css/headerstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { Container, Navbar, Nav } from 'react-bootstrap';
import  ToggleButton  from '../common/toggleButton';
import {headerTextAnimation} from '../common/textAnimations';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, faImage, faCircleUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate  } from "react-router-dom";

const HeaderScreen = memo((props) => {
    const [{theme}, toggleTheme] = useContext(ThemeContext);
    const navigate  = useNavigate();

    const homeClick = () => {
      console.log("home clicked")
      navigate("/demo");
    }

  useEffect(() => {
    headerTextAnimation();
    }, []);

  return (
    <React.Fragment>
        <Navbar  
                expand="lg"
                sticky="top"
                className='p-3'
                bg={theme.headercolor} 
                variant={theme.headercolor}>
          <Container fluid>
          <Navbar.Brand className='artanimation'>
            <span className='word' style={{color:theme.headerheadtextcolor}}>ART</span>{' '} 
            <span className='word' style={{color:theme.headerheadtextcolor}}>GALLERY</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Tooltip title="Home">
                <Nav.Link onClick={homeClick} className='navtext' active>
                    <FontAwesomeIcon icon={faHome} color={theme.headericoncolor} />{' '}Home
                </Nav.Link>
              </Tooltip>

              <Tooltip title="Portrait Sketchings">
                <Nav.Link onClick={portraitClick} className='navtext'>
                  <FontAwesomeIcon icon={faPalette} color={theme.headericoncolor} />{' '}Portrait Sketchings
                </Nav.Link>
              </Tooltip>

              <Tooltip title="Photography">
                <Nav.Link href="#features" className='navtext'>
                  <FontAwesomeIcon icon={faImage} color={theme.headericoncolor} />{' '}Photography
                </Nav.Link>
              </Tooltip>

              <Tooltip title="About">
                <Nav.Link onClick={portraitClick} href="#features" className='navtext'>
                  <FontAwesomeIcon icon={faCircleUser} color={theme.headericoncolor} />{' '}About
                </Nav.Link>
              </Tooltip>
             
            </Nav>
            <Nav>
              <Tooltip title="Feedback">
                <Nav.Link href="#features" className='navtext' style={{paddingRight:20}}>
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" color={theme.headericoncolor} />{' '}Feedback
                </Nav.Link>
              </Tooltip>
              <IconButton
                  style={{justifyContent:'flex-start'}}
                  edge='start'
                  color="inherit">
                <ToggleButton
                          className="mr-2" 
                          onChange={toggleTheme}>
                </ToggleButton>
              </IconButton>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </React.Fragment>
  )
})

export default HeaderScreen;

export const portraitClick = () => {
  let scrolltotext = document.getElementById('PortraitArts');
  scrolltotext.scrollIntoView({behavior:'smooth'})
}