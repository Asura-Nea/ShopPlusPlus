import motor from "../../assets/111.png";
import "./homePage.css";


// Assuming this is inside an async function
const res = await fetch('http://localhost:3000');
const data = await res.json(); // Wait for the Promise to resolve
console.log(data);

const Home = () => {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url(${motor})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Shop Plus Plus</h1>
                        <p className="mb-5">
                            Shop Plus Plus Providing reliable serive since 1992
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


        </>
    )
}

export default Home;