import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/modals/patron-modals/saved.scss';

// Tied into profile and listings based on selected for products that will be put into saved list.
const SavedList = ({ onClose }) => {
    return (
        <div className='saved'>
            <button type="button" className="panel-close" onClick={onClose} aria-label="Close favorites">&times;</button>
            <h2>Saved items</h2>
            <p className='panel-empty'>You haven't saved anything yet.</p>
            <Link to='/browsing' className='options' onClick={onClose}>Find something you'll love</Link>
        </div>
    )
}

export default SavedList;