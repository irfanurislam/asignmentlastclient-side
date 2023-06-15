import React from 'react';
import Slider from '../Slider/Slider';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import TopInstructors from '../../TopInstructors/TopInstructors';
import Level from '../Level/Level';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopulerClasses></PopulerClasses>
            <TopInstructors></TopInstructors>
            <Level></Level>
        </div>
    );
};

export default Home;