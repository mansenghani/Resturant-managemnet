import React from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const PrintRopart = () => {
  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- BEGIN: Blurred Background Dashboard --> */}
<div className="absolute inset-0 z-0 dashboard-backdrop flex overflow-hidden">
{/* <!-- Sidebar --> */}
<aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
<div className="mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-luxe-rose rounded-full flex items-center justify-center text-white">Ψ</div>
<div>
<h1 className="font-bold text-lg leading-none">LUXE</h1>
<p className="text-[10px] uppercase tracking-widest text-luxe-rose">Management</p>
</div>
</div>
<nav className="space-y-4 opacity-50">
<div className="flex items-center gap-3 p-2 rounded text-gray-500"><span className="w-5 h-5 bg-gray-200"></span> Dashboard</div>
<div className="flex items-center gap-3 p-2 rounded text-gray-500"><span className="w-5 h-5 bg-gray-200"></span> Reservations</div>
<div className="flex items-center gap-3 p-2 rounded bg-luxe-rose/10 text-luxe-rose font-medium border-r-4 border-luxe-rose"><span className="w-5 h-5 bg-luxe-rose"></span> Reports</div>
</nav>
</aside>
{/* <!-- Main Area Mock --> */}
<main className="flex-1 p-10 bg-luxe-ivory">
<header className="mb-8">
<h2 className="text-4xl serif-heading text-luxe-charcoal">Report Generation</h2>
</header>
<div className="grid grid-cols-3 gap-6">
<div className="h-48 bg-white rounded-xl"></div>
<div className="h-48 bg-white rounded-xl"></div>
<div className="h-48 bg-white rounded-xl"></div>
</div>
</main>
</div>
{/* <!-- END: Blurred Background Dashboard --> */}
{/* <!-- BEGIN: Modal Overlay --> */}
<div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
{/* <!-- BEGIN: Print Preview Dialog --> */}
<div className="bg-white w-[1100px] h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300" data-purpose="print-preview-dialog" id="print-modal">
{/* <!-- Modal Content Area --> */}
<div className="flex flex-1 overflow-hidden">
{/* <!-- BEGIN: Left Side (Preview) --> */}
<section className="flex-1 bg-gray-100 flex justify-center overflow-y-auto p-12 custom-scrollbar border-r border-gray-200" data-purpose="document-preview">
{/* <!-- The "Paper" --> */}
<article className="bg-white w-[210mm] min-h-[297mm] p-16 paper-shadow flex flex-col transform origin-top scale-95">
{/* <!-- Paper Header --> */}
<div className="flex justify-between items-start border-b-2 border-luxe-rose pb-8 mb-10">
<div>
<h3 className="serif-heading text-3xl text-luxe-charcoal mb-1">Monthly Reservation Report</h3>
<p className="text-sm text-gray-500 uppercase tracking-wide">Period: October 2023</p>
</div>
<div className="text-right">
<p className="text-xs font-bold text-luxe-rose">LUXE RESTAURANT GROUP</p>
<p className="text-[10px] text-gray-400">Generated on: Oct 24, 2023 11:15 AM</p>
</div>
</div>
{/* <!-- Paper Content (Stats) --> */}
<div className="grid grid-cols-3 gap-8 mb-12">
<div className="border-l-2 border-luxe-rose/30 pl-4">
<p className="text-[10px] text-gray-400 uppercase font-semibold">Total Bookings</p>
<p className="text-2xl font-serif text-luxe-charcoal">1,248</p>
</div>
<div className="border-l-2 border-luxe-rose/30 pl-4">
<p className="text-[10px] text-gray-400 uppercase font-semibold">Growth Trend</p>
<p className="text-2xl font-serif text-green-600">+12%</p>
</div>
<div className="border-l-2 border-luxe-rose/30 pl-4">
<p className="text-[10px] text-gray-400 uppercase font-semibold">Occupancy</p>
<p className="text-2xl font-serif text-luxe-charcoal">88%</p>
</div>
</div>
{/* <!-- Paper Content (Mock Chart) --> */}
<div className="mb-12">
<p className="text-xs font-bold text-gray-700 uppercase mb-4">Weekly Booking Velocity</p>
<div className="h-48 w-full bg-gray-50 flex items-end justify-between px-10 pb-4 border rounded-lg">
<div className="w-12 bg-luxe-rose/40 h-24 rounded-t"></div>
<div className="w-12 bg-luxe-rose/60 h-32 rounded-t"></div>
<div className="w-12 bg-luxe-rose/80 h-40 rounded-t"></div>
<div className="w-12 bg-luxe-rose h-44 rounded-t"></div>
</div>
</div>
{/* <!-- Paper Content (Table) --> */}
<div className="flex-1">
<p className="text-xs font-bold text-gray-700 uppercase mb-4">Top Performance Metrics</p>
<table className="w-full text-left text-sm border-collapse">
<thead>
<tr className="border-b border-gray-100 text-[11px] text-gray-400 uppercase">
<th className="py-3 font-medium">Metric Category</th>
<th className="py-3 font-medium text-right">Current</th>
<th className="py-3 font-medium text-right">Target</th>
</tr>
</thead>
<tbody className="text-gray-600">
<tr className="border-b border-gray-50">
<td className="py-4">Weekend Dinner Rush</td>
<td className="py-4 text-right">98.2%</td>
<td className="py-4 text-right">95.0%</td>
</tr>
<tr className="border-b border-gray-50">
<td className="py-4">No-Show Rate</td>
<td className="py-4 text-right text-red-500">4.1%</td>
<td className="py-4 text-right">2.0%</td>
</tr>
<tr className="border-b border-gray-50">
<td className="py-4">VIP Retention</td>
<td className="py-4 text-right">76.0%</td>
<td className="py-4 text-right">70.0%</td>
</tr>
</tbody>
</table>
</div>
{/* <!-- Paper Footer --> */}
<div className="mt-auto pt-10 border-t border-gray-100 text-center">
<p className="text-[9px] text-gray-400 uppercase tracking-widest">Confidential Internal Document - Luxe Restaurant Management Systems</p>
<p className="text-[9px] text-gray-300 mt-1">Page 1 of 3</p>
</div>
</article>
</section>
{/* <!-- END: Left Side (Preview) --> */}
{/* <!-- BEGIN: Right Side (Settings) --> */}
<aside className="w-[320px] p-8 flex flex-col bg-white" data-purpose="print-settings">
<h4 className="text-xl serif-heading text-luxe-charcoal mb-8 pb-4 border-b">Print Settings</h4>
<div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
{/* <!-- Destination --> */}
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Destination</label>
<select className="w-full border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>Save as PDF</option>
<option>Luxe Office Printer (HP-M404)</option>
<option>Kitchen Receipt Printer</option>
</select>
</div>
{/* <!-- Pages --> */}
<div className="space-y-3">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Pages</label>
<div className="space-y-2">
<label className="flex items-center text-sm text-gray-700 cursor-pointer">
<input checked="" className="text-luxe-rose focus:ring-luxe-rose mr-3" name="pages" type="radio"/>
                  All (3 pages)
                </label>
