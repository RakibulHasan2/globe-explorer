import React from 'react';
import AdventuresIdeas from '../AdventuresIdeas/AdventuresIdeas';
import Carousels from '../Carousels/Carousels';
import MemorableExperience from '../MemorableExperience/MemorableExperience';


const Home = () => {
    return (
        <>
            {/* carousels */}
            <Carousels></Carousels>
            {/* AdventuresIdeas */}
            <AdventuresIdeas></AdventuresIdeas>
            {/* memorable experience */}
            <MemorableExperience></MemorableExperience>
            {/* about */}
            {/* blog */}
            {/* review */}
        </>
    );
};

export default Home;