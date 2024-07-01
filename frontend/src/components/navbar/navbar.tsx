import { Outlet, Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-blue-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2">
                            <li><Link to="/"> <h1 className="white-text ">Home</h1> </Link></li>
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
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
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />



        </>
    );
}




