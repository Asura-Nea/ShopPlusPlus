import PropTypes from "prop-types";
import { StarIcon } from '@heroicons/react/20/solid'
// import { useEffect, useState } from "react";
import axios from 'axios';



const reviews = { href: '#', average: 0, totalCount: 117 }
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


const quantity = 1;
// Function to add a new card product
const addCardProduct = async (newCard) => {


    const response = await axios.get('http://localhost:5001/cart');

    const checkId = response.data.find((item) => item.id === newCard.id);
    console.log(newCard.id);
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
                ...newCard,
                autocartId,
                quantity,
            };
            const response = await axios.post('http://localhost:5001/cart', fullProductDetails);
            console.log(response.data);
        }
    } catch (error) {
        console.error(`Error adding card product: ${error}`);
    }
};


const CardProduct = ({ id, imageAlt, imageSrc, name, price, star, model }) => {


    console.log(`Rendering product with name: ${id}`);
    return (
        <div key={id} className="card bg-base-100 w-100 shadow-xl text-card-font">
            <figure>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                />
            </figure>
            <div className="card-body bg-bg-card">
                <h1 className="card-title">{model}</h1>
                <h2>{name}</h2>
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                            key={rating}
                            className={classNames(
                                star > rating ? 'text-blue-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                            )}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <p>{price}</p>
                <div className="card-actions justify-between">
                    <svg onClick={() => addCardProduct({ id, imageAlt, imageSrc, name, price, model })} role="button" className="w-10 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                    </svg>

                    <button className="btn btn-primary bg-button-color w-50 h-10">Buy Now</button>
                </div>
            </div>
        </div>
    )
};

CardProduct.propTypes = {
    id: PropTypes.string,
    imageAlt: PropTypes.string,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    star: PropTypes.number,
    model: PropTypes.string
};

export default CardProduct;