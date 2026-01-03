 const Navbar = () => {
  return (
<div>
    <nav className="bg- bg-emerald-600 p-4 shadow-md">
    <div className="max-w-7xl mx-inline-auto flex items-center justify-between">
<h1 className="text-white text-2xl font-normal">
    Searching Store
</h1>
<input type="text" className="w-1/2 focus: ring-amber-400  focus:outline-none text-base p-3 border-2 rounded-lg bg-white " placeholder="Search for smartphone, brands, colors...."/>


</div>
</nav>
</div>
  )

}
export default Navbar;