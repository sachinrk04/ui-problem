import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./ShoppingCart.scss";
import { cartReducer } from "./cartReducer";
import Products from "../../Components/ShoppingCart/Products/Products";
import Cart from "../../Components/ShoppingCart/Cart/Cart";

function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: [],
    });

    const fetchProducts = async () => {
        const { data } = await axios.get("https://dummyjson.com/products");

        dispatch({
        type: "ADD_PRODUCTS",
        payload: data.products,
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="shopping-cart-style">
            <Products state={state} dispatch={dispatch} />
            <Cart state={state} dispatch={dispatch} />
        </div>
    );
}

export default ShoppingCart;