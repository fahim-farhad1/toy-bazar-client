import React from 'react';
import HomePageBanner from '../Banner/HomePageBanner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <HomePageBanner></HomePageBanner>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;