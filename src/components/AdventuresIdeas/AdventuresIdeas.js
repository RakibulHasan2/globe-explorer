import React, { useEffect,useState } from 'react';
import './AdventuresIdeas.css'
const AdventuresIdeas = () => {

   const [ideas, setIdeas]= useState();

    useEffect(() => {
         fetch('catagory.json')
        .then(res =>res.json())
        .then(data => setIdeas(data))
    } ,[])

    console.log(ideas); 
        
    return (
        <div>
         {/* <h1>ideas {ideas.length}</h1> */}
        </div>
    );
};

export default AdventuresIdeas;