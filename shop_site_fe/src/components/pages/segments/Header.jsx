import React, { useState } from 'react';
import Listing from '../../modals/patron-modals/Listing';
import Search from '../../modals/patron-modals/Search';
import Cart from '../../modals/patron-modals/Cart';
import SavedList from '../../modals/patron-modals/SavedList';
import Profile from '../../modals/patron-modals/Profile';
import Backdrop from '../../../utils/backdrop';
import useTheme from '../../../utils/useTheme';
import menu from '../../../utils/images/header/hamburger-menu.png';
import account from '../../../utils/images/header/profile-.png';
import searchIcon from '../../../utils/images/header/search-icon.png';
import cart from '../../../utils/images/header/cart-.png';
import heart from '../../../utils/images/header/fav-heart.png';
import '../../../styles/pages/segemnts/header.scss';

// Only one slide-over panel (menu, search, cart, favorites, profile) is open at a time.
const PANELS = { none: 'none', listing: 'listing', search: 'search', cart: 'cart', favorites: 'favorites', profile: 'profile' };

const Header = ({ onSearch }) => {
    const [panel, setPanel] = useState(PANELS.none);
    const [search, setSearch] = useState('');
    const { theme, toggleTheme } = useTheme();

    const closePanel = () => setPanel(PANELS.none);
    const openPanel = (name) => setPanel((current) => (current === name ? PANELS.none : name));

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(search.trim());
        }
        closePanel();
    };

    return (
        <div className='header'>
            <div className="listingbtn" onClick={() => openPanel(PANELS.listing)}>
                <img className="menu header-link" src={menu} alt="menu" />
            </div>
            <h1 className='title'>Decorem</h1>
            <div className='optionalbtn'>
                <button
                    type="button"
                    className="theme-toggle header-link"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? (
                        <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <circle cx="12" cy="12" r="4.5" />
                            <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.4 5.6l-1.55 1.55M7.15 16.85l-1.55 1.55M18.4 18.4l-1.55-1.55M7.15 7.15 5.6 5.6" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" width="1.15rem" height="1.15rem" fill="currentColor">
                            <path d="M20.4 14.7A8.6 8.6 0 0 1 9.3 3.6a.75.75 0 0 0-.95-.95A9.9 9.9 0 1 0 21.35 15.65a.75.75 0 0 0-.95-.95Z" />
                        </svg>
                    )}
                </button>
                <div className="searchbtn" onClick={() => openPanel(PANELS.search)}>
                    <img className="search-bar header-link" src={searchIcon} alt="search-bar" />
                </div>
                <div className="cartbtn" onClick={() => openPanel(PANELS.cart)}>
                    <img className="cartpic header-link" src={cart} alt="cart" />
                </div>
                <div className="favsbtn" onClick={() => openPanel(PANELS.favorites)}>
                    <img className="favs header-link" src={heart} alt="favorites" />
                </div>
                <div className="accountbtn" onClick={() => openPanel(PANELS.profile)}>
                    <img className="account header-link" src={account} alt="account" />
                </div>
            </div>

            {panel !== PANELS.none && (
                <>
                    {panel === PANELS.listing && <Listing onClose={closePanel} />}
                    {panel === PANELS.search && (
                        <Search
                            search={search}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            showSearching={closePanel}
                        />
                    )}
                    {panel === PANELS.cart && <Cart onClose={closePanel} />}
                    {panel === PANELS.favorites && <SavedList onClose={closePanel} />}
                    {panel === PANELS.profile && <Profile onClose={closePanel} />}
                    <Backdrop show={panel !== PANELS.none} set={closePanel} />
                </>
            )}
        </div>
    );
};

export default Header;
