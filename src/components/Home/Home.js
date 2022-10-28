import React from 'react';
import AdventuresIdeas from '../AdventuresIdeas/AdventuresIdeas';
import Carousels from '../Carousels/Carousels';
import MemorableExperience from '../MemorableExperience/MemorableExperience';
import Offer from '../WhatWeOffer/Offers/Offers';


const Home = () => {
    return (
        <>
            {/* carousels */}
            <Carousels></Carousels>
            {/* AdventuresIdeas */}
            <AdventuresIdeas></AdventuresIdeas>
            {/* memorable experience */}
            <MemorableExperience></MemorableExperience>
            {/* what we offer */}
            <Offer></Offer>
            {/* blog */}
            {/* review */}
        </>
    );
};

export default Home;