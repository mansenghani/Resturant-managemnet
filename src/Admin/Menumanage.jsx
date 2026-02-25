import React from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Menumanage = () => {
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
<PageHeader breadcrumb="DASHBOARD / MENU" title="Menu Management" />
<p className="text-luxe-dark/50 text-base mt-2">Manage dishes, categories, pricing and visibility.</p>
</div>
<button onclick="window.location.href='addnewdish.php'" className="flex items-center gap-2 bg-primary hover:bg-[#b56b6b] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
<span className="material-symbols-outlined">add</span>
<span>Add New Dish</span>
</button>
</header>
{/* <!-- Filters --> */}
<div className="bg-white/40 p-4 rounded-2xl border border-primary/5 mb-8">
<div className="flex flex-col lg:flex-row gap-4">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 text-xl">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-white border border-primary/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm text-luxe-dark placeholder:text-luxe-dark/30 transition-all" placeholder="Search dish name, ingredients..." type="text"/>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-6 py-3 bg-white border border-primary/10 rounded-xl text-sm font-medium text-luxe-dark/70 hover:border-primary/30 transition-all">
<span>All Status</span>
<span className="material-symbols-outlined text-primary/40 text-lg">expand_more</span>
</button>
<button className="flex items-center gap-2 px-6 py-3 bg-white border border-primary/10 rounded-xl text-sm font-medium text-luxe-dark/70 hover:border-primary/30 transition-all">
<span>Sort by Price</span>
<span className="material-symbols-outlined text-primary/40 text-lg">swap_vert</span>
</button>
</div>
</div>
</div>
{/* <!-- Content Card --> */}
<div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
<button onclick="filterCategory('All Items', this)" className="category-btn active px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 transition-all whitespace-nowrap">All Items</button>
<button onclick="filterCategory('Appetizers', this)" className="category-btn px-6 py-2.5 rounded-full bg-white border border-primary/10 text-luxe-dark/60 text-sm font-semibold hover:border-primary/30 transition-all whitespace-nowrap">Appetizers</button>
<button onclick="filterCategory('Main Course', this)" className="category-btn px-6 py-2.5 rounded-full bg-white border border-primary/10 text-luxe-dark/60 text-sm font-semibold hover:border-primary/30 transition-all whitespace-nowrap">Main Course</button>
<button onclick="filterCategory('Desserts', this)" className="category-btn px-6 py-2.5 rounded-full bg-white border border-primary/10 text-luxe-dark/60 text-sm font-semibold hover:border-primary/30 transition-all whitespace-nowrap">Desserts</button>
<button onclick="filterCategory('Wine List', this)" className="category-btn px-6 py-2.5 rounded-full bg-white border border-primary/10 text-luxe-dark/60 text-sm font-semibold hover:border-primary/30 transition-all whitespace-nowrap">Wine List</button>
<button onclick="filterCategory('Chef\'s Specials', this)" className="category-btn px-6 py-2.5 rounded-full bg-white border border-primary/10 text-luxe-dark/60 text-sm font-semibold hover:border-primary/30 transition-all whitespace-nowrap">Chef's Specials</button>
<button onclick="window.location.href='addNewCategory.php'" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fcf9f7] border border-dashed border-primary/40 text-primary text-sm font-bold hover:bg-primary/5 transition-all whitespace-nowrap">
<span className="material-symbols-outlined text-lg">add</span>
<span>Add Category</span>
</button>
</div><div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-primary/5 shadow-xl shadow-primary/5 border-white">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-primary/[0.02] text-luxe-dark/50 uppercase text-[10px] tracking-[0.15em] font-bold border-b border-primary/5">
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
<tr className="table-row-hover group menu-row" data-category="Main Course">
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
<span className="font-bold text-luxe-dark">?1,250</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-emerald-600 mr-2"></span> Visible
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button onclick="openEditModal(this)" className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* <!-- Row 2 --> */}
<tr className="table-row-hover group menu-row" data-category="Desserts">
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
<span className="font-bold text-luxe-dark">?650</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-emerald-600 mr-2"></span> Visible
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button onclick="openEditModal(this)" className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* <!-- Row 3 --> */}
<tr className="table-row-hover group menu-row" data-category="Main Course">
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
<span className="font-bold text-luxe-dark">?1,850</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-red-500 mr-2"></span> Hidden
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button onclick="openEditModal(this)" className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="w-9 h-9 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-red-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* <!-- Row 4 --> */}
<tr className="table-row-hover group menu-row" data-category="Wine List">
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
<span className="font-bold text-luxe-dark">?4,200</span>
</td>
<td className="px-4 py-5">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
<span className="w-1 h-1 rounded-full bg-emerald-600 mr-2"></span> Visible
                                </span>
