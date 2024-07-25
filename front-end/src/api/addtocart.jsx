import { createContext, useContext, useState, useEffect } from 'react';
import { getCartData } from './apiCart';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCartData();
            setCart(data);
        };

        fetchData();
    }, []);

    const quantity = 1;
    const addToCart = async (product) => {
        // Logic to add product to cart
        // This could involve calling an API and then updating local state
        // For simplicity, we'll just update the local state here


        const response = await axios.get(`${BASE_URL}/carts`);

        const checkId = response.data.find((item) => item.id === product.id);
        console.log(product.id);
        const cartId = response.data.length;
        const autocartId = cartId + 1;




        try {
            if (checkId) {
                const newCard = { ...checkId, quantity: checkId.quantity };
                console.log(`Product with ID ${newCard.quantity} already exists in the cart`);
                newCard.quantity += 1;
                const res = await fetch(`${BASE_URL}/carts/${cartId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCard),
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                console.log("Cart data updated successfully:", data);
                return data;
            } else {
                const fullProductDetails = {
                    ...product,
                    autocartId,
                    quantity,
                };
                const res = await fetch(`${BASE_URL}/carts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fullProductDetails),
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                console.log("New cart data added successfully:", data);
                return data;
            }
        } catch (error) {
            console.error(`Error adding card product: ${error}`);
        }

        setCart([...cart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};