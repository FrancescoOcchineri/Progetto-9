import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import shuffle from '../img/Shuffle.png';
import repeat from '../img/Repeat.png'
import previous from '../img/Previous.png'
import play from '../img/Play.png'
import next from '../img/Next.png'

export default function FooterComponent() {
    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row>
                <Col lg={10} className="offset-lg-2">
                    <Row >
                        <Col className='d-flex justify-content-center playerControls mt-1'>
                            <a href="#">
                                <img src={shuffle} alt="shuffle" style={{ width: '0.7rem' }} />
                            </a>
                            <a href="#" className='mx-5'>
                                <img src={previous} alt="previous" style={{ width: '0.7rem' }} />
                            </a>
                            <a href="#">
                                <img src={play} alt="play" style={{ width: '0.7rem' }} />
                            </a>
                            <a href="#" className='mx-5'>
                                <img src={next} alt="next" style={{ width: '0.7rem' }} />
                            </a>
                            <a href="#">
                                <img src={repeat} alt="repeat" style={{ width: '0.7rem' }} />
                            </a>
                        </Col>
                    </Row>
                    <div className="row justify-content-center playBar py-3">
                        <div className="col-8 col-md-6">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
