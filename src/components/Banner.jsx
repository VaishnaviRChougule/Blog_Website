import React from "react";
import { Link } from "react-router-dom";

const Banner =()=>{
    return(
<div className="px-4 py-20 mx-auto bg-black"> 
<div className="text-white text-center">
    <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome To Our Blog Website. </h1>
    <p className="text-gray-100 lg:w-3/5 mx-auto font-primary ">Start your Blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>

    <div>
        <Link to="/" className="font-medium hover:text-orange-500 inline-flex items-center pt-3" >Learn More...</Link>
    </div>

</div>
</div>

    )
}
export default Banner;