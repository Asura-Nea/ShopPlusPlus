import { createContext, useContext, useState, useEffect } from 'react';
import { getCartData } from './apiCart';
import axios from 'axios';

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


        const response = await axios.get('http://localhost:5001/cart');

        const checkId = response.data.find((item) => item.id === product.id);
        console.log(product.id);
        const cartId = response.data.length;
        const autocartId = cartId + 1;




        try {
            if (checkId) {
                const newCard = { ...checkId, quantity: checkId.quantity };
                console.log(`Product with ID ${newCard.quantity} already exists in the cart`);
                newCard.quantity += 1;
                const response = await axios.put(`http://localhost:5001/cart/${newCard.id}`, newCard);
                console.log(response.data);
            } else {
                const fullProductDetails = {
                    ...product,
                    autocartId,
                    quantity,
                };
                const response = await axios.post('http://localhost:5001/cart', fullProductDetails);
                console.log(response.data);
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