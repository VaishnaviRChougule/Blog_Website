import React from "react";
import about1 from '../assets/about1.jpg'

const About = () => {
  return (

    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="tex-5xl lg:text-7xl leading-snug font-bold mb-5"> About Us Page. </h2>
      </div>


      <div class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img src={about1} alt="" className=" object-cover object-center rounded" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We Provide High Quality
              <br class="hidden lg:inline-block sm:inline-block" />Articles and Blogs.
            </h1>
            <p class="mb-8 leading-relaxed px-10">The main purpose of this Blog Website is to manage the details of
              Blogs, Idea, Entries. It manages all the information about Blogs. This Website enables the users to create innovative and attractive information with photos in just few simple steps. </p>

          </div>
        </div>
      </div>

    </div>

  )
}
export default About;
