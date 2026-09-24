import React from 'react';
import { Link } from "react-router-dom";
import '../../../styles/modals/patron-modals/listing.scss';

const Listing = ({ onClose }) => {
    return (
        <div className='listing'>
            <button type="button" className="panel-close" onClick={onClose} aria-label="Close menu">&times;</button>
            <Link to='/home' className='options' onClick={onClose}>Home</Link>
            <Link to='/browsing' className='options' onClick={onClose}>Browse</Link>
            <Link to='/browsing' className='options' onClick={onClose}>New</Link>
            <Link to='/browsing' className='options' onClick={onClose}>Popular</Link>
            <Link to='/browsing' className='options' onClick={onClose}>Wall Art</Link>
            <Link to='/browsing' className='options' onClick={onClose}>Collections</Link>
        </div>
    )
}

export default Listing;