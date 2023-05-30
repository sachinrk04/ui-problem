import React, { useEffect, useState } from 'react';
import "./InfinteScroll.scss";
import View from './View';

export default function InfinteScroll() {
    const [response, setResponse] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
  
    const getData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?` +
            new URLSearchParams({
                _limit: 9,
                _page: page,
            })
        );
        const data = await res.json();
        setResponse((oldData) => [...oldData, ...data]);
        setLoading(false);
    };
  
    useEffect(() => {
        getData();
    }, [page]);

    const handleInfiniteScroll = () => {
        if ( window.innerHeight + document.documentElement.scrollTop  >= document.documentElement.scrollHeight ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', () => handleInfiniteScroll("scroll"), true);
        return () => window.removeEventListener('scroll', () => handleInfiniteScroll("scroll-remove"));
    }, []);
  
    return (
      <div className='infinte-scroll-page'>
        <View response={response} />
        {loading && <div className="loading"> </div>}
      </div>
    );
}
