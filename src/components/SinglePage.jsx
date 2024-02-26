import React from "react";
import bData from '../api/blogsData.json'
import { useParams } from "react-router-dom";

const SinglePage=()=>{

    const { id } =useParams();
    console.log(id);
    return(
        <>
        <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="tex-5xl lg:text-7xl leading-snug font-bold mb-5"> Single Blog Page. </h2>
            </div>
        {
            bData.map((cval)=>{
                if(id==cval.id){

                    return(
                        <>
                        <div className="max-w-7xl mx-auto my-12">
                            <div className="lg:w-3/4 mx-auto">
                                <div className="col-md-6">
                                    <img src={cval.image} alt="blogimg" className="h-[500px] w-[800px] mx-auto rounded " />
                                </div>
                                <div className="col-md-6">
                                    <h1 className="text-3xl font-bold mb-4 mt-8">{cval.title}</h1>
                                    <h1 className="text-sm text-gray-600 ">Author : {cval.author}</h1>
                                    <h1 className="text-sm text-gray-600 mt-2">Published Date : {cval.published_date}</h1>
                                    <p className="mt-4">{cval.content}</p>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                }
            })
        }
        </>
    )
}
export default SinglePage;