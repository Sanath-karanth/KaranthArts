import React, { memo, useState, useEffect, useContext } from 'react'
import '../css/demo.css';
import { ThemeContext } from '../contexts/themeContext';
import HeaderScreen,{cardgo} from '../common/headerScreen';
import FooterScreen from '../common/footerScreen';
import { slideData } from "../json/jsonData"
import { makeStyles } from '@mui/styles';
import { Container, Row, Col, Button, Card, Carousel, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import AOS from 'aos';

const DemoScreen = memo(() => {

    function animation1() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", animation1);

      function animation2() {
        var reveals = document.querySelectorAll(".revealanimation");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", animation2);

      

      function ani3() {
          
        const square = document.getElementById('squarecont');
        
        console.log(square);
        square.classList.remove('square-transition');

        setTimeout(function() {
            square.classList.add('square-transition');
        }, 2000);
      }

    //   useEffect(() => {
    //     const square = document.getElementById('squarecont');
    //     console.log(square);
    //     square.classList.remove('square-transition');
    //     setTimeout(function() {
    //         myFunction();
    //         square.classList.add('square-transition');
    //     }, 2000);
        
    //   })

      window.addEventListener("load", ani3);

      useEffect(() => {
        AOS.init({
            // Global settings:
            easing: 'ease-out-back',
            duration: 800,
            delay: 300,
            once: false,
            disable: 'mobile'
        });
        AOS.refresh();
      }, []);

  return (
    <React.Fragment>
        
         <Container fluid >
         <div data-aos="fade-down">
             <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
             </div>
            <div>
                <div className="squarebox">
                    <p style={{color:'red'}}>Square</p>
                </div>
                <div className="square-wrapper" style={{marginLeft:20}}>
                    <div id='squarecont' className="square-transition">
                        <p>box</p>
                    </div>
                </div>
            </div>
            <div>
            <Row className='gx-0'>
                <section>
                    <h1>Scroll Down to Reveal Elements &#8595;</h1>
                    </section>
                    <section>
                    <div class="container reveal">
                        <h2>Caption</h2>
                        <div class="text-container">
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section>
                    <div class="container reveal">
                        <h2>Caption</h2>
                        <div class="text-container">
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section>
                    <div class="container reveal">
                        <h2>Caption</h2>
                        <div class="text-container">
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        <div class="text-box">
                            <h3>Section Text</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            eius molestiae perferendis eos provident vitae iste.
                            </p>
                        </div>
                        </div>
                    </div>
                    </section>
            </Row>
            </div> 
        </Container>

        <div>
            <h2>
                Animation 2 
            </h2>
        </div>

        <Container>
        <section>
            <h1>Scroll Down to Reveal Elements &#8595;</h1>
            </section>
            <section>
            <div class="container revealanimation fade-bottom">
                <h2>Caption</h2>
                <div class="text-container">
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                </div>
            </div>
            </section>

            <section>
            <div class="container revealanimation fade-left">
                <h2>Caption</h2>
                <div class="text-container">
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                </div>
            </div>
            </section>

            <section>
            <div class="container revealanimation fade-right">
                <h2>Caption</h2>
                <div class="text-container">
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                <div class="text-box">
                    <h3>Section Text</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                    eius molestiae perferendis eos provident vitae iste.
                    </p>
                </div>
                </div>
            </div>
            </section>
        </Container>

    </React.Fragment>
  )
})

export default DemoScreen