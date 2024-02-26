import React from "react";
import art from '../assets/art.avif';
import life from '../assets/life.avif';
import music from '../assets/Music.png';
import nature from '../assets/nature.jpg';
import education from '../assets/education.jpg';
import entertainment from '../assets/entertainment.jpg';

const Services =()=>{
    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="tex-5xl lg:text-7xl leading-snug font-bold mb-5"> Services Page. </h2>
            </div>

            <div>

            <section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-col text-center w-full mb-20 ">
      <h1 class="text-2xl font-medium title-font mb-4  text-gray-900 tracking-widest">OUR SERVICES</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We provide all types of Blogs in this website.</p>
      <span className="border-b-2 border-orange-500 pt-3 lg:mx-48 md:mx-36 "></span>
      
    </div>
    <div class="flex flex-wrap md:m-4 lg:m-32 lg:my-0" >
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
         <img src={art} alt="" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Art</h2>
            
            <p class="mb-4">The task of the artist is to make the human being uncomfortable. Art is a lie that makes us realize truth.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={life} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">LifeStyle</h2>
            
            <p class="mb-4">A simple lifestyle can make you happy and high expectations can disappoint a lot.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={music} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Music</h2>
            
            <p class="mb-4">Music is the great uniter. An incredible force. Something that people who differ on everything and anything else can have in common.</p>
          
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={nature} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Nature</h2>
            
            <p class="mb-4">Nature is the source of all true knowledge.Nature always wears the colors of the spirit.</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={education} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Education</h2>
            
            <p class="mb-4">A simple but powerful reminder of the positive domino effect a good education can have on many aspects of a person’s life and outlook.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={entertainment} />
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Entertainment</h2>
          
            <p class="mb-4">Entertainment is there to improve people's quality of life. After your basic needs, there's entertainment.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        </div>
        
    )
}
export default Services;