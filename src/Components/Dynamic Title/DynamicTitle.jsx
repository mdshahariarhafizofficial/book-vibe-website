import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

const DynamicTitle = () => {
    const location = useLocation();
    return (
        <div>
            <Helmet>
                <title>Book Vibe | {location.pathname.slice(1,-1)}</title>
            </Helmet>
        </div>
    );
};

export default DynamicTitle;