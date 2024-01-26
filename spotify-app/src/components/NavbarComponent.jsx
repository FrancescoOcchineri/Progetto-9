import React, { useState } from 'react'
import { Container, InputGroup, Row, Col, NavbarCollapse, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import image from '../img/Spotify_Logo.png';
import { getSearch } from '../action/search';
import { useDispatch } from 'react-redux';

export default function NavbarComponent() {

    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            await dispatch(getSearch(searchQuery));
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        } catch (error) {
            console.error('Error in handleSearch:', error);
            navigate('/search/');
        }
    };


    return (
        <Container fluid className='body'>
            <Row>
                <Col>
                    <div
                        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                        id="sidebar"
                    >
                        <div className='mt-2'>
                            <Link to="/">
                                <img
                                    src={image}
                                    alt="Spotify_Logo"
                                    style={{ width: "6rem", height: "40", marginLeft: '1rem' }}
                                />
                            </Link>
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
                                <div className="navbar-nav mt-3" style={{ margin: '0 -1.2rem' }} >
                                    <ul>
                                        <li>
                                            <Link className="nav-item nav-link" to="/" style={{ fontSize: '11px' }}
                                            ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-item nav-link" to="/yourlibrary" style={{ fontSize: '11px' }}
                                            ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                                                Library</Link>
                                        </li>
                                        <li>
                                            <InputGroup className="mt-3">
                                                <Form.Control
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                    className="mb-2 input"
                                                    style={{ width: '7rem', height: '1px', fontSize: '11px' }}
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                />
                                                <div>
                                                    <Button
                                                        className='buttonGo'
                                                        size='sm'
                                                        variant="outline-secondary"
                                                        style={{ height: '2.2rem' }}
                                                        onClick={handleSearch}>
                                                        GO
                                                    </Button>
                                                </div>
                                            </InputGroup>
                                        </li>
                                    </ul>
                                </div>
                            </NavbarCollapse>
                        </div>

                        <div className="nav-btn">
                            <Button className="btn-sm signup-btn" type="button" style={{ fontSize: '13px', textTransform: 'capitalize' }}>Sign Up</Button>
                            <Button className="btn-sm login-btn" type="button" style={{ fontSize: '13px', textTransform: 'capitalize' }}>Login</Button>
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
