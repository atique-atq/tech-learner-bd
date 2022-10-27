import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css'

const TermsAndConditions = () => {
    return (
        <div className='terms-page'>
            <div className='terms-container'>
                <h3>Terms and conditions are loading soon.</h3>
                <p>Go back to: <Link to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default TermsAndConditions;