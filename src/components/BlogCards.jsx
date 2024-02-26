import React from "react";

import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";


const BlogCards = (props) => {
    return (

        <div className="p-5 shadow-lg rounded cursor-pointer">
                
                
                     <img src={props.image} alt="" className="w-full h-60" />
           
                     <h3 className="mt-4 mb-2 font-bold hover:text-blue-800 cursor-pointer">{props.title}</h3>
                     <p className="mb-2 text-gray-600"><FaUser className="inline-flex items-center mr-2"/> {props.author}</p>
                     <p className="text-sm text-gray-600">{props.published_date}</p>
                     <Link to={`/singlepage/${props.id}`}><button className="text-xs">Know More...</button>
                     </Link>
                 

        
                    </div >
            
        
    )
}
export default BlogCards;