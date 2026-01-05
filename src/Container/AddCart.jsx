import { useState } from "react";

const AddCart = ({iscartopen,setIsCartopen, cart , deletecart}) => {
  const str = JSON.stringify(cart);
  const [del , setDelete] = useState(false);
  return (
    <div className={`fixed top-0 right-0 w-80 h-full  bg-white shadow-xl z-20 transform transition-transform duration-300    ${iscartopen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 h-full"> 

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-emerald-800">Your Cart</h2>
            <button onClick={()=> setIsCartopen(false)} className="text-gray-600 hover:text-gray-900">X</button>
             </div>
           {(cart?.length || 0) === 0
  ? <p className="text-gray-600 text-center mt-10">No Carts</p>
  : (<div className="">  {cart.map((items)=><div className="flex mb-4 p-2 border-2 hover:shadow-2xl hover:rounded-2xl" key={items.id}>
    <img className="  object-contain  h-16 w-16  mr-4 " src={items.image }/>
    <div className="flex-1"> 
      <h3 className="text-sm font-semibold ">{items.brand}</h3>
    <p>{items.model} </p>
    <p>{items.price} * {items.quantity}</p> 
    <p>₹{items.price * items.quantity}</p>
   
    </div>
    
    <div> <button onClick={()=>deletecart(items.id)}> Delete</button> </div>
     </div>
     )}</div>)
}

             </div>

             <div>

             </div>
    </div>
  )
}

export default AddCart;
