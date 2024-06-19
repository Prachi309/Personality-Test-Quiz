import React from 'react';
import { personalityDescriptions } from '../data/personalityDescriptions';

function Result({ result }) {
  const { title,type, description, image } = personalityDescriptions[result];

  function refresh() {
    window.location.reload();
  }

  return (
    <div className='result-container container'>
      <h2>Your personality type is:</h2>
      <h1>{result}</h1><p className='Personality-type'>{type}</p>
      <img src={image} alt={`${result} image`} className='Personality-image' />
      <p className='Personality-title'>{title}</p>
      
      <p className='Personality-description'>{description}</p>
      <button onClick={refresh}>Take the test again</button>
      <button ><a href="https://www.truity.com/blog/page/16-personality-types-myers-briggs" target='blank'>Learn More</a></button>
    </div>
  );
}

export default Result;
