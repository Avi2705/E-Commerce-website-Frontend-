const Productcart = ({product , addtocart}) => {
  return (
    <div>

<div className="bg-white  shadow p-14 hover:shadow-2xl transition-all duration-100">
<img  className="w-full h-48 object-contain" src={product.image}   alt="product"/>
<h3 className="text-lg font-semibold mb-3 text-emerald-900">{product.brand}</h3>
<p className="text-gray-500 mb-2">  {product.model}| {product.colour}</p>
<p className="text-gray-500 mb-2"> {product.ram}GB RAM | {product.storage} GB Storage</p>
{/* <p className="text-gray-500 mb-2">7.6' Display</p> */}
<div className="flex  items-center  justify-between">
    <div>
        <p className="text-xl font-semibold tracking-wide text-emerald-700 ">₹{product.price}</p>
        <p className="text-sm mt-3 line-through">₹{product.price + 5000}</p>
    </div>
    <button  onClick={()=>{addtocart(product)}} className="bg-emerald-700 text-white px-4 py-2 rounded-2xl hover:bg-emerald-800 transition-all">Add Cart</button>
</div>
</div>

    </div>
  )
}
export default Productcart;