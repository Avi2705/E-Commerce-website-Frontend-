import { useState } from 'react'
import productData from "./json/Data.js"
import Navbar from './Container/Navbar.jsx'
import Sidebar from './Container/Sidebar.jsx'

function App() {
  const [pricerange, setPricerange] = useState([Math.min(...productData.map((p) => p.price)), Math.max(...productData.map((p) => p.price))])
  const [selectbrand, setSelectbrand] = useState([])
  const [selectram, setSelectRam] = useState(null)
  const [selectstorage, setSelectStorage] = useState(null)
  // console.log(productData);
  const brands = [...new Set(productData.map((p) => p.brand))].sort();

  return <>
    <Navbar />
    <div>

      <Sidebar brands={brands} pricerange={pricerange} selectbrand={selectbrand} setSelectbrand={setSelectbrand} setPricerange={setPricerange}  selectram={selectram} setSelectRam= {setSelectRam}  setSelectStorage = {setSelectStorage} selectstorage = {selectstorage} />
      <div>

      </div>
    </div>
  </>
}

export default App
