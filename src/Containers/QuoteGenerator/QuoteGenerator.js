import React, { useState, useEffect } from 'react';
import "./QuoteGenerator.scss";

export default function QuoteGenerator() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json) => {
            setQuotes(json);
            setQuote(json[0]);
        });
    }, []);

    const getRandomQuote = (quotes) => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    const getNewQuote = () => {
        setQuote(getRandomQuote(quotes));
    }
    return (
        <div className='quote-generator'>
            <h1>Quote Generator</h1>
            <section>
                <button onClick={getNewQuote}>New Quote</button>
                <h3>
                    <span>“</span>
                    {quote?.text}
                </h3>
                <i>- {quote?.author}</i>
            </section>
        </div>
    );
}
