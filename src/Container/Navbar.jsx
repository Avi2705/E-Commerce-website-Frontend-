

 const Navbar = ({  search, setSearch, cart, setIsCartopen })  => {
  // const totalitems = cart.length;
  const totalitems = cart?.length || 0;

   return (
    <nav className="bg-emerald-600 p-4 shadow-md">
    <div className="max-w-7xl mx-inline-auto flex items-center justify-between">
<h1 className="text-white text-2xl font-normal">
    SmartPhone Store
</h1>
<input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="w-1/2 focus: ring-amber-400  focus:outline-none text-base p-3 border-2 rounded-lg bg-white " placeholder="Search for smartphone, brands, colors...."/>


<button onClick={() => setIsCartopen(true)} className="relative text-white text-2xl"> 🛒</button>
{totalitems > 0 ?
<span className="absolute -top-2 right-2   bg-red-500 px-2 py-1 rounded-full text-sm m-2"> {totalitems} </span> : ""
 }
</div>
</nav>

  )
}
export default Navbar;