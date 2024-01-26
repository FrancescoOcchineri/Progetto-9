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
            <div className="offset-lg-2">
                <div className="playerControls d-flex justify-content-center align-items-center position-absolute start-50 translate-middle" style={{ top: '25px' }}>
                    <a href="#">
                        <img src={shuffle} alt="shuffle" style={{ width: '0.7rem' }} />
                    </a>
                    <a href="#" className="mx-5">
                        <img src={previous} alt="previous" style={{ width: '0.7rem' }} />
                    </a>
                    <a className="mx-5" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <img src={play} alt="pause" style={{ width: '0.7rem' }} />
                    </a>
                    <a href="#" className="mx-5">
                        <img src={next} alt="next" style={{ width: '0.7rem' }} />
                    </a>
                    <a href="#">
                        <img src={repeat} alt="repeat" style={{ width: '0.7rem' }} />
                    </a>
                </div>
                <div className="progress position-absolute start-50 translate-middle-x" style={{ bottom: '30px' }}>
                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </Container >
    );
}

