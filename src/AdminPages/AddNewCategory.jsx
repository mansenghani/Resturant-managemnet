import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const AddNewCategory = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- BEGIN: Dashboard Layout Container (Dimmed Background) --> */}
<div className="flex h-screen w-full filter blur-sm pointer-events-none select-none">
{/* <!-- BEGIN: Sidebar --> */}
<Sidebar />
{/* <!-- END: Sidebar --> */}
{/* <!-- BEGIN: Main Dashboard Content --> */}
<main className="flex-1 p-12 overflow-y-auto">
<div className="flex justify-between items-start mb-10">
<div>
<h2 className="text-4xl serif-title font-semibold mb-2">Menu Management</h2>
<p className="text-gray-500">Manage dishes, categories, pricing and visibility.</p>
</div>
<button className="bg-luxe-rose text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg shadow-luxe-rose/20">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          Add New Dish
        </button>
</div>
{/* <!-- Filters Placeholder --> */}
<div className="flex gap-4 mb-8 overflow-x-auto pb-2">
<span className="px-6 py-2 bg-white text-luxe-rose border border-luxe-rose/20 rounded-full font-medium whitespace-nowrap">All Dishes</span>
<span className="px-6 py-2 text-gray-400 font-medium whitespace-nowrap">Appetizers</span>
<span className="px-6 py-2 text-gray-400 font-medium whitespace-nowrap">Main Course</span>
<span className="px-6 py-2 text-gray-400 font-medium whitespace-nowrap">Desserts</span>
</div>
{/* <!-- Table Container --> */}
<div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 min-h-[500px]">
{/* <!-- Table structure placeholder matching original screenshot --> */}
</div>
</main>
{/* <!-- END: Main Dashboard Content --> */}
</div>
{/* <!-- END: Dashboard Layout Container --> */}
{/* <!-- BEGIN: Modal Overlay --> */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]" data-purpose="modal-overlay">
{/* <!-- BEGIN: Add New Category Modal --> */}
<div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-0 overflow-hidden transform transition-all" data-purpose="category-modal">
{/* <!-- Modal Header --> */}
<div className="px-8 pt-8 pb-4">
<h3 className="text-2xl serif-title font-bold text-luxe-charcoal">Add New Category</h3>
<p className="text-sm text-gray-400 mt-1">Organize your menu with logical groupings.</p>
</div>
{/* <!-- Modal Body (Form) --> */}
<form className="px-8 py-4 space-y-6">
{/* <!-- Category Name Field --> */}
<div className="space-y-1.5" data-purpose="form-group">
<label className="block text-xs font-semibold uppercase tracking-wider text-luxe-charcoal/70" htmlFor="category-name">Category Name</label>
<input className="w-full px-4 py-3 bg-luxe-bg-muted border-none rounded-xl focus:ring-1 focus:ring-luxe-rose placeholder:text-gray-300 transition-all" id="category-name" name="category-name" placeholder="e.g. Signature Cocktails" type="text"/>
</div>
{/* <!-- Category Slug Field --> */}
<div className="space-y-1.5" data-purpose="form-group">
<label className="block text-xs font-semibold uppercase tracking-wider text-luxe-charcoal/70" htmlFor="category-slug">Category Slug</label>
<input className="w-full px-4 py-3 bg-luxe-bg-muted border-none rounded-xl focus:ring-1 focus:ring-luxe-rose placeholder:text-gray-300 transition-all" id="category-slug" name="category-slug" placeholder="e.g. signature-cocktails" type="text"/>
</div>
{/* <!-- Row: Display Order & Status --> */}

{/* <!-- Modal Footer Actions --> */}
<div className="flex items-center justify-end gap-4 pt-6 pb-4">
<button onclick="window.location.href='menumanage.php'" className="px-6 py-3 border border-luxe-rose text-luxe-rose font-medium rounded-xl hover:bg-luxe-rose-light transition-colors" type="button">
            Cancel
          </button>
<button className="px-8 py-3 bg-luxe-rose text-white font-medium rounded-xl shadow-lg shadow-luxe-rose/20 hover:bg-[#a65d68] transition-colors" type="submit">
            Save Category
          </button>
</div>
</form>
</div>
{/* <!-- END: Add New Category Modal --> */}
</div>
{/* <!-- END: Modal Overlay --> */}

    </div>
  );
}

export default AddNewCategory;