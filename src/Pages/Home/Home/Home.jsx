import React from 'react';
import HomePageBanner from '../Banner/HomePageBanner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import ReviewSection from '../UserReview/UserRevew';
import useTitle from '../../../Hooks/useTitle';
import Reviews from '../../Review/Review';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HomePageBanner></HomePageBanner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Reviews></Reviews>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;