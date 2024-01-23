import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getHip, getPop, getRock } from '../action/songs';
import { useNavigate } from 'react-router-dom';


export default function SongsComponent() {

    const dispatch = useDispatch();
    const songsHome = useSelector(state => state.songs);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getRock());
        dispatch(getPop());
        dispatch(getHip());
    }, [dispatch]);

    const handleClick = (albumId) => {
        setSelectedAlbum(albumId);
        navigate(`/album/${albumId}`);
    };

    return (
        <>
            <Container>
                <Row className='mt-3' style={{ margin: '0 15rem' }}>
                    <Col>
                        <h2 className='text-light' style={{ fontSize: '1.5rem' }}>Rock Classics</h2>
                        <div className='d-flex flex-row mt-3'>
                            {songsHome.rock.slice(7, 11).map((song, index) => (
                                <div className='d-flex flex-column' key={index}>
                                    <img id='imgHome' onClick={() => handleClick(song.album.id)} src={song.album.cover_medium} alt={song.title} style={{ width: '9rem', margin: '0 4rem', cursor: 'pointer' }} />
                                    <p className='text-center text-light mt-1 fw-bold' style={{ fontSize: '9px' }}>{song.title}<br />Artist: {song.artist.name}</p>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col>
                        <h2 className='mt-4 text-light' style={{ fontSize: '1.5rem' }}>Pop Culture</h2>
                        <div className='d-flex flex-row mt-3'>
                            {songsHome.pop.slice(0, 4).map((song, index) => (
                                <div key={index}>
                                    <img id='imgHome' onClick={() => handleClick(song.album.id)} src={song.album.cover_medium} alt={song.title} style={{ width: '9rem', margin: '0 4rem', cursor: 'pointer' }} />
                                    <p className='text-center text-light mt-1 fw-bold' style={{ fontSize: '9px' }}>{song.title}<br />Artist: {song.artist.name}</p>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col>
                        <h2 className='mt-4 text-light' style={{ fontSize: '1.5rem' }}>#HipHop</h2>
                        <div className='d-flex flex-row mt-3'>
                            {songsHome.hip.slice(7, 11).map((song, index) => (
                                <div key={index}>
                                    <img id='imgHome' onClick={() => handleClick(song.album.id)} src={song.album.cover_medium} alt={song.title} style={{ width: '9rem', margin: '0 4rem', cursor: 'pointer' }} />
                                    <p className='text-center text-light mt-1 fw-bold' style={{ fontSize: '9px' }}>{song.title}<br />Artist: {song.artist.name}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
