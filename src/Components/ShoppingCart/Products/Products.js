import React from "react";
import "./Products.scss";

const Products = ({ state, dispatch }) => {
    const { products, cart } = state;
    return (
        <div className="products-style">
        {products.map((prod) => (
            <div key={prod.id} className="product">
            <img
                src={prod.thumbnail}
                alt={prod.title}
                className="product-image"
            />
            <div className="product-title-price">
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
            </div>
            {cart.some((p) => p.id === prod.id) ? (
                <button
                    className="product-remove-btn"
                    onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                    })}
                >
                Remove from Cart
                </button>
            ) : (
                <button
                    className="product-add-btn"
                    onClick={() => dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                            id: prod.id,
                            title: prod.title,
                            thumbnail: prod.thumbnail,
                            qty: 1,
                            price: prod.price,
                        },
                    })}
                >
                Add to Cart
                </button>
            )}
            </div>
        ))}
        </div>
    );
};

export default Products;