</td>
<td className="px-8 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button onclick="openEditModal(this)" className="w-9 h-9 rounded-xl bg-[#fcf9f7] text-luxe-dark/60 hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-primary/5">
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
<script>
function filterCategory(category, btn) {
    const buttons = document.querySelectorAll('.category-btn');
    const activeClasses = ['bg-primary', 'text-white', 'font-bold', 'shadow-md', 'shadow-primary/20'];
    const inactiveClasses = ['bg-white', 'border', 'border-primary/10', 'text-luxe-dark/60', 'font-semibold', 'hover:border-primary/30'];

    // Reset all buttons to inactive state
    buttons.forEach(b => {
        b.classList.remove('active', ...activeClasses);
        b.classList.add(...inactiveClasses);
    });

    // Set clicked button to active
    btn.classList.remove(...inactiveClasses);
    btn.classList.add('active', ...activeClasses);

    // Filter rows
    const rows = document.querySelectorAll('.menu-row');
    rows.forEach(row => {
        if (category === 'All Items' || row.getAttribute('data-category') === category) {
            row.style.display = '';
            // Smooth fade in
            row.style.opacity = '0';
            setTimeout(() => {
                row.style.transition = 'opacity 0.3s ease';
                row.style.opacity = '1';
            }, 10);
        } else {
            row.style.display = 'none';
        }
    });
}
</script>

{/* <!-- Edit Dish Modal --> */}
<div id="editDishModal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxe-dark/60 backdrop-blur-sm hidden">
    {/* <!-- Modal Container --> */}
    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* <!-- Modal Header --> */}
        <div className="px-8 py-6 border-b border-primary/5 flex items-center justify-between">
            <div>
                <h3 className="serif-title text-2xl font-bold text-luxe-dark">Edit Dish</h3>
                <p className="text-xs text-luxe-dark/40">Update dish details</p>
            </div>
            <button onclick="closeEditModal()" type="button" className="text-luxe-dark/40 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>
        
        {/* <!-- Modal Body --> */}
        <div className="p-8 space-y-6">
            {/* <!-- Dish Name --> */}
            <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Dish Name</label>
                <input id="editName" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm" type="text" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {/* <!-- Category --> */}
                <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Category</label>
                    <select id="editCategory" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm appearance-none bg-white">
                        <option>Appetizers</option>
                        <option>Main Course</option>
                        <option>Desserts</option>
                        <option>Wine List</option>
                        <option>Chef's Specials</option>
                    </select>
                </div>
                {/* <!-- Price --> */}
                <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Price (?)</label>
                    <input id="editPrice" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm" type="text" />
                </div>
            </div>
            
            {/* <!-- Description --> */}
            <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Description</label>
                <textarea id="editDesc" className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none text-sm resize-none" rows="2"></textarea>
            </div>
            
            {/* <!-- Dish Image --> */}
            <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-luxe-dark/40 font-bold ml-1">Dish Image</label>
                
                {/* <!-- Image Preview Area --> */}
                <div id="editImagePreviewContainer" className="relative w-full h-32 rounded-xl overflow-hidden border border-primary/10 group mb-2">
                    <img id="editImagePreview" className="w-full h-full object-cover" src="" alt="Dish Preview" />
                    {/* <!-- Overlay for actions --> */}
                    <div className="absolute inset-0 bg-luxe-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onclick="removeEditImage()" type="button" className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-xl shadow-lg transition-colors flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>

                {/* <!-- Upload Area (Hidden when image exists) --> */}
                <div id="editImageUploadContainer" className="border-2 border-dashed border-primary/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors cursor-pointer group relative hidden">
                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">add_a_photo</span>
                    <p className="text-[11px] text-luxe-dark/40">Click to upload or drag &amp; drop</p>
                    <input type="file" id="editImageInput" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" onchange="handleImageUpload(event)" />
                </div>
            </div>
        </div>
        
        {/* <!-- Modal Footer --> */}
        <div className="px-8 py-6 bg-primary/[0.02] border-t border-primary/5 flex items-center justify-end gap-3">
            <button onclick="closeEditModal()" type="button" className="px-6 py-2.5 text-sm font-bold text-luxe-dark/40 hover:text-luxe-dark transition-colors">Cancel</button>
            <button onclick="saveEditModal()" type="button" className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all duration-300 text-sm">
                Save Changes
            </button>
        </div>
    </div>
