import React from 'react';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import SliderBanner from '../../components/SliderBanner/SliderBanner';
import AboutFeatured from './AboutFeatured/AboutFeatured';
import BabyCareCategory from './BabyCareCategory/BabyCareCategory';
import MommyCorner from './MommyCorner/MommyCorner';
import NewArrivalProductTab from './NewArrivalProductTab/NewArrivalProductTab';
import ServiceHome from './ServiceHome/ServiceHome';


const Home = () => {
    return (
        <>
            <SliderBanner />
            <AboutFeatured />
            <NewArrivalProductTab />
            <ServiceHome />
            <BabyCareCategory />
            <OfferBanner />
            <MommyCorner />

        </>
    );
};

export default Home;