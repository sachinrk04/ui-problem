import React from 'react';
import "./TextToSpeech.scss";
import TextSpeech from '../../Components/TextToSpeech/TextSpeech';

export default function TextToSpeech() {
    const text = `
        Text-to-speech feature is now available on fairly any website, blog or newsletter like Substack. 
        It's a game changer that you can listen to the content instead of reading it. Especially effective 
        for people with visual or cognitive impairments or people who are on the go. I came up with the 
        idea to implement it for my blog, so this is how I started doing a research on this topic which 
        ended up being a tutorial for you. So in this tutorial, we will go through the process of building 
        a text-to-speech component in React. We will use the Web Speech API to implement the text-to-speech 
        functionality.
    `
    return (
        <div className='text-to-speech-page'>
            <h1>Text To Speech</h1>
            <TextSpeech text={text} />
            <p>{text}</p>
        </div>
    )
}
