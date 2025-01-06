import React, { useState } from 'react';

const jokes = [
    "How many computer programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why did c++ decide to not go out with c? Because quite frankly, c just has no class",
    "There are 10 types of people in this world: those who understand what I'm talking about and those who don't",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "What’s the object-oriented way to become wealthy? Inheritance."];


function MyJokes() {
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    const [index, setIndex] = React.useState(0);

    const handleClick = () => {
        let nextIdx = getRandomNumber(jokes.length);
        while (nextIdx === index) {
            nextIdx = getRandomNumber(jokes.length);
        }
        setIndex(nextIdx);
    };


    return (
        <div>
        <h2>I am funny</h2>
        <button type="button" onClick={handleClick}>
            Next Joke
        </button>
        {jokes[index]}
        </div>
    );
}

export default MyJokes;
