import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import FooterComponent from './FooterComponent';

export default function SearchComponent() {

    const search = useSelector(state => state.search)
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const navigate = useNavigate();

    const handleClick = (albumId) => {
        setSelectedAlbum(albumId);
        navigate(`/album/${albumId}`);
    };

    return (
        <>
            <Container style={{ margin: '0 23.5rem' }}>
                <Row className='mt-5' style={{ margin: '0 5rem', marginBottom: '6rem' }}>
                    {search.search && (
                        <>
                            <h2 className='text-light' style={{ fontSize: '1.5rem' }}>Search Results</h2>
                            <Row className='d-flex flex-wrap mt-3'>
                                {search.search.map((s, index) => (
                                    <Col key={index} xs={12} sm={6} md={3} className='mb-4'>
                                        <div className='d-flex flex-column align-items-center'>
                                            <img onClick={() => handleClick(s.album.id)} id='imgHome' src={s.album.cover_medium} alt={s.title} style={{ width: '9rem', cursor: 'pointer' }} />
                                            <p className='text-center text-light mt-1 fw-bold' style={{ fontSize: '9px' }}>{s.title}<br />Artista: {s.artist.name}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </>
                    )}
                </Row>
            </Container>
            <FooterComponent />
        </>
    );
}
