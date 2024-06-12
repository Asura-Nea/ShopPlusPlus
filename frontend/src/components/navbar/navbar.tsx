import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> <h1>Home</h1> </Link>
                    </li>
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
            </nav>
        <Outlet />
        </>
    );
}

                    
                    
                   
            