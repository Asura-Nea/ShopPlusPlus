import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import { useState } from 'react';



export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Step 2: Create Event Handlers
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <>
            <div className="navbar bg-blue-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Trigger button */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                            {/* SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Menu Content */}
                        {isMenuOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2">
                                <li><Link to="/" onClick={closeMenu}><h1 className="white-text">Home</h1></Link></li>
                                <li><Link to="/motorcycles" onClick={closeMenu}><h1>Motorcycles</h1></Link></li>
                                <li><Link to="/accessories" onClick={closeMenu}><h1>Accessories</h1></Link></li>
                                <li><Link to="/aboutus" onClick={closeMenu}><h1>About Us</h1></Link></li>
                                <li><Link to="/contactus" onClick={closeMenu}><h1>Contact Us</h1></Link></li>
                            </ul>
                        )}
                    </div>
                    {/* ShopPlusPlus Link */}
                    <Link to="/" className="btn btn-ghost text-xl">ShopPlusPlus</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"> <h1>Home</h1> </Link></li>
                        <li>
                            <Link to="/motorcycles"> <h1>Motorcycles</h1> </Link>
                        </li>
                        <li>
                            <Link to="/accessories"> <h1>Accessories</h1> </Link>
                        </li>
                        <li>
                            <Link to="/aboutus"> <h1>About Us</h1> </Link>
                        </li>
                        <li>
                            <Link to="/contactus">  <h1>Contact Us</h1> </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>

                                <Link to="/cart" tabIndex={0} role="button" className="btn btn-primary btn-block">View cart</Link>

                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow">
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/tracing">Tracing</Link></li>
                            <li><Link to="/">Logout</Link></li>
                        </ul>
                    </div>


                    {/* <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div> */}
                </div>
            </div >
            <Outlet />



        </>
    );
}




