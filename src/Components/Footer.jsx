import React from 'react';
import packageImg from '../assets/user.png';
import packageImg1 from '../assets/package.png';
import packageImg2 from '../assets/rocket.png';
const Footer = () => {
    return (
        <div>
            <div className='bg-gray-100  pt-7  pb-20'>
<div className='text-center mb-12'>
<h1 className='text-4xl text-blue-950 font-bold'>Get Started in 3 Steps</h1>
<p className='text-gray-600'>Start using premium digital tools in minutes, not hours.</p></div>

<div className='container mx-auto flex justify-center gap-5'>
<div className='w-[250px] h-[250px]  bg-white shadow-sm rounded-4xl p-11'>
   <div className='absolute  bg-blue-500  w-8 h-8 text-center text-xl text-white font-semibold rounded-full items-end'>01</div>
  <div className='flex justify-center'> <img src={packageImg} className='text-center w-11 h-11 bg-gray-300 rounded-full p-3'/></div>
    <div className='text-center'>
        <h1 className='text-xl font-semibold'>Create Account</h1>
        <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
    </div>
</div>

<div className='w-[250px] h-[250px]  bg-white shadow-sm rounded-4xl p-11'>
    <div className='absolute bg-blue-500  w-8 h-8 text-center text-xl text-white font-semibold rounded-full items-end'>02</div>
  <div className='flex justify-center'> <img src={packageImg1} className='text-center w-11 h-11 bg-gray-300 rounded-full p-3'/></div>
    <div className='text-center'>
        <h1 className='text-xl font-semibold'>Choose Products</h1>
        <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
    </div>
</div>

<div className='w-[250px] h-[250px] bg-white shadow-sm rounded-4xl p-11'>
    <div className='absolute  bg-blue-500  w-8 h-8 text-center text-xl text-white font-semibold rounded-full items-end'>03</div>
  <div className='flex justify-center'> <img src={packageImg2} className='text-center w-11 h-11 bg-gray-300 rounded-full p-3'/></div>
    <div className='text-center'>
        <h1 className='text-xl font-semibold'>Start Creating</h1>
        <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
    </div>
</div>
</div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
              


 <div className='bg-white  pt-7  pb-20'>
<div className='text-center mb-12'>
<h1 className='text-4xl text-blue-950 font-bold'>Simple, Transparent Pricing</h1>
<p className='text-gray-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p></div>

<div className='container mx-auto flex justify-center gap-6'>
<div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
  
      <h2 className="text-3xl font-bold">Starter</h2>
      <p className='text-gray-500'>Perfect for getting started.</p>
      <span className="text-3xl font-bold">$0/month</span>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Community support</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>1 project per month</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary rounded-full btn-block">Get Started Free</button>
    </div>
  </div>
</div>



<div className="card w-96 bg-blue-500 shadow-sm  ">
  <div className="card-body">
   <span className="badge badge-xs badge-warning absolute -top-3 left-40">Most Popular</span>
      <h2 className="text-3xl text-white font-bold">Pro</h2>
      <p className='text-white'>Best for professionals.</p>
      <span className="text-3xl text-white font-bold">$29/Month</span>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Priority support</span>
      </li>
       <li>
        <svg   xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Unlimited projects</span>
      </li>
      <li>
        <svg   xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Cloud sync</span>
      </li>
      <li>
        <svg   xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-white'>Start Pro Trial</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-wide text-blue-500 rounded-full btn-block">Get Started Free</button>
    </div>
  </div>
</div>




<div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
  
      <h2 className="text-3xl font-bold">Enterprise</h2>
      <p className='text-gray-500'>For teams and businesses.</p>
      <span className="text-3xl font-bold">$99/Month</span>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Custom integrations</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Dedicated support</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>SLA guarantee</span>
      </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-500'>Custom Branding</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary rounded-full btn-block">Contact Sales</button>
      
    </div>
  </div>
</div>

</div>
 </div>  



















<div className='bg-blue-500 pt-20 pb-20 space-y-5'>

    <h1 className='text-4xl text-white font-bold text-center'>Ready To Transform Your Workflow?</h1>
    <p className='text-white text-center'>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
    <div className='flex justify-center gap-6'>
    <button className='bg-white shadow-sm rounded-4xl p-2 text-blue-500 '>Explore Products</button>
    <button className='bg-blue-500 shadow-sm rounded-4xl p-2 text-white'>View Pricing</button></div>
    <p className='text-white text-center'>14-day free trial • No credit card required • Cancel anytime</p>
</div>
       
        
        
        
        
    <div className='bg-blue-950 pt-20 pb-20'>
      <div className='container mx-auto flex justify-center gap-10'>

<div className='space-y-4'>
  <h1 className='text-4xl text-white font-bold '>DigiTools</h1>
  <p className=' text-white'>Premium digital tools for creators,</p>
    <p className=' text-white'>professionals, and businesses. Work smarter</p>
    <p className=' text-white'> with our suite of powerful tools.</p>
</div>


<div>
  <h1 className='text-xl font-semibold text-white'>Product</h1>
  <p className='text-white'>Features</p>
  <p  className='text-white'>Templates</p>
  <p  className='text-white'>Integrations</p>
</div>



<div>
  <h1 className='text-xl font-semibold text-white'>Company</h1>
  <p className='text-white'>About</p>
  <p className='text-white'>Blog</p>
  <p className='text-white'>Careers</p>
  <p className='text-white'>Press</p>
</div>

<div>
  <h1 className='text-xl font-semibold text-white'>Resources</h1>
  <p className='text-white'>Documentation</p>
  <p className='text-white'>Help Center</p>
  <p className='text-white'>Community</p>
  <p className='text-white'>Contact</p>
</div>



<div>
  <h1 className='text-xl font-semibold text-white mb-4'>Social Links</h1>
  <div className='flex gap-4'>
    <a href="#" className='w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 transition-colors'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </a>
    <a href="#" className='w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 transition-colors'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </a>
    <a href="#" className='w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 transition-colors'>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
    </a>
  </div>
</div>
    </div>

  
</div>
<div className='bg-blue-950'>
<div className='container mx-auto bg-blue-950 pb-20'>
    <div className='border-t border-gray-700/50 w-full mb-8'></div>
    
    <div className='flex justify-between items-center text-gray-400 text-sm'>
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className='flex gap-6'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
    </div>
</div>

</div>
</div>
    );
};

export default Footer;





