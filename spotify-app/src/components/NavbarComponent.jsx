import React from 'react'
import { button, Container, InputGroup, Row, Col, FormControl, NavbarBrand, NavbarCollapse, Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image from '../img/Spotify_Logo.png';

export default function NavbarComponent() {
    return (
        <Container fluid className='body'>
            <Row>
                <Col>
                    <div
                        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                        id="sidebar"
                    >
                        <div className="nav-container">
                            <NavbarBrand to="/">
                                <img
                                    src={image}
                                    alt="Spotify_Logo"
                                    style={{ width: "6rem", height: "40" }}
                                />
                            </NavbarBrand>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <NavbarCollapse id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <ul>
                                        <li>
                                            <Link className="nav-item nav-link" to="/" style={{ fontSize: '12px' }}
                                            ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-item nav-link" href="#" style={{ fontSize: '12px' }}
                                            ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                                                Library</Link>
                                        </li>
                                        <li>
                                            <InputGroup className="mt-3">
                                                <FormControl
                                                    id="searchField"
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                    className="form-control mb-2"
                                                />
                                                <div
                                                    className="input-group-append"
                                                    style={{ marginBottom: '4%' }}
                                                >
                                                    <Button size='sm' variant="outline-light" style={{ height: '2.2rem' }}>GO</Button>
                                                </div>
                                            </InputGroup>
                                        </li>
                                    </ul>
                                </div>
                            </NavbarCollapse>
                        </div>

                        <div className="nav-btn">
                            <button className="btn-sm signup" type="button" style={{ fontSize: '13px' }}>Sign Up</button>
                            <button className="btn-sm login" type="button" style={{ fontSize: '13px' }}>Login</button>
                            <a href="#" className='a' style={{ fontSize: '13px' }}>Cookie Policy</a> |
                            <a href="#" className='a' style={{ fontSize: '13px' }}> Privacy</a>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={9} className="offset-md-3 mainPage">
                    <Row>
                        <Col sm={9} lg={11} className="mainLinks d-none d-md-flex mt-3">
                            <a href="#">TRENDING</a>
                            <a href="#">PODCAST</a>
                            <a href="#">MOODS AND GENRES</a>
                            <a href="#">NEW RELEASES</a>
                            <a href="#">DISCOVER</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}
