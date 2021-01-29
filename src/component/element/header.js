import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary ">
            <Link to="/" className=" text-white border px-2">
                Book Store
            </Link>

            <nav className="ml-auto">
                <Link to="/contact" className="btn btn-light ml-auto">
                    Create contact
                </Link>
            </nav>
        </div>
    );
}
export default Header;