<label className="flex items-center text-sm text-gray-700 cursor-pointer">
<input className="text-luxe-rose focus:ring-luxe-rose mr-3" name="pages" type="radio"/>
                  Custom
                </label>
<input className="w-full border-gray-200 rounded-lg text-sm mt-1 focus:ring-luxe-rose focus:border-luxe-rose placeholder:text-gray-300" placeholder="e.g. 1-2" type="text"/>
</div>
</div>
{/* <!-- Copies --> */}
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Copies</label>
<input className="w-24 border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose" min="1" type="number" value="1"/>
</div>
{/* <!-- Layout --> */}
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Layout</label>
<select className="w-full border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>Portrait</option>
<option>Landscape</option>
</select>
</div>
{/* <!-- Color --> */}
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Color</label>
<select className="w-full border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>Color</option>
<option>Black &amp; White</option>
</select>
</div>
{/* <!-- More Settings Toggle (Visual Only) --> */}
<button className="text-luxe-rose text-sm font-medium hover:underline flex items-center gap-1">
              More settings
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</button>
</div>
</aside>
{/* <!-- END: Right Side (Settings) --> */}
</div>
{/* <!-- BEGIN: Footer Actions --> */}
<footer className="p-6 bg-gray-50 border-t flex justify-end items-center gap-4" data-purpose="modal-footer">
<button onclick="window.location.href='reportgenrate.php'" className="px-8 py-2.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          Cancel
        </button>
<button className="px-10 py-2.5 rounded-full text-sm font-semibold bg-luxe-rose text-white hover:bg-luxe-roseDark shadow-lg shadow-luxe-rose/20 transition-all flex items-center gap-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
          Print Report
        </button>
</footer>
{/* <!-- END: Footer Actions --> */}
</div>
{/* <!-- END: Print Preview Dialog --> */}
</div>
{/* <!-- END: Modal Overlay --> */}
<script data-purpose="ui-interactivity">

    // Handle dummy print button
    document.querySelector('button.bg-luxe-rose').addEventListener('click', () => {
       const btn = document.querySelector('button.bg-luxe-rose');
       btn.innerHTML = 'Preparing...';
       btn.classList.add('opacity-70', 'cursor-not-allowed');
       setTimeout(() => {
          btn.innerHTML = 'Printed!';
          setTimeout(() => {
             location.reload();
          }, 1000);
       }, 2000);
    });
  </script>

    </div>
  );
}

export default PrintRopart;