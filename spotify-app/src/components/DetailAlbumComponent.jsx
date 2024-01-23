import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../action/detail';
import { Col, Row } from 'react-bootstrap';

export default function DetailAlbumComponent() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const albumDetails = useSelector(state => state.detail);
    console.log(albumDetails)

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    return (
        <>
            <div className='d-flex'>
                <Row className='mt-4' style={{ margin: '0 30rem' }}>
                    <Col>
                        <div className='d-flex flex-row mt-3'>
                            <div className='d-flex flex-column'>
                                <img src={albumDetails.detail.cover_medium} alt={albumDetails.detail.title} style={{ width: '9rem', margin: '0 4rem' }} />
                                <p className='text-center text-light mt-1 fw-bold' style={{ fontSize: '15px' }}>{albumDetails.detail.artist.name}<br />{albumDetails.detail.title}</p>
                                <div className='text-center'>
                                    <button id="btnPlay" className="btn btn-success" type="button" style={{ width: '7rem', height: '2.5rem', fontSize: '10px' }}>Play</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
