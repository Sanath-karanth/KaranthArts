import React, { memo, useState, useContext, useEffect } from 'react'
import '../css/headerstyle.css';
import { ThemeContext } from '../contexts/themeContext';
import  ToggleButton  from '../common/toggleButton';
import { useNavigate  } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, faImage, faCircleUser, faPenToSquare, faStar, faCamera } from '@fortawesome/free-solid-svg-icons'


const HeaderScreen = memo(({headerData}) => {     ///////////  'sanathorthotech' for localstorage data
    const [{theme}, toggleTheme] = useContext(ThemeContext);
    const navigate  = useNavigate();
    const [reviewshow, setReviewshow] = useState(false);
    console.log('headerdata ',headerData);

    const homeClick = () => {
      navigate("/");
      let scrolltohometext = document.getElementById('back-to-top-anchor');
      scrolltohometext.scrollIntoView({behavior:'smooth'})
    }
    const aboutClick = () => {
      navigate("/about", { state: {navigationcontent: 'about'}});
    }
    const feedbackClick = () => {
      navigate("/feedback");
    }
    const reviewClick = () => {
      navigate("/review");
    }
    const galleryClick = () => {
      navigate("/gallery");
    }

    const reviewstoreCheck = async() => {
      let userstorevalue = localStorage.getItem('UserName');
      if(userstorevalue === "sanathorthotech")
      {
          setReviewshow(true);
      }
      else
      {
          setReviewshow(false);
      }
  }

  useEffect(() => {
    reviewstoreCheck();
  },[]);

  return (
    <React.Fragment>
    { headerData === undefined ? 
        <Navbar  
                expand="lg"
                sticky="top"
                className='p-2'
                bg={theme.headercolor} 
                variant={theme.headercolor}>
          <Container fluid>
          <Navbar.Brand className='artanimation'>
            <span style={{paddingRight: '5px'}}>
              <img src="./images/atom.png" className="App-logo" alt="logo" />
            </span>
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

              <Tooltip title="Sketchings">
                <Nav.Link onClick={portraitClick} className='navtext'>
                  <FontAwesomeIcon icon={faPalette} color={theme.headericoncolor} />{' '}Sketchings
                </Nav.Link>
              </Tooltip>

              <Tooltip title="Photography">
                <Nav.Link onClick={photographyClick} className='navtext'>
                  <FontAwesomeIcon icon={faCamera} color={theme.headericoncolor} />{' '}Photography
                </Nav.Link>
              </Tooltip>

              <Tooltip title="Gallery">
                <Nav.Link onClick={galleryClick} className='navtext'>
                  <FontAwesomeIcon icon={faImage} color={theme.headericoncolor} />{' '}Gallery
                </Nav.Link>
              </Tooltip>

              <Tooltip title="About">
                <Nav.Link onClick={aboutClick} className='navtext'>
                  <FontAwesomeIcon icon={faCircleUser} color={theme.headericoncolor} />{' '}About
                </Nav.Link>
              </Tooltip>
             
            </Nav>
            <Nav>
              <Tooltip title="Feedback">
                <Nav.Link onClick={feedbackClick} className='navtext' style={{paddingRight:20}}>
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
        : null 
        }

  { headerData === 'about' ? 
        <Navbar  
                expand="lg"
                sticky="top"
                className='p-2'
                bg={theme.headercolor} 
                variant={theme.headercolor}>
          <Container fluid>
          <Navbar.Brand className='artanimation'>
            <span style={{paddingRight: '5px'}}>
              <img src="./images/atom.png" className="App-logo" alt="logo" />
            </span>
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

              <Tooltip title="Gallery">
                <Nav.Link onClick={galleryClick} className='navtext'>
                  <FontAwesomeIcon icon={faImage} color={theme.headericoncolor} />{' '}Gallery
                </Nav.Link>
              </Tooltip>

              { reviewshow &&
              <Tooltip title="Reviews">
                <Nav.Link onClick={reviewClick} className='navtext' active>
                    <FontAwesomeIcon icon={faStar} color={theme.headericoncolor} />{' '}Reviews
                </Nav.Link>
              </Tooltip>
              }
            </Nav>
            <Nav>
              <Tooltip title="Feedback">
                <Nav.Link onClick={feedbackClick} className='navtext' style={{paddingRight:20}}>
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
        : null 
        }

    { headerData === 'feedback' ? 
        <Navbar  
                expand="lg"
                sticky="top"
                className='p-2'
                bg={theme.headercolor} 
                variant={theme.headercolor}>
          <Container fluid>
          <Navbar.Brand className='artanimation'>
            <span style={{paddingRight: '5px'}}>
              <img src="./images/atom.png" className="App-logo" alt="logo" />
            </span>
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

              <Tooltip title="Gallery">
                <Nav.Link onClick={galleryClick} className='navtext'>
                  <FontAwesomeIcon icon={faImage} color={theme.headericoncolor} />{' '}Gallery
                </Nav.Link>
              </Tooltip>

              <Tooltip title="About">
                <Nav.Link onClick={aboutClick} className='navtext'>
                  <FontAwesomeIcon icon={faCircleUser} color={theme.headericoncolor} />{' '}About
                </Nav.Link>
              </Tooltip>
             
            </Nav>
            <Nav>
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
        : null 
        }

      { headerData === 'imageview' ? 
        <Navbar  
                expand="lg"
                sticky="top"
                className='p-2'
                bg={theme.headercolor} 
                variant={theme.headercolor}>
          <Container fluid>
          <Navbar.Brand className='artanimation'>
            <span style={{paddingRight: '5px'}}>
              <img src="./images/atom.png" className="App-logo" alt="logo" />
            </span>
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

              <Tooltip title="About">
                <Nav.Link onClick={aboutClick} className='navtext'>
                  <FontAwesomeIcon icon={faCircleUser} color={theme.headericoncolor} />{' '}About
                </Nav.Link>
              </Tooltip>
             
            </Nav>
              <Nav>
                <Tooltip title="Feedback">
                  <Nav.Link onClick={feedbackClick} className='navtext' style={{paddingRight:20}}>
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
        : null 
        }


    </React.Fragment>
  )
})

export default HeaderScreen;

export const portraitClick = () => {
  let scrolltotext = document.getElementById('PortraitArts');
  scrolltotext.scrollIntoView({behavior:'smooth'})
}

export const photographyClick = () => {
  let scrolltotext = document.getElementById('Photography');
  scrolltotext.scrollIntoView({behavior:'smooth'})
}