import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomFooterComponent from '../components/CustomFooterComponent';
import { Col, Row } from 'react-bootstrap';
import playlist from '../img/Playlist.PNG';

export default function YourLibrary() {
    const myLibrary = useSelector(state => state.library);
    const songs = myLibrary && myLibrary.library ? Object.values(myLibrary.library) : [];
    const [selectedSong, setSelectedSong] = useState({})
    const [selectedHeart, setSelectedHeart] = useState({})

    const handleSongs = (title, cover_medium, artist) => {
        setSelectedSong({ title, cover_medium, artist });
    }

    const handleHeart = (title) => {
        setSelectedHeart(prevColors => ({
            ...prevColors,
            [title]: prevColors && prevColors[title] === 'red' ? 'normal' : 'red',
        }));
    }


    return (
        <>
            {songs.length > 0 ? (
                <Row className='d-flex' style={{ marginRight: '20rem', marginBottom: '7rem' }}>
                    <Col className='mt-4' style={{ marginRight: '11rem' }}>
                        <div className='d-flex flex-row mt-3'>
                            <div className='d-flex flex-column' style={{ marginLeft: '35rem' }}>
                                <img src={playlist} style={{ width: '9rem', margin: '0' }} />
                                <p className='text-center text-light mt-3 fw-bold' style={{ fontSize: '15px', lineHeight: '1.2rem' }}>
                                    My Playlist <i className="fa-solid fa-music"></i>
                                </p>
                                <div className='text-center'>
                                    <button id="btnPlay" className="btn btn-success" type="button" style={{ width: '7rem', height: '2.5rem', fontSize: '10px', textTransform: 'capitalize' }}>Play</button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className='mt-5'>
                        {songs.map((song, index) => (
                            <Col key={index}>
                                <Row className="py-3 trackHover" style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                    <Col key={`song-${index}-col`} lg={10}>
                                        <a onClick={() => handleHeart(song.title)}>
                                            <i className={`fas fa-heart${selectedHeart[song.title] === 'red' ? ' text-danger' : ''}`}></i>
                                        </a>
                                        <a onClick={() => handleSongs(song.title, song.cover_medium, song.artist.name)} href="#" className="card-title trackHover px-3" style={{ color: 'white' }}>
                                            {song.title}
                                        </a>
                                    </Col>
                                    <Col key={`song-${index}-duration`}>
                                        <small className="duration" style={{ color: 'white' }}>
                                            {Math.floor(parseInt(song.duration) / 60)}:
                                            {parseInt(song.duration) % 60 < 10
                                                ? '0' + (parseInt(song.duration) % 60)
                                                : parseInt(song.duration) % 60}
                                        </small>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Col>
                </Row>
            ) : (
                <p className='text-light mt-5' style={{ marginLeft: '20rem' }}>Add songs to the playlist please! <i className="fa-solid fa-heart-crack text-danger"></i></p>
            )}
            <CustomFooterComponent selectedSong={selectedSong} />
        </>
    );
}

