import React from 'react';
import img from '../images/about-img.jpg'
import './MemorableExperience.css'
const MemorableExperience = () => {
    return (
    <div class="d-flex justify-content-center align-items-center experience-body">
                   <img src={img} alt="" />
       <div class="content">
          <h3 className='text-success fw-bold'>Memorable Outdoor Experiences</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt  quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
         <button className='btn btn-lg btn-outline-dark hover-btn'>Read More</button>
        </div>
     </div>
    );
};

export default MemorableExperience;