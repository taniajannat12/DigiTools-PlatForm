import React, { useState } from 'react';
import { toast } from 'react-toastify';




 import {use} from 'react';
const Card = ({modelPromise,Cart,setCart}) => {
    const models=use(modelPromise)
    console.log(models);
const exist=Cart.find((product)=>product.id===item.id)
if(exist){
    toast.error("already added to cart")
}

    const [confirm,setConfirm]=useState(null);
    const handleConfirm=(item)=>{
        setConfirm(item.id);
        setCart([...Cart,item])
    }
    return (
        <div>
         {
           <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {models.map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm  relative">
                        
                        <div className="absolute top-4 right-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize 
                                ${item.tagType === 'best seller' ? 'bg-orange-100 text-orange-600' : 
                                  item.tagType === 'popular' ? 'bg-purple-100 text-purple-600' : 
                                  'bg-green-100 text-green-600'}`}>
                                {item.tag}
                            </span>
                        </div>

                        <div className="mb-8">
                           
                            <img src={item.icon} alt={item.name} className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="mb-6">
                            <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                            <span className="text-gray-400 text-sm capitalize">/{item.period}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {item.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button onClick={()=>handleConfirm(item)} className="w-full py-4 bg-blue-500 text-white font-semibold rounded-2xl ">
                            {confirm===item.id? "Confirmed":"Buy Now"}
                           
                        </button>
                    </div>
                ))}
            </div>
        </div>
         }



            
        </div>
    );
};

export default Card;