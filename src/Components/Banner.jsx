import React from 'react';
import { FaRegDotCircle} from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import bannerImg from '../assets/banner.png'; 

const Banner = () => {
    return (
      <div>
                <div className="container mx-auto px-10 hero-content flex-col lg:flex-row-reverse justify-between">
               <div className='ml-6'>
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt="Banner" /></div>
               <div>
                <div className='flex justify-start bg-gray-200 rounded-full p-2 '>
                    <h1 className=' text-blue-600'><FaRegDotCircle /></h1>
                    <h1 className=' text-blue-600 '>New: AI-Powered Tools Available</h1>
                </div>
                
                <div>
                    <h1 className="text-5xl font-bold">Supercharge Your</h1>
 <h1 className="text-5xl font-bold">Digital Workflow</h1>
 <div className='text-gray-500 mt-8 mb-5'>
                    <p >Access premium AI tools, design assets, templates, and productivity</p>
                    <p>software—all in one place. Start creating faster today.</p>
                    <p>Explore Products</p></div>
                    <div className='flex gap-10 mb-14'>
                    <button className="btn btn-primary rounded-full">Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-full"><CiPlay1 />Watch Demo</button></div>
                </div>
                </div>
             </div>


   
<div className='  bg-blue-500 mb-30 '>
<div className='container mx-auto flex justify-between'>
    <div className=' p-11'>
    <h1 className='text-3xl text-white font-bold'>50K+</h1>
    <p className='text-gray-600'>Active USers</p>
</div>
<div className="h-40 w-[3px] bg-purple-300 opacity-50"></div>
<div className=' p-11'>
    <h1 className='text-3xl text-white font-bold'>200+</h1>
    <p className='text-gray-600'>Premium Tools</p>
</div>
<div className="h-40 w-[3px] bg-purple-300 opacity-50"></div>
<div className=' p-11'>
    <h1 className='text-3xl text-white font-bold'>4.9</h1>
    <p className='text-gray-600'>Rating</p>
</div>
</div>
        </div>
    

    <div className='text-center  mb-10 mt-10'>
        <h1 className='text-4xl text-blue-950 font-bold'>Premium Digital Tools</h1>
        <p className='text-gray-600'>Choose from our curated collection of premium digital products designed</p>
 <p className='text-gray-600'>to boost your productivity and creativity.</p>
    </div>
</div>
    );
};

export default Banner;