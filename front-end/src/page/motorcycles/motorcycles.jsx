import CardProduct from "../../components/cardProduct/cardProduct";
import { useEffect, useState } from "react";
import { getMotorsData } from "../../api/apiProduct.jsx";

function Motorcycles({ motorData }) {
    const [motors, setMotors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const Data = await getMotorsData(motorData);
            setMotors(Data);
        };

        fetchData();
    }, [motorData]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Motorcycles</h2>
                <div className="flex items-center justify-center">
                    <h2 className="text-5xl font-bold tracking-tight text-red-600">MOTORCYCLES</h2>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">show all {motors.length} results</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {motors.map((product) => (
                        <CardProduct
                            key={product._id}
                            imageSrc={product.imageSrc}
                            imageAlt={product.imageAlt}
                            name={product.name}
                            price={product.price}
                            star={product.star}
                            model={product.model}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Motorcycles;