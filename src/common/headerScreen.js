import React, { memo, useContext, useEffect } from 'react'
import '../css/headerstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import { Container, Navbar, Nav } from 'react-bootstrap';
import  ToggleButton  from '../common/toggleButton';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, faImage, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import anime from "animejs";

const HeaderScreen = memo((props) => {
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

      /////////////////////  Heading Animation
  
      const artgalleryanimation = () => {
          
        anime.timeline({loop: false})
        .add({
          targets: '.artanimation .word',
          scale: [12,1],
          opacity: [0,1],
          easing: "easeOutCirc",
          duration: 1500,
          delay: (el, i) => 1000 * i
        }).add({
          targets: '.artanimation',
          // opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  
  
  useEffect(() => {
    artgalleryanimation();
    }, []);

  return (
    <React.Fragment>
        <Navbar collapseOnSelect 
                expand="lg"
                sticky="top"
                className='p-3'
                bg={theme.headercolor} variant={theme.headercolor}>
          <Container fluid>
          <Navbar.Brand className='artanimation'  href="#home">
            <span className='word'>ART</span>{' '} 
            <span className='word'>GALLERY</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Tooltip title="Home">
                <Nav.Link href="#features" className='navtext' active>
                    <FontAwesomeIcon icon={faHome} color={theme.headericoncolor} />{' '}Home
                </Nav.Link>
              </Tooltip>

              <Tooltip title="Portrait Sketchings">
                <Nav.Link href="#features" className='navtext'>
                  <FontAwesomeIcon icon={faPalette} color={theme.headericoncolor} />{' '}Portrait Sketchings
                </Nav.Link>
              </Tooltip>

              <Tooltip title="Photography">
                <Nav.Link href="#features" className='navtext'>
                  <FontAwesomeIcon icon={faImage} color={theme.headericoncolor} />{' '}Photography
                </Nav.Link>
              </Tooltip>

              <Tooltip title="About">
                <Nav.Link href="#features" className='navtext'>
                  <FontAwesomeIcon icon={faCircleUser} color={theme.headericoncolor} />{' '}About
                </Nav.Link>
              </Tooltip>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{paddingRight:20}}>Feedback</Nav.Link>
              
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