</div>

<script>
let currentEditRow = null;

function openEditModal(btn) {
    currentEditRow = btn.closest('tr');
    
    const name = currentEditRow.querySelector('td:nth-child(2) .serif-title').innerText;
    const desc = currentEditRow.querySelector('td:nth-child(2) .text-xs').innerText;
    const category = currentEditRow.querySelector('td:nth-child(3) span').innerText;
    let priceText = currentEditRow.querySelector('td:nth-child(4) span').innerText;
    
    document.getElementById('editName').value = name.trim();
    document.getElementById('editDesc').value = desc.trim();
    document.getElementById('editCategory').value = category.trim();
    document.getElementById('editPrice').value = priceText.replace(/[^0-9.,]/g, '').trim();

    const imageSrc = currentEditRow.querySelector('td:nth-child(1) img').src;
    document.getElementById('editImagePreview').src = imageSrc;
    document.getElementById('editImagePreviewContainer').classList.remove('hidden');
    document.getElementById('editImageUploadContainer').classList.add('hidden');

    document.getElementById('editDishModal').classList.remove('hidden');
}

function removeEditImage() {
    document.getElementById('editImagePreview').src = '';
    document.getElementById('editImagePreviewContainer').classList.add('hidden');
    document.getElementById('editImageUploadContainer').classList.remove('hidden');
    document.getElementById('editImageInput').value = '';
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('editImagePreview').src = e.target.result;
            document.getElementById('editImagePreviewContainer').classList.remove('hidden');
            document.getElementById('editImageUploadContainer').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function closeEditModal() {
    document.getElementById('editDishModal').classList.add('hidden');
    currentEditRow = null;
}

function saveEditModal() {
    if (!currentEditRow) return;
    
    const name = document.getElementById('editName').value;
    const desc = document.getElementById('editDesc').value;
    const category = document.getElementById('editCategory').value;
    const price = document.getElementById('editPrice').value;
    
    const previewContainer = document.getElementById('editImagePreviewContainer');
    if (!previewContainer.classList.contains('hidden')) {
        const imageSrc = document.getElementById('editImagePreview').src;
        currentEditRow.querySelector('td:nth-child(1) img').src = imageSrc;
    } else {
        currentEditRow.querySelector('td:nth-child(1) img').src = "https://placehold.co/150x150?text=No+Image";
    }

    currentEditRow.querySelector('td:nth-child(2) .serif-title').innerText = name;
    currentEditRow.querySelector('td:nth-child(2) .text-xs').innerText = desc;
    currentEditRow.querySelector('td:nth-child(3) span').innerText = category;
    currentEditRow.setAttribute('data-category', category);
    
    currentEditRow.querySelector('td:nth-child(4) span').innerText = '?' + price;
    
    closeEditModal();
    
    // Trigger category filter to update view if necessary
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    if (activeCategoryBtn) {
        filterCategory(activeCategoryBtn.innerText.trim(), activeCategoryBtn);
    }
}
</script>

    </div>
  );
}

export default Menumanage;