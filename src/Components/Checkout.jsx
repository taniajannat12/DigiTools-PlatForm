



// import React from 'react';

// const Checkout = ({Cart,setCart}) => {
//     const total = Cart.reduce((sum, item) => 
//         sum + item.price, 0);

//     const handleDelete=(item)=>{
//         const filterCart=(Cart.filter(i=>i.id!== item.id))
//         setCart(filterCart)
//     }

//     return (
//         <div>
//             <div className="space-y-4">
//     {Cart.length === 0 ? (
//         <div className="text-center py-20">
//             <div className="flex justify-center mb-4">
//                 <span className="text-5xl">🛒</span> 
//             </div>
//             <h2 className="text-2xl font-bold text-gray-400">Cart is Empty</h2>
           
//         </div>
//     ) : (
//             <div className="container mx-auto px-4 py-10">
//             <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
//                 <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

//                 <div className="space-y-4">
//                     {Cart.map((item) => (
//                         <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0">
//                             <div className="flex items-center gap-4">
//                                 <img src={item.icon} alt="" className="w-10 h-10 bg-gray-100 p-2 rounded-lg" />
//                                 <div>
//                                     <h3 className="font-bold text-gray-800">{item.name}</h3>
//                                     <p className="text-sm text-gray-500">${item.price}</p>
//                                 </div>
//                             </div>
                            
//                             <button 
//                                 onClick={()=>handleDelete(item)}
//                                 className="text-red-500 text-sm font-semibold ">
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-8 pt-6 border-t">
//                     <div className="flex justify-between items-center mb-6">
//                         <span className="text-gray-500">Total:</span>
//                         <span className="text-2xl font-bold">${total}</span>
//                     </div>

//                     <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-2xl">
//                         Proceed To Checkout
//                     </button>
//                 </div>
//             </div>
//         </div>

//                 )}
//                 </div>



//     );
// };

// export default Checkout;
import React from 'react';
import {toast} from 'react-toastify'
const Checkout = ({ Cart, setCart }) => {
    const total = Cart.reduce((sum, item) => sum + item.price, 0);
toast.success('Cart added successfully')

    const handleDelete = (item) => {
        const filterCart = Cart.filter(i => i.id !== item.id);
        setCart(filterCart);
        toast.success('Cart deleted successfully')
    };

    const handleCheckout=()=>{
        setCart([])
         toast.success('proceed Checkout successfully')
    }

    return (
        <div className="space-y-4"> 
            {Cart.length === 0 ? (
                <div className="text-center py-20">
                    <div className="flex justify-center mb-4">
                        <span className="text-5xl">🛒</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Cart is Empty</h2>
                </div>
            ) : (
  <div className="container mx-auto px-4 py-10">
                    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

                        <div className="space-y-4">
                            {Cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between pb-4 ">
                                    <div className="flex items-center gap-4">
                                        <img src={item.icon} alt="" className="w-10 h-10 bg-gray-100 p-2 rounded-lg" />
                                        <div>
                                            <h3 className="font-bold text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="text-red-500 text-sm font-semibold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-500">Total:</span>
                                <span className="text-2xl font-bold">${total}</span>
                            </div>

                            <button onClick={()=>handleCheckout()}  className="w-full py-4 bg-blue-500 text-white font-bold rounded-2xl">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )} 
        </div> 
    );
};

export default Checkout;