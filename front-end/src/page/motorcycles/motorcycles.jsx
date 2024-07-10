/* eslint-disable react/jsx-key */
import { StarIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react";



function Motorcycles() {
    const [motors, setMotors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/motors')
            .then(res => res.json())

            .then(data => {
                console.log(data);
                setMotors(data)
            })

            .catch(error => console.error('Error:', error));
    }, []);

    const reviews = { href: '#', average: 0, totalCount: 117 }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <>

            <div className="bg-white">

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Motorcycles</h2>
                    <div className="flex items-center justify-center">
                        <h2 className="text-5xl font-bold tracking-tight text-red-600">MOTORCYCLES</h2>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">show all 8 results</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {motors.map((product) => (

                            <div className="card bg-base-100 w-100 shadow-xl">
                                <figure>
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}

                                    />
                                </figure>
                                <div className="card-body bg-white">
                                    <h1 className="card-title">{product.name}</h1>
                                    <h2>{product.name}</h2>
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    product.star > rating ? 'text-blue-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0',
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <p>{product.price}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}



export default Motorcycles;