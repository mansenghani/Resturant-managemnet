import React from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Tableslot = () => {
  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
<div className="flex h-screen overflow-hidden">
{/* <!-- Sidebar Navigation --> */}
<Sidebar />
{/* <!-- Main Content Area --> */}
<main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col bg-background-light dark:bg-background-dark">
{/* <!-- Top Bar --> */}
<header className="py-8 bg-background-light dark:bg-background-dark px-8 flex items-center justify-between z-50">
<div>
<PageHeader breadcrumb="DASHBOARD / TABLE SLOTS" title="Table Slot Settings" />
<p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Manage operational capacity and peak hour designations.</p>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300">
                    Discard Changes
                </button>
<button className="px-8 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                    Save Changes
                </button>
</div>
</header>
{/* <!-- Stats Cards --> */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 hover:shadow-md transition-all group">
<div className="flex justify-between items-start mb-4">
<p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Daily Capacity</p>
<span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">table_restaurant</span>
</div>
<div className="flex items-end gap-2">
<p className="text-3xl font-black text-slate-900 dark:text-white">450</p>
<p className="text-sm text-slate-400 mb-1 font-medium">Tables total</p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 hover:shadow-md transition-all group">
<div className="flex justify-between items-start mb-4">
<p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Active Time Slots</p>
<span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">schedule</span>
</div>
<div className="flex items-end gap-2">
<p className="text-3xl font-black text-slate-900 dark:text-white">14</p>
<p className="text-sm text-slate-400 mb-1 font-medium">Available today</p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 hover:shadow-md transition-all group">
<div className="flex justify-between items-start mb-4">
<p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Peak Hours Configured</p>
<span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">trending_up</span>
</div>
<div className="flex items-end gap-2">
<p className="text-3xl font-black text-slate-900 dark:text-white">4</p>
<p className="text-sm text-slate-400 mb-1 font-medium">Hours total</p>
</div>
</div>
</div>
{/* <!-- Settings Table Section --> */}
<div className="px-8 pb-12">
<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 overflow-hidden">
<div className="overflow-x-auto custom-scrollbar"><table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
<th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-slate-50 dark:bg-slate-800">Time Slot</th>
<th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center bg-slate-50 dark:bg-slate-800">Max Tables</th>
<th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-slate-50 dark:bg-slate-800">Current Bookings</th>
<th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-slate-50 dark:bg-slate-800">Remaining</th>
<th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center bg-slate-50 dark:bg-slate-800">Slot Status</th>
<th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center bg-slate-50 dark:bg-slate-800">Peak Hour</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-white/5">{/* <!-- Row 1 --> */}
<tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group">
<td className="px-6 py-5">
<span className="text-base font-bold text-slate-900 dark:text-white">05:00 PM</span>
</td>
<td className="px-6 py-5 flex justify-center">
<input className="w-20 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm font-bold text-center focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="number" value="30"/>
</td>
<td className="px-6 py-5"><div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">12 Booked</span>
</div>
<span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase">40% Occupied</span>
</div>
<div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-slate-400 dark:bg-slate-500 h-full w-[40%]"></div>
</div>
</div></td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-500/20">
                                    18 Available
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex justify-center items-center h-full">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-300">
<div className="toggle-dot absolute left-1 top-1 bg-white dark:bg-slate-300 w-4 h-4 rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
</td>
<td className="px-6 py-5">
<div className="flex justify-center">
<button className="material-symbols-outlined text-slate-300 dark:text-white/10 hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer" title="Mark as Peak Hour">star</button>
</div>
</td>
</tr>
{/* <!-- Row 2 --> */}
<tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group">
<td className="px-6 py-5">
<span className="text-base font-bold text-slate-900 dark:text-white">06:00 PM</span>
</td>
<td className="px-6 py-5 flex justify-center">
<input className="w-20 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm font-bold text-center focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="number" value="40"/>
</td>
<td className="px-6 py-5"><div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">25 Booked</span>
</div>
<span className="text-[10px] font-extrabold text-primary uppercase">62% Occupied</span>
</div>
<div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[62%]"></div>
</div>
</div></td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                                    15 Available
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex justify-center items-center h-full">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-300">
<div className="toggle-dot absolute left-1 top-1 bg-white dark:bg-slate-300 w-4 h-4 rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
</td>
<td className="px-6 py-5">
<div className="flex justify-center">
<button className="material-symbols-outlined text-primary transform hover:scale-110 transition-transform duration-300" style={{"fontVariationSettings":"'FILL' 1"}} title="Mark as Peak Hour">star</button>
</div>
</td>
</tr>
{/* <!-- Row 3 (Full) --> */}
<tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group">
<td className="px-6 py-5">
<span className="text-base font-bold text-slate-900 dark:text-white">07:00 PM</span>
</td>
<td className="px-6 py-5 flex justify-center">
<input className="w-20 px-3 py-1.5 rounded-lg border border-red-500 bg-red-50 dark:bg-red-500/5 text-red-900 dark:text-red-400 text-sm font-bold text-center focus:ring-2 focus:ring-red-500/20 outline-none transition-all" type="number" value="50"/>
</td>
<td className="px-6 py-5"><div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">48 Booked</span>
</div>
<span className="text-[10px] font-extrabold text-red-600 uppercase">96% Occupied</span>
</div>
<div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[96%]"></div>
</div>
</div></td>
<td className="px-6 py-5"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-500/10 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-500/20">
                                    2 Available
                                </span></td>
<td className="px-6 py-5">
<div className="flex justify-center items-center h-full">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-300">
<div className="toggle-dot absolute left-1 top-1 bg-white dark:bg-slate-300 w-4 h-4 rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
</td>
<td className="px-6 py-5">
<div className="flex justify-center">
<button className="material-symbols-outlined text-primary transform hover:scale-110 transition-transform duration-300" style={{"fontVariationSettings":"'FILL' 1"}} title="Mark as Peak Hour">star</button>
</div>
</td>
</tr>
{/* <!-- Row 4 (Disabled) --> */}
<tr className="bg-slate-50/50 dark:bg-white/[0.02] opacity-75 grayscale transition-colors group hover:bg-slate-100 dark:hover:bg-white/[0.05]">
<td className="px-6 py-5">
<span className="text-base font-bold text-slate-500 dark:text-slate-400">08:00 PM</span>
</td>
<td className="px-6 py-5 flex justify-center">
<input className="w-20 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm font-bold text-center outline-none" disabled="" type="number" value="50"/>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></div>
<span className="text-sm font-medium text-slate-500 dark:text-slate-400">0 Booked</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-white/20">
                                    Disabled
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex justify-center items-center h-full">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-300">
<div className="toggle-dot absolute left-1 top-1 bg-white dark:bg-slate-300 w-4 h-4 rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
</td>
<td className="px-6 py-5">
<div className="flex justify-center">
<button className="material-symbols-outlined text-slate-300 dark:text-white/10 hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer" title="Mark as Peak Hour">star</button>
</div>
</td>
</tr>
{/* <!-- Row 5 --> */}
<tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group">
<td className="px-6 py-5">
<span className="text-base font-bold text-slate-900 dark:text-white">09:00 PM</span>
</td>
<td className="px-6 py-5 flex justify-center">
<input className="w-20 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white text-sm font-bold text-center focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="number" value="45"/>
</td>
<td className="px-6 py-5"><div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">30 Booked</span>
</div>
<span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase">67% Occupied</span>
</div>
<div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-slate-400 dark:bg-slate-500 h-full w-[67%]"></div>
</div>
</div></td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-500/20">
                                    15 Available
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex justify-center items-center h-full">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-300">
<div className="toggle-dot absolute left-1 top-1 bg-white dark:bg-slate-300 w-4 h-4 rounded-full transition-transform duration-300"></div>
</div>
</label>
</div>
</td>
<td className="px-6 py-5">
<div className="flex justify-center">
<button className="material-symbols-outlined text-slate-300 dark:text-white/10 hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer" title="Mark as Peak Hour">star</button>
</div>
</td>
</tr></tbody>
</table></div>
<div className="p-6 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
<p className="text-sm text-slate-500 dark:text-slate-400 font-medium italic">Showing operational hours for Today, October 24th.</p>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center gap-2 duration-300">
<span className="material-symbols-outlined text-sm">history</span> Reset Defaults
                        </button>
<button className="px-4 py-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center gap-2 duration-300">
<span className="material-symbols-outlined text-sm">add</span> Add New Slot
                        </button>
</div>
</div>
</div>
{/* <!-- Bulk Actions Banner --> */}
<div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 shadow-sm">
<div className="flex gap-4 items-center">
<div className="size-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">bolt</span>
</div>
<div>
<h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight">Bulk Capacity Update</h4>
<p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Quickly adjust max tables across all active slots for special events.</p>
</div>
</div>
<div className="flex items-center gap-3">
<input className="w-24 px-4 py-2 rounded-xl border border-primary/30 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" placeholder="Value" type="number"/>
<button className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all duration-300">
                        Apply to All
                    </button>
</div>
</div>
</div>
{/* <!-- Footer --> */}
<footer className="mt-auto p-8 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-medium">
<p>© 2024 LUXE Restaurant Management. Rose Edition v2.4.0</p>
<div className="flex gap-4">
<a className="hover:text-primary transition-colors" href="#">Documentation</a>
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Support Ticket</a>
</div>
</footer>
</main>
</div>
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm hidden" id="disable-modal">
<div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-white/10">
<div className="size-14 rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 flex items-center justify-center mb-6 mx-auto">
<span className="material-symbols-outlined text-3xl">warning</span>
</div>
<h3 className="text-xl font-black text-slate-900 dark:text-white text-center mb-2">Disable Time Slot?</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-8">Existing reservations for this slot will not be cancelled, but no new bookings will be allowed.</p>
<div className="flex gap-3">
<button className="flex-1 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-white/5 duration-300">Cancel</button>
<button className="flex-1 px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 shadow-lg shadow-red-600/20 duration-300">Confirm</button>
</div>
</div>
</div>{/* <!-- Success Toast --> */}
<div className="fixed bottom-8 right-8 z-[110] flex items-center gap-4 px-5 py-4 bg-white dark:bg-slate-900 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-white/5 animate-in slide-in-from-right-10 duration-300">
<div className="size-10 rounded-full bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl font-bold">check</span>
</div>
<div className="pr-4">
<h5 className="text-sm font-bold text-slate-900 dark:text-white">Success</h5>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Slot successfully disabled</p>
</div>
<button className="p-1 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg text-slate-400 dark:text-slate-600 transition-colors duration-300" onclick="this.parentElement.remove()">
<span className="material-symbols-outlined text-xl">close</span>
</button>
<div className="absolute bottom-0 left-0 h-1 rounded-b-2xl w-full bg-primary"></div>
</div>
    </div>
  );
}

export default Tableslot;