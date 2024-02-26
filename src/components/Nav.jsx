import React, { useState } from "react";
import { NavLink,useNavigate } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";


const Nav = () => {

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuopen] = useState(false);
    

    const toggleMenu = () => {
        setIsMenuopen(!isMenuOpen);
    }

    const navItems = [

        { path: "/", link: "Home",},
        { path: "/about", link: "About" },
        { path: "/services", link: "Services" },
        { path: "/blog", link: "Blogs" },
        { path: "/contact", link: "Contact" },
        { path: "/write", link: "Create New Blog" },
    ]
    //Modal  details

   



    return (
        <>
            <header className="bg-black text-white fixed top-0 left-0 right-0">
                <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                    <a href="" className="text-x1 font-bold text-white">Blogs</a>

                    <ul className="md:flex gap-12 text-lg hidden">
                        {
                            navItems.map(({ path, link }) => <li className="text-white" key={path}>
                                <NavLink className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                } to={path}>{link}</NavLink>
                            </li>)
                        }
                    </ul>
                    <div className="text-white lg:flex gap-4 items-center hidden">
                       

                        <button onClick={()=>navigate("/login")} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">Log in</button>
                        <button onClick={()=>navigate("/register")} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">Register</button>
                    </div>

                    

                    {/* mobile menu */}

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="cursor-pointer">
                            {
                                isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />
                            }
                        </button>

                    </div>

                </nav>
                {/* this menu for mobile device */}
                <div>
                    <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6  ${isMenuOpen ? "  top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                        {
                            navItems.map(({ path, link }) => <li className="text-white" key={path}>
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>)
                        }
                    </ul>
                </div>

            </header>
        </>

    );
}
export default Nav;