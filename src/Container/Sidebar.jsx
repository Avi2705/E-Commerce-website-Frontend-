import productData from "../json/Data.js";
const Sidebar = ({brands,pricerange,setPricerange,selectbrand, setSelectbrand , selectram, setSelectRam , selectstorage, setSelectStorage}) => {
const ramoptions = [...new Set(productData.map((p)=>p.ram))].sort((a,b) => a-b);
const storageoptions = [...new Set(productData.map((p)=>p.storage))].sort((a,b) => a-b);
const minprice = Math.min(...productData.map((p)=>p.price))
const maxprice = Math.max(...productData.map((p)=>p.price))

  return (
    <div className="w-64 bg-emerald-100 h-screen sticky top-16 overflow-y-auto shadow-inner">
<h3 className="font-bold text-xl text-emerald-800 mb-6 ml-8 ">Filters</h3>
{/* brand */}
{brands.map((brand) => (
  <label key={brand} className="flex items-center mb-2 cursor-pointer">
    <input
    
      type="checkbox"
      className="mr-2 ml-8 accent-emerald-600"
      onChange={() =>
        setSelectbrand(
          selectbrand.includes(brand)
            ? selectbrand.filter((b) => b !== brand)
            : [...selectbrand, brand]
        )
      }
    />
    {brand.charAt(0).toUpperCase() + brand.slice(1)}
  </label>
))}

{/* PriceRange  */}
<div className="mb-6 ml-8">
    <h3 className=" font-medium text-emerald-800 mb-3">Price range</h3>
    <label>
        <input className="w-full accent-emerald-800" min={minprice} 
    max={maxprice} value={pricerange[1] } onChange={(e)=>setPricerange([minprice, parseInt(e.target.value)])} type="range"/>
        <div className="flex justify-between text-sm mt-2">
            <span>
             ₹ {  pricerange[0]}</span>
            <span>₹ {  pricerange[1]}</span>
        </div>
    </label>
</div>
{/* Ram */}

<div className="mb-6 ml-8">
<h1 className="text-emerald-800 font-medium mb-3"> Ram </h1>
<select value={selectram} onChange={(e)=> setSelectRam(e.target.value)?parseInt(e.target.value):null} className="w-full border border-gray-100 rounded focus: outline-none focus:ring-2 focus:ring-emerald-500">
    <option>all</option>
    {ramoptions.map((ram)=>(
        <option key={ram} value={ram}>{ram} GB</option>
    ) )}
</select>

</div>
    {/* Storage */}
<div className="mb-6 ml-8">
  <h1 className="text-emerald-800 font-medium mb-3">Storage</h1>

  <select
    value={selectstorage || ""}
    onChange={(e) =>
      setSelectStorage(e.target.value === "" ? "" : e.target.value)
    }
    className="w-full border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    <option value="">All</option>
    {storageoptions.map((storage) => (
      <option key={storage} value={storage}>
        {storage} GB
      </option>
    ))}
  </select>
</div>

</div>
 
  )}
 export  default Sidebar;