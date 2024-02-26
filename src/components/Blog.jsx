import React from "react";
import bData from '../api/blogsData.json'
import BlogCards from "./BlogCards";
import { useCart } from "react-use-cart";

const Blog = () => {

    const {items, title, image, published_date, author }=useCart();

    return (
        <>
           
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="tex-5xl lg:text-7xl leading-snug font-bold mb-5"> Blogs Page. </h2>
      </div>
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {
                        bData.map((cval, index) => {
                            return(
                                <>
                                <BlogCards
                                id={cval.id}
                                title={cval.title}
                                image={cval.image}
                                published_date={cval.published_date}
                                author={cval.author}
                                item={cval}
                                />
                               
                                
                                </>
                            )
                        })
                    }

                    {
                        items.map((cval)=>{
                            return(
                                <>
                                {cval.id}
                                <img src={cval.image} alt="" />
                                {cval.author}
                                {cval.published_date}
                                
                                </>
                            )
                        })
                    }

        </div>

                    

      </div>

                

            
        </>
        
    );
}
export default Blog;