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

    const handleInfiniteScroll = (e) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;
        if (bottom) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
      <div className='infinte-scroll-page' onScroll={handleInfiniteScroll}>
        <View response={response} />
        {loading && <div className="loading"> </div>}
      </div>
    );
}
