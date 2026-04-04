
import './App.css'

import { Suspense,useState } from 'react';
import Nabver from './Components/Nabver'
import Banner from './Components/Banner'
import Card from './Components/Card'
import Checkout from './Components/Checkout';
import Footer from './Components/Footer'







const getModels=async()=>{
  const res=await fetch ('/data.json')
  return res.json();
}

  const modelPromise=getModels();
function App() {


const [activeTab,setActiveTab]=useState('Products')
const [Cart,setCart]=useState([]);
  return (
    <>
   <Nabver></Nabver>
<Banner>
</Banner>


<div className="tabs tabs-box justify-center ">
  <input type="radio" name="my_tabs_1" className="tab text-white rounded-full font-bold  bg-blue-500" aria-label="Products"
  onClick={()=>setActiveTab('Products')}
  
  defaultChecked/>
  <input type="radio" name="my_tabs_1" className="tab  rounded-full font-bold" aria-label={`Cart(${Cart.length})`}
   onClick={()=>setActiveTab('cart')}
  
  />

</div>
<Suspense fallback={<h1>Loading...</h1>}>
{activeTab==='Products' && <Card modelPromise={modelPromise} Cart={Cart} setCart={setCart} />}
</Suspense>

{activeTab=='cart' && <Checkout Cart={Cart} setCart={setCart}></Checkout>}



<Footer></Footer>


    </>
  )
}






export default App
