import React from "react";
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import Group from '../../../utils/images/home/group_setting.jpg';
import House from '../../../utils/images/home/house.png';
import Plant from '../../../utils/images/home/plant.png';
import Shirt from '../../../utils/images/home/shirt.png';
import Pants from '../../../utils/images/home/joggers.png';
import Picture from '../../../utils/images/home/picture.png';
import Model1 from '../../../utils/images/home/models/mode_1.jpg';
import '../../../styles/pages/patron-pages/home.scss';

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <div className='hero'>
                    <div className='promo'>
                    <p className='eyebrow'>The new home edit</p>
                    <h1>Refresh your space with pieces that feel like home.</h1>
                    <p>Thoughtful decor, room-ready accents, and everyday essentials for beautiful living.</p>
                    </div>
                    <div className='hero-image'>
                        <img src={Group} alt='Decor collection set' />
                    </div>
                </div>

                <p className='section-label'>Shop by feeling</p>
                <div className='icon-menu'>
                    <div className='category'><img className='icon' src={Plant} alt='plants icon' /><span>Greenery</span></div>
                    <div className='category'><img className='icon' src={Picture} alt='painting icon' /><span>Wall art</span></div>
                    <div className='category'><img className='icon' src={House} alt='house icon' /><span>Furniture</span></div>
                    <div className='category'><img className='icon' src={Shirt} alt='shirt icon' /><span>Textiles</span></div>
                    <div className='category'><img className='icon' src={Pants} alt='Pants icon' /><span>Everyday</span></div>
                </div>

                <div className='promo secondary'>
                    <h2>Curated for cozy corners and standout moments.</h2>
                    <p>Explore handpicked furniture, wall art, textiles, and features designed to bring warmth and personality into every room.</p>
                </div>

                <div className='model'>
                    <img src={Model1} alt='model showcasing decor styling' />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;