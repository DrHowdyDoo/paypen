import React from 'react';
import './Home.css';
import logo from './Assests/logo.png';
import Button from '@mui/material/Button';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import video from './Assests/3d-illustration.mp4';
import ellipse from './Assests/ellipse.svg';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home-body'>
            <div className="header">
                <Navbar>
                    <Container>
                        <NavbarBrand>
                            <div className="logo-wrapper">
                                <img src={logo} alt="logo" width="32px" height="32px" />
                                <h3>PayPen</h3>
                            </div>
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </div>

            <div className="home-container">
                <div className="title-wrapper">
                    <h1 className="h-title">
                        Welcome to <span className="p">Pay</span>Pen
                    </h1>
                    <h4 className='h-subtitle'>Pension Management System</h4>

                    <Button onClick={() => { navigate("/login") }} size="large" variant="contained" style={{ borderRadius: 50, backgroundColor: "#1f28eb", textTransform: 'none', fontWeight: "600" }}>Get Started</Button>

                </div>
                <div className="video-wrapper">
                    <video src={video} autoPlay="true" muted loop width="100%" height="auto" />
                </div>

            </div>


            <div className="footer">
                <img src={ellipse} alt="ellipse" width="100%" height="100%" />
            </div>

        </div>
    );
}

export default Home;