import { useState } from 'react'
import productData from "./json/Data.js"
import Navbar from './Container/Navbar.jsx'
import Sidebar from './Container/Sidebar.jsx'
import Productcart from './Container/Productcart.jsx'
// import product from './json/Data.js'
import AddCart from './Container/AddCart.jsx'
import product from './json/Data.js'

function App() {
  const [pricerange, setPricerange] = useState([Math.min(...productData.map((p) => p.price)), Math.max(...productData.map((p) => p.price))])
  const [selectbrand, setSelectbrand] = useState([])
  const [selectram, setSelectRam] = useState(null)
  const [selectstorage, setSelectStorage] = useState(null)
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([])
 const [iscartopen, setIsCartopen] = useState(false)
  const addtocart = (product) =>{
setCart((prev) => {

  const existingitems = prev.find((item) => item.id === product.id);
  if(existingitems){
    //need to update quantity onl;y
    return prev.map((item)=> item.id === product.id ? {...item, quantity: item.quantity + 1} : item)

  }
  return [...prev, {...product, quantity:1}]
});
  }
  const removefromcart = (id) =>{
setCart((prev) => prev.filter((item) => item.id !== id));
  }
  const updatequantity =(id, quantity) =>{

  }
  // console.log(productData);
  const brands = [...new Set(productData.map((p) => p.brand))].sort();



  const filterproducts = productData.filter((product) => {

    const matchessearch =
  product.brand?.toLowerCase().includes(search?.toLowerCase() || "") ||
  product.model?.toLowerCase().includes(search?.toLowerCase() || "") ||
  product.colour?.toLowerCase().includes(search?.toLowerCase() || "");


  const matchbrands = selectbrand.length === 0  || selectbrand.includes(product.brand)

  const matchprice = product.price >= pricerange[0] && product.price <= pricerange[1];
const matchram = selectram === null || product.ram === selectram;
const matchstorage = selectstorage === null || product.storage === selectstorage ;

return matchessearch && matchbrands && matchprice && matchram  && matchstorage;

  })
  return <>
    <Navbar
      search={search} setSearch={setSearch}  cart={cart}   iscartopen = {iscartopen} setIsCartopen ={ setIsCartopen}/>
    <div className='flex'>

      <Sidebar brands={brands} pricerange={pricerange} selectbrand={selectbrand} setSelectbrand={setSelectbrand} setPricerange={setPricerange} selectram={selectram} setSelectRam={setSelectRam} setSelectStorage={setSelectStorage} selectstorage={selectstorage} />
      <div className='flex-1 p-10 bg-emerald-50'>
        <div className='max-w-7xl mx-auto p-4'>
          <h2 className='text-2xl font-bold p-4 mt-6'>Products  ({filterproducts.length})  </h2>
          {filterproducts.length == 0 ? (
            <p className="text-center text-gray-700">No Products available on your search </p>) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
              {filterproducts.map((product) => (

                <Productcart key={product.id} product={product}  addtocart = {addtocart}/>)
              )}
            </div>
          )}
        </div>
      </div>
      <AddCart cart={cart}    iscartopen = {iscartopen} setIsCartopen ={ setIsCartopen}  deletecart={removefromcart} />
    </div>
  </>
}

export default App


