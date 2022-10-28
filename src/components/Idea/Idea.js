import React from 'react';
import './Idea.css'
import { MdMoreHoriz } from 'react-icons/md';
const Idea = ({idea}) => {
    const {name,details, img} = idea
    // console.log(idea.img)
    return (
        <div>
            <img className='idea-img' src={img} alt="" />
            <div>
              <h3 className='text-center mt-3 mb-2'>{name}</h3>
              <p className='idea-details'>{details}</p>
              <button className='btn btn-success see-more'>Read More
              <MdMoreHoriz className='ms-1'></MdMoreHoriz>
              </button>
            </div>  
        </div>
    );
};

export default Idea;