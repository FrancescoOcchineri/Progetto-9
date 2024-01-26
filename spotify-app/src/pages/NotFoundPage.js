import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const notFoundSegment = currentPath.replace('/notfound/', '');

    return (
        <div className='mt-5' style={{ color: 'white', margin: '0 20rem' }}>
            Nessun risultato trovato per: <br />
            "{notFoundSegment.replace('/', '')}"
        </div>
    );
}
