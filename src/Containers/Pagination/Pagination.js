import React, { useEffect, useState } from 'react';
import "./Pagination.scss";

export default function Pagination() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    

    useEffect(() => {
        const fetchProducts = async() => {
            const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
            const data = await res.json()
    
            if (data && data.products) {
                setProducts(data.products)
                setTotalPages(data.total)
            }
        };
        fetchProducts();
    }, [page]);

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages / 10 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }

    return ( 
        <div className = 'pagination-page' > 
            {
                products.length > 0 && ( 
                    <div className = "products" > {
                        products.map((product) => {
                            return ( <span className = 'products__single' key = { product.id } >
                                <img src = { product.thumbnail }alt = { product.title }/> 
                                <span > { product.title } </span> 
                                </span>
                            )
                        })
                    } 
                    </div>
                )
            } 
            {
                products.length > 0 && ( 
                    <div className = "pagination" >
                    <span onClick = {
                        () => selectPageHandler(page - 1)
                    }
                    className = { page > 1 ? "" : "pagination__disable" } > ◀ </span>

                    {
                        [...Array(totalPages / 10)].map((_, i) => {
                            return <span key = { i }
                            className = { page === i + 1 ? "pagination__selected" : "" }
                            onClick = {
                                () => selectPageHandler(i + 1)
                            } > { i + 1 } </span>
                        })
                    }

                    <span onClick = {
                        () => selectPageHandler(page + 1)
                    }
                    className = { page < totalPages / 10 ? "" : "pagination__disable" } > ▶ </span>
                    </div>
                )
            } 
        </div>
    )
}