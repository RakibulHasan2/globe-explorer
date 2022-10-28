import React, { useEffect,useState } from 'react';
import Idea from '../Idea/Idea';
import './AdventuresIdeas.css'
const AdventuresIdeas = () => {

   const [ideas, setIdeas]= useState([]);

    useEffect(() => {
         fetch('https://globe-server.vercel.app/ideas')
        .then(res =>res.json())
        .then(data => setIdeas(data))
    } ,[])

    // console.log(ideas); 
    return (
        <div >
            <h1 className='text-center mt-3 mb-5'>Adventures Idea!</h1>
            <div className='d-flex container justify-content-evenly responsive-adventure'>
            {
                ideas.map(idea => <Idea
                  key={idea.id}
                   idea = {idea}
                   ></Idea>)
             }
            </div>
        </div>
    );
};

export default AdventuresIdeas;