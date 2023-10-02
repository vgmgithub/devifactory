import React, { useState, useEffect } from 'react';

function RandomShuffleText({ text,compstyle }) {
    const [shuffledText, setShuffledText] = useState('');
    // alert(compstyle);
    let shufflestyle;
    if (compstyle === 1) {
        shufflestyle = 'title-highlight logo';
    } else if (compstyle === 2) {
        shufflestyle = 'title-highlight userlogo';
    } else if (compstyle === 3) {
        shufflestyle = 'title-highlight notfound';
    }
    
  useEffect(() => {
    // Shuffle the letters of the text randomly
    const shuffleLetters = (inputText) => {
      const textArray = inputText.split('');
      for (let i = textArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [textArray[i], textArray[j]] = [textArray[j], textArray[i]];
      }
      return textArray.join('');
    };

    // Shuffle the text and update it every 200 milliseconds
    const interval = setInterval(() => {
      setShuffledText(shuffleLetters(text));
    }, 200);

    // Clear the interval after a few seconds (adjust the time as needed)
    setTimeout(() => {
      clearInterval(interval);
      setShuffledText(text); // Set the final text
    }, 3000); // Adjust the duration of shuffling

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [text]);
    
  return <span className={`random-shuffle-text ${shufflestyle}`}>{shuffledText}</span>;
}

export default RandomShuffleText;
