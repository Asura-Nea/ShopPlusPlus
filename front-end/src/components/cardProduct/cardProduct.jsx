import PropTypes from "prop-types";
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = { href: '#', average: 0, totalCount: 117 }
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const CardProduct = ({ imageAlt, imageSrc, name, price, star, model }) => {

    return (
        <div className="card bg-base-100 w-100 shadow-xl">
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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
};

CardProduct.propTypes = {
    imageAlt: PropTypes.string,
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    star: PropTypes.number,
    model: PropTypes.string
};

export default CardProduct;