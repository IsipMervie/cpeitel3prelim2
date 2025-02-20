import { useState } from 'react';
import { skills } from './data.tsx';
import './App.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    
    setIndex((index + 1) % skills.length);
  }

  function handleBackClick() {
    
    setIndex((index - 1 + skills.length) % skills.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = skills[index];
  return (
    <section className='main-container'>
      <h1>10 Things that Require Zero Talent</h1>
      <p>by Mervie Isip</p>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <h3>{sculpture.skill}</h3>
      <p className='description'>{sculpture.description}</p>

      <div className="buttons-container">
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </section>
  );
}