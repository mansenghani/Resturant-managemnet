import React from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Addnewdish = () => {
  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
<div className="flex h-screen overflow-hidden">
{/* <!-- Sidebar --> */}
<Sidebar />
{/* <!-- Main Content --> */}
<main className="flex-1 overflow-y-auto bg-background-light p-8 lg:p-12">
{/* <!-- Header --> */}
<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h2 className="serif-title text-4xl font-bold mb-2">Menu Management</h2>
<p className="text-luxe-dark/50 text-base">Manage dishes, categories, pricing and visibility.</p>
</div>
<button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-2xl font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
<span className="material-symbols-outlined">add</span>
<span>Add New Dish</span>
</button>
</header>
{/* <!-- Filters --> */}
<div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-6 py-2.5 bg-white text-primary rounded-full shadow-sm border border-primary/20 text-sm font-bold">All Dishes</button>
<button className="px-6 py-2.5 text-luxe-dark/60 hover:bg-white/50 rounded-full text-sm font-medium transition-colors">Appetizers</button>
<button className="px-6 py-2.5 text-luxe-dark/60 hover:bg-white/50 rounded-full text-sm font-medium transition-colors">Main Course</button>
<button className="px-6 py-2.5 text-luxe-dark/60 hover:bg-white/50 rounded-full text-sm font-medium transition-colors">Desserts</button>
<button className="px-6 py-2.5 text-luxe-dark/60 hover:bg-white/50 rounded-full text-sm font-medium transition-colors">Wine List</button>
<button className="px-6 py-2.5 text-luxe-dark/60 hover:bg-white/50 rounded-full text-sm font-medium transition-colors">Chef's Specials</button>
</div>
{/* <!-- Content Card --> */}
<div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-primary/5">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-primary/5 text-luxe-dark/40 uppercase text-[11px] tracking-widest font-bold">
<th className="px-8 py-5">Image</th>
<th className="px-4 py-5">Dish Name</th>
<th className="px-4 py-5">Category</th>
<th className="px-4 py-5">Price (?)</th>
<th className="px-4 py-5">Status</th>
<th className="px-8 py-5 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-primary/5">
{/* <!-- Row 1 --> */}
<tr className="table-row-hover group">
<td className="px-8 py-5">
<div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm border border-primary/10">
<img className="w-full h-full object-cover" data-alt="Exquisite truffle salad with microgreens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdLzMYjoa0DQZ5c-4YFTJkLv6jfBUOC1hGKKS9bNF_OUno1EQKSe07XLwo4VIeR33HAl11aZoWhOoO3NBw9N8IuPwmU_QwC5bfDlt2hiW8nXcjWGe9LuQJ3mohTBKUuYP0IwmDdZomWR0qynwCqPNVo872oYQD3hMfzeJ5QuIsFKGIDYC4gl2Bov6YYkz5jTLRBi3Z5Z0wgdp0wJLFnTTrUmshBPDfigZwiSCJ3aquqe5EdUXigCcUIjYUdrSgsWYZVFDXvhg1ewA"/>
</div>
</td>
<td className="px-4 py-5">
<p className="serif-title text-base font-bold text-luxe-dark">Hand-picked seasonal truffles</p>
<p className="text-xs text-luxe-dark/40 italic">Seasonal special edition</p>
</td>
<td className="px-4 py-5">
<span className="text-sm font-medium text-luxe-dark/60">Main Course</span>
</td>
<td className="px-4 py-5">
<span className="font-bold text-luxe-dark">1,250</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-emerald-600 mr-2"></span> Visible
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* <!-- Row 2 --> */}
<tr className="table-row-hover group">
<td className="px-8 py-5">
<div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm border border-primary/10">
<img className="w-full h-full object-cover" data-alt="Signature floral delicate french pastry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHpda-iE3S1uLG0b8WWtU-18OtfNOfkK0YfLDTKQDkUzX5w7m5ONFxrnb8UPGLp2PS8ImFMJa7nUIWaiOgzoWphsbrwPW2TuigpeJdQZhhKSAK1ExHekmYkqScut-wXB1Oe1EbjStoKkzx3BQd5dVimwLg6pXxu1nrF8AWK2eFeSziLhdFe2a5QvHmvAo3OgLHEL-MfRDc-i73Ix4Qp37O52XMvdeWYvPUexIj7y2rTmM9ldSSTw3Ux-PYetZJ6FafVnQ0aWkK-Y"/>
</div>
</td>
<td className="px-4 py-5">
<p className="serif-title text-base font-bold text-luxe-dark">Signature floral delicate pastry</p>
<p className="text-xs text-luxe-dark/40 italic">Infused with rose essence</p>
</td>
<td className="px-4 py-5">
<span className="text-sm font-medium text-luxe-dark/60">Desserts</span>
</td>
<td className="px-4 py-5">
<span className="font-bold text-luxe-dark">650</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-emerald-600 mr-2"></span> Visible
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* <!-- Row 3 --> */}
<tr className="table-row-hover group">
<td className="px-8 py-5">
<div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm border border-primary/10">
<img className="w-full h-full object-cover" data-alt="Wild caught Mediterranean sea bass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy4Xmk4EAuabBJ6DQQytYGjPd1DHLtI9ydr5FY2gbkPytO3rkZH9vkeZ2XgtfWVRho1jU1RgeJm4VaucY3Nv-PR8FTz9e5hV_bIyw5TgVhLl-urWvkqSZgnBVp5bZu2nji5awP49RpAmxoHLJ8xryWubV6I0e1Ld61LlSajz3AseipyvTHP6U9Ao4z73NveMubcIoi9jDbLLdWydxnFSDJuDXJcVg-gv4Gl_mZRnZXuqgVtPIvsVu-CYR5ccRhZ3Wr7JrEpkq0IZk"/>
</div>
</td>
<td className="px-4 py-5">
<p className="serif-title text-base font-bold text-luxe-dark">Wild Mediterranean bass</p>
<p className="text-xs text-luxe-dark/40 italic">Butter-poached with lemon</p>
</td>
<td className="px-4 py-5">
<span className="text-sm font-medium text-luxe-dark/60">Main Course</span>
</td>
<td className="px-4 py-5">
<span className="font-bold text-luxe-dark">1,850</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-red-500 mr-2"></span> Hidden
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* <!-- Row 4 --> */}
<tr className="table-row-hover group">
<td className="px-8 py-5">
<div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm border border-primary/10">
<img className="w-full h-full object-cover" data-alt="Premium wine bottle 2015 reserve" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFj9qj5I1pOBfYpgfppwjhgeFK1czi5fxjqeIhpb1-rWZZl7NebGOeoIjqMKHzXtQW3jiGpytxHGAnfsqcB3MmxAjD_IV4LiWK4m2O0EhtebVBJrTlU54YTHu5m-Q0auXQuzC5rj71ccT4G19tcLF0vBtpzadcsQSSJqqLSu9XlBw4QZLqPTgLdZWqUQAaL9JzMxd0VA4ZjvEkIuj9TsU6XoIBtDhHgMYa437IS9_28zEBdxAzHOW0X9sD5152taK7nhQIj_xKwtQ"/>
</div>
</td>
<td className="px-4 py-5">
<p className="serif-title text-base font-bold text-luxe-dark">Reserve 2015 Collection</p>
<p className="text-xs text-luxe-dark/40 italic">Limited vintage availability</p>
</td>
<td className="px-4 py-5">
<span className="text-sm font-medium text-luxe-dark/60">Wine List</span>
</td>
<td className="px-4 py-5">
<span className="font-bold text-luxe-dark">4,200</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-emerald-600 mr-2"></span> Visible
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* <!-- Pagination --> */}
<div className="p-8 flex items-center justify-between border-t border-primary/5 bg-primary/[0.01]">
<p className="text-sm text-luxe-dark/40 font-medium">Showing <span className="text-luxe-dark font-bold">1-4</span> of <span className="text-luxe-dark font-bold">32</span> items</p>
<div className="flex items-center gap-1">
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-luxe-dark/40 hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-xl bg-primary text-white font-bold text-sm shadow-md shadow-primary/20">1</button>
<button className="w-10 h-10 rounded-xl text-luxe-dark/60 font-semibold text-sm hover:bg-primary/5 transition-all">2</button>
<button className="w-10 h-10 rounded-xl text-luxe-dark/60 font-semibold text-sm hover:bg-primary/5 transition-all">3</button>
<button className="w-10 h-10 rounded-xl text-luxe-dark/60 font-semibold text-sm hover:bg-primary/5 transition-all">4</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-luxe-dark/40 hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
{/* <!-- Secondary Info Cards --> */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
<div className="bg-white p-6 rounded-2xl shadow-soft border border-primary/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
<span className="material-symbols-outlined font-fill">visibility</span>
</div>
<div>
<p className="text-luxe-dark/40 text-[10px] uppercase font-bold tracking-widest">Active Dishes</p>
<h4 className="text-2xl font-bold text-luxe-dark">28 Items</h4>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-soft border border-primary/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined font-fill">star</span>
</div>
<div>
<p className="text-luxe-dark/40 text-[10px] uppercase font-bold tracking-widest">Top Category</p>
<h4 className="text-2xl font-bold text-luxe-dark">Main Course</h4>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-soft border border-primary/5 flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
<span className="material-symbols-outlined font-fill">trending_up</span>
</div>
<div>
<p className="text-luxe-dark/40 text-[10px] uppercase font-bold tracking-widest">Average Price</p>
<h4 className="text-2xl font-bold text-luxe-dark">?1,420</h4>
</div>
</div>
</div>
</main>
</div>
{/* <!-- Add New Dish Modal Overlay --> */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-luxe-dark/60 backdrop-blur-sm">
    {/* <!-- Modal Container --> */}
    <div className="bg-white w-full max-w-[95%] md:max-w-[90%] lg:max-w-[640px] max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* <!-- Modal Header --> */}
        <div className="px-6 sm:px-8 py-6 border-b border-primary/5 flex items-center justify-between shrink-0">
            <div>
                <h3 className="serif-title text-xl sm:text-2xl font-bold text-luxe-dark">Add New Dish</h3>
                <p className="text-[11px] sm:text-xs text-luxe-dark/40 mt-1">Create a new culinary masterpiece for your menu</p>
            </div>
            <button onclick="window.location.href='menumanage.php'" className="w-8 h-8 rounded-full flex items-center justify-center text-luxe-dark/40 hover:text-primary hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
        </div>
        
        {/* <!-- Modal Body --> */}
        <div className="p-6 sm:p-8 space-y-6 sm:space-y-7 overflow-y-auto">
            {/* <!-- Dish Name --> */}
            <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Dish Name</label>
                <input className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm placeholder:text-luxe-dark/20" placeholder="e.g. Pan-seared Scallops" type="text"/>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
                {/* <!-- Category --> */}
                <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Category</label>
                    <div className="relative">
                        <select className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm appearance-none bg-white">
                            <option>Appetizers</option>
                            <option>Main Course</option>
                            <option>Desserts</option>
                            <option>Wine List</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none text-lg">expand_more</span>
                    </div>
                </div>
                {/* <!-- Price --> */}
                <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Price (?)</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm" placeholder="0.00" type="number"/>
                </div>
            </div>
            
            {/* <!-- Description --> */}
            <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Description</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm resize-none placeholder:text-luxe-dark/20 custom-scrollbar" placeholder="Brief description of the dish..." rows="3"></textarea>
            </div>
            
            {/* <!-- Image Upload Placeholder --> */}
            <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Upload Image</label>
                <div className="border-2 border-dashed border-primary/10 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors text-3xl mb-1">add_a_photo</span>
                    <p className="text-[11px] text-luxe-dark/40 font-medium">Click to upload or drag &amp; drop</p>
                </div>
            </div>
            
            {/* <!-- Visibility Toggle --> */}
            <div className="flex flex-row items-center justify-between p-4 bg-primary/[0.03] rounded-xl border border-primary/5">
                <div>
                    <p className="text-sm font-bold text-luxe-dark">Visibility</p>
                    <p className="text-[10px] sm:text-[11px] text-luxe-dark/40 uppercase tracking-wider mt-0.5">Visible to customers on the menu</p>
                </div>
                <button className="w-11 h-6 rounded-full bg-primary relative transition-colors shrink-0">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300"></div>
                </button>
            </div>
        </div>
        
        {/* <!-- Modal Footer --> */}
        <div className="px-6 sm:px-8 py-5 sm:py-6 bg-primary/[0.02] border-t border-primary/5 flex flex-row items-center justify-end gap-3 sm:gap-4 shrink-0">
            <button onclick="window.location.href='menumanage.php'" type="button" className="px-5 sm:px-6 py-2.5 text-sm font-bold text-luxe-dark/40 hover:text-luxe-dark transition-colors shrink-0">Cancel</button>
            <button type="button" className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 text-sm shrink-0 whitespace-nowrap">
                Save Dish
            </button>
        </div>
    </div>
</div>
    </div>
  );
}

export default Addnewdish;