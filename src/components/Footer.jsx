import React from "react";
import { FaFacebook, FaGithub, FaSquareTwitter, FaInstagram} from "react-icons/fa6";
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContainer">

                    <div className="socialIcons">
                        <a href="" className="hover:text-white"><FaFacebook /></a>
                        <a href="" className="hover:text-white"><FaSquareTwitter /></a>
                        <a href="" className="hover:text-white"><FaGithub /></a>
                        <a href="" className="hover:text-white" ><FaInstagram /></a>
                    </div>
                    <div className="footerNav">

                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
                    <div className="footerBottom text-white">
                    <marquee behavior="alternate" direction="left">This Website Is Designed By Vaishnavi</marquee>
                    </div>

            </footer>





        </>


    )
}
export default Footer;