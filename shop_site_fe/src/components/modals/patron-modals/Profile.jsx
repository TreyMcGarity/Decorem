import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_FAILURE } from '../../../redux/actions/type';
import '../../../styles/modals/patron-modals/profile.scss';

const Profile = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn, cred_data } = useSelector((state) => state.auth);
    const displayName = cred_data?.username || cred_data?.email || 'Guest';

    const handleSignOut = () => {
        // No dedicated logout endpoint/action exists yet; clear local auth state and redirect.
        dispatch({ type: LOGIN_FAILURE, payload: '' });
        onClose?.();
        navigate('/login');
    };

    return (
        <div className='profile'>
            <button type="button" className="panel-close" onClick={onClose} aria-label="Close profile">&times;</button>
            <h2>{loggedIn ? displayName : 'Welcome'}</h2>
            {loggedIn ? (
                <>
                    <Link to='/home' className='options' onClick={onClose}>Account settings</Link>
                    <Link to='/home' className='options' onClick={onClose}>Order history</Link>
                    <button type="button" className='options sign-out' onClick={handleSignOut}>Sign out</button>
                </>
            ) : (
                <>
                    <Link to='/login' className='options' onClick={onClose}>Log in</Link>
                    <Link to='/register' className='options' onClick={onClose}>Create account</Link>
                </>
            )}
        </div>
    )
}

export default Profile;