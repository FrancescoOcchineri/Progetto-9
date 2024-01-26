import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../action/detail';
import { Col, Row } from 'react-bootstrap';
import { addLibrary } from '../action/library';
import CustomFooterComponent from './CustomFooterComponent';

export default function DetailAlbumComponent() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const albumDetails = useSelector(state => state.detail);
    const [selectedSong, setSelectedSong] = useState({});
    const [selectedHeart, setSelectedHeart] = useState({});

    useEffect(() => {
        const storedSelectedSong = JSON.parse(localStorage.getItem('selectedSongITA')) || {};
        const storedSelectedHeart = JSON.parse(localStorage.getItem('selectedHeartITA')) || {};

        setSelectedSong(storedSelectedSong);
        setSelectedHeart(storedSelectedHeart);

        dispatch(getDetail(id));
    }, [dispatch, id]);

    useEffect(() => {
        localStorage.setItem('selectedSongITA', JSON.stringify(selectedSong));
        localStorage.setItem('selectedHeartITA', JSON.stringify(selectedHeart));
    }, [selectedSong, selectedHeart]);

    const handleSongs = (title, cover_medium, artist, preview) => {
        setSelectedSong({ title, cover_medium, artist, preview });
    };

    const handleHeart = (title) => {
        setSelectedHeart(prevColors => ({
            ...prevColors,
            [title]: prevColors && prevColors[title] === 'red' ? 'normal' : 'red',
        }));
    };

    const handleAddToLibrary = (title, duration, artist, cover_medium) => {
        dispatch(addLibrary(title, duration, artist, cover_medium));
    };

    return (
        <>
            <Row className='d-flex' style={{ marginRight: '20rem', marginBottom: '7rem' }}>
                <Col className='mt-4' style={{ marginRight: '11rem' }}>
                    {albumDetails.detail && albumDetails.detail.artist && (
                        <div className='d-flex flex-row mt-3'>
                            <div className='d-flex flex-column' style={{ marginLeft: '35rem' }}>
                                <img src={albumDetails.detail.cover_medium} alt={albumDetails.detail.title} style={{ width: '9rem', margin: '0' }} />
                                <p className='text-center text-light mt-3 fw-bold' style={{ fontSize: '15px', lineHeight: '1.2rem' }}>
                                    {albumDetails.detail.title}<br />
                                    <span style={{ fontSize: '12px', fontWeight: 'normal' }}>{albumDetails.detail.artist.name}</span>
                                </p>
                                <div className='text-center'>
                                    <button id="btnPlay" className="btn btn-success" type="button" style={{ width: '7rem', height: '2.5rem', fontSize: '10px', textTransform: 'capitalize' }}>Play</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Col>

                <Col className='mt-5'>
                    {albumDetails.detail && albumDetails.detail.tracks && (
                        albumDetails.detail.tracks.data.map((t) => (
                            <Row className="py-3 trackHover" key={t.id} style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                <Col lg={10}>
                                    <a onClick={() => handleHeart(t.title)}>
                                        <i className={`fas fa-heart${selectedHeart[t.title] === 'red' ? ' text-danger' : ''}`}></i></a>
                                    <a onClick={() => handleSongs(t.title, albumDetails.detail.cover_medium, albumDetails.detail.artist.name, t.preview)} href="#" className="card-title trackHover px-3" style={{ color: 'white' }}>
                                        {t.title}
                                    </a>
                                </Col>
                                <Col>
                                    <small className="duration" style={{ color: 'white' }}>
                                        {Math.floor(parseInt(t.duration) / 60)}:
                                        {parseInt(t.duration) % 60 < 10
                                            ? '0' + (parseInt(t.duration) % 60)
                                            : parseInt(t.duration) % 60}
                                    </small>
                                </Col>
                                <Col>
                                    <a onClick={() => handleAddToLibrary(t.title, t.duration, albumDetails.detail.artist.name, albumDetails.detail.cover_medium)} >
                                        <i className="fa-solid fa-circle-plus text-muted"></i>
                                    </a>
                                </Col>
                            </Row>
                        ))
                    )}
                </Col>
            </Row>
            <CustomFooterComponent selectedSong={selectedSong} />
        </>
    )
}
