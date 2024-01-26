import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import shuffle from '../img/Shuffle.png';
import repeat from '../img/Repeat.png'
import previous from '../img/Previous.png'
import play from '../img/Play.png'
import next from '../img/Next.png'
import ReactPlayer from 'react-player';
import pause from '../img/Pause.jpg'

export default function CustomFooterComponent({ selectedSong }) {

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    if (!selectedSong) {
        return null;
    }

    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <div className='d-flex flex-row'>
                {selectedSong && selectedSong.cover_medium && selectedSong.title && selectedSong.artist && (
                    <div style={{ marginLeft: '15rem' }}>
                        <div className='d-flex'>
                            <img src={selectedSong.cover_medium} alt='Album Cover' style={{ width: '4rem', height: '4rem', borderRadius: '10%', margin: '0.5rem 0' }} />
                            <div className='flex-column align-items-center mt-4 mx-3'>
                                <p className='text-light fw-bold' style={{ fontSize: '10px' }}>{selectedSong.title} <br /> <span className='text-secondary' style={{ fontSize: '9px', fontWeight: 'normal' }}>{selectedSong.artist}</span></p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="offset-lg-2">
                    <div className="playerControls d-flex justify-content-center align-items-center position-absolute start-50 translate-middle" style={{ top: '25px' }}>
                        <a href="#">
                            <img src={shuffle} alt="shuffle" style={{ width: '0.7rem' }} />
                        </a>
                        <a href="#" className="mx-5">
                            <img src={previous} alt="previous" style={{ width: '0.7rem' }} />
                        </a>
                        <a onClick={handlePlayPause} className="mx-5" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            {isPlaying ? <img src={pause} alt="pause" style={{ width: '0.7rem' }} /> : <img src={play} alt="play" style={{ width: '0.7rem' }} />}
                        </a>
                        <a href="#" className="mx-5">
                            <img src={next} alt="next" style={{ width: '0.7rem' }} />
                        </a>
                        <a href="#">
                            <img src={repeat} alt="repeat" style={{ width: '0.7rem' }} />
                        </a>
                    </div>
                    <ReactPlayer url={selectedSong.preview} playing={isPlaying} controls />
                    <div className="progress position-absolute start-50 translate-middle-x" style={{ bottom: '30px' }}>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
