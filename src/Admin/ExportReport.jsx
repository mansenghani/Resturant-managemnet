import React from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const ExportReport = () => {
  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
<Sidebar />
{/* <!-- BEGIN: Export Modal Container --> */}
<main className="bg-luxe-ivory w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] max-h-[850px]" data-purpose="export-modal">
{/* <!-- BEGIN: Left Side - PDF Preview --> */}
<section className="flex-1 bg-stone-100 p-8 overflow-y-auto scrollbar-hide border-r border-luxe-border flex flex-col items-center" data-purpose="preview-area">
<div className="mb-4 w-full max-w-[595px] flex justify-between items-center px-1">
<span className="text-xs uppercase tracking-widest text-luxe-muted font-semibold">Document Preview</span>
<span className="text-xs text-luxe-muted italic">Scale: 75%</span>
</div>
{/* <!-- BEGIN: The "PDF" Paper --> */}
<div className="bg-white w-full max-w-[595px] min-h-[842px] paper-shadow p-12 flex flex-col" id="pdf-document">
{/* <!-- Header Section --> */}
<header className="flex justify-between items-start border-b border-stone-100 pb-8 mb-8">
<div>
<div className="text-2xl font-bold tracking-tighter luxe-charcoal serif-text mb-1">LUXE</div>
<p className="text-[10px] text-luxe-muted uppercase tracking-widest">Fine Dining Excellence</p>
</div>
<div className="text-right">
<h1 className="text-xl font-bold text-luxe-charcoal serif-text">Monthly Reservation Report</h1>
<p className="text-xs text-luxe-muted mt-1">Generated: October 31, 2023</p>
</div>
</header>
{/* <!-- Metrics Summary --> */}
<div className="grid grid-cols-3 gap-4 mb-10">
<div className="bg-luxe-ivory p-4 rounded border border-luxe-border/50">
<p className="text-[10px] uppercase text-luxe-muted mb-1">Total Revenue</p>
<p className="text-lg font-semibold text-luxe-charcoal serif-text">$142,500.00</p>
</div>
<div className="bg-luxe-ivory p-4 rounded border border-luxe-border/50">
<p className="text-[10px] uppercase text-luxe-muted mb-1">Total Bookings</p>
<p className="text-lg font-semibold text-luxe-charcoal serif-text">1,284</p>
</div>
<div className="bg-luxe-ivory p-4 rounded border border-luxe-border/50">
<p className="text-[10px] uppercase text-luxe-muted mb-1">Avg. Ticket</p>
<p className="text-lg font-semibold text-luxe-charcoal serif-text">$110.98</p>
</div>
</div>
{/* <!-- Trend Chart Placeholder --> */}
<div className="mb-10">
<h3 className="text-xs font-semibold uppercase text-luxe-charcoal mb-4 tracking-wider">Revenue Trend</h3>
<div className="w-full h-32 flex items-end justify-between px-2 border-b border-luxe-border pt-4">
{/* <!-- Simulated Line Chart --> */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 100">
<path d="M0,80 Q50,70 100,40 T200,50 T300,20 T400,30 T500,10" fill="none" stroke="#B76E79" strokeWidth="2" />
<circle cx="100" cy="40" fill="#B76E79" r="3"></circle>
<circle cx="300" cy="20" fill="#B76E79" r="3"></circle>
<circle cx="500" cy="10" fill="#B76E79" r="3"></circle>
</svg>
</div>
<div className="flex justify-between mt-2 text-[9px] text-luxe-muted font-medium uppercase">
<span>Oct 01</span><span>Oct 08</span><span>Oct 15</span><span>Oct 22</span><span>Oct 31</span>
</div>
</div>
{/* <!-- Data Table --> */}
<div className="flex-grow">
<h3 className="text-xs font-semibold uppercase text-luxe-charcoal mb-4 tracking-wider">Top Performing Dates</h3>
<table className="w-full text-left text-[11px]">
<thead>
<tr className="border-b border-luxe-border text-luxe-muted uppercase tracking-tighter">
<th className="py-2 font-medium">Date</th>
<th className="py-2 font-medium">Reservations</th>
<th className="py-2 font-medium">Capacity</th>
<th className="py-2 font-medium text-right">Net Sales</th>
</tr>
</thead>
<tbody className="text-luxe-charcoal">
<tr className="border-b border-stone-50">
<td className="py-3">Oct 28, 2023 (Sat)</td>
<td className="py-3">142</td>
<td className="py-3">98%</td>
<td className="py-3 text-right">$14,230</td>
</tr>
<tr className="border-b border-stone-50">
<td className="py-3">Oct 21, 2023 (Sat)</td>
<td className="py-3">138</td>
<td className="py-3">95%</td>
<td className="py-3 text-right">$13,890</td>
</tr>
<tr className="border-b border-stone-50">
<td className="py-3">Oct 27, 2023 (Fri)</td>
<td className="py-3">124</td>
<td className="py-3">89%</td>
<td className="py-3 text-right">$11,400</td>
</tr>
<tr className="border-b border-stone-50">
<td className="py-3">Oct 14, 2023 (Sat)</td>
<td className="py-3">131</td>
<td className="py-3">91%</td>
<td className="py-3 text-right">$12,100</td>
</tr>
</tbody>
</table>
</div>
{/* <!-- Footer --> */}
<footer className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center text-[9px] text-luxe-muted italic">
<span>Confidentially prepared for LUXE Admin</span>
<span>Page 1 of 12</span>
</footer>
</div>
{/* <!-- END: The "PDF" Paper --> */}
</section>
{/* <!-- END: Left Side --> */}
{/* <!-- BEGIN: Right Side - Export Settings --> */}
<aside className="w-full md:w-80 lg:w-96 bg-luxe-ivory p-8 flex flex-col" data-purpose="settings-panel">
<div className="mb-8">
<h2 className="text-2xl font-bold text-luxe-charcoal serif-text">Export Settings</h2>
<p className="text-sm text-luxe-muted mt-1">Configure your document output</p>
</div>
<div className="flex-grow space-y-6 overflow-y-auto scrollbar-hide pr-2">
{/* <!-- File Name Input --> */}
<div data-purpose="setting-field">
<label className="block text-xs font-semibold text-luxe-charcoal uppercase tracking-wider mb-2" htmlFor="file-name">File Name</label>
<input className="w-full bg-white border-luxe-border rounded-md text-sm focus:ring-luxe-rose focus:border-luxe-rose" id="file-name" type="text" value="LUXE_Monthly_Report_Oct23"/>
</div>
{/* <!-- Format Selection --> */}
<div data-purpose="setting-field">
<label className="block text-xs font-semibold text-luxe-charcoal uppercase tracking-wider mb-2">File Format</label>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 px-3 text-xs font-medium rounded border border-luxe-rose bg-luxe-rose text-white">PDF</button>
<button className="py-2 px-3 text-xs font-medium rounded border border-luxe-border bg-white text-luxe-charcoal hover:bg-stone-50">Excel</button>
<button className="py-2 px-3 text-xs font-medium rounded border border-luxe-border bg-white text-luxe-charcoal hover:bg-stone-50">CSV</button>
</div>
</div>
{/* <!-- Page Range --> */}
<div data-purpose="setting-field">
<label className="block text-xs font-semibold text-luxe-charcoal uppercase tracking-wider mb-2">Page Range</label>
<select className="w-full bg-white border-luxe-border rounded-md text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>All Pages (12)</option>
<option>Current Page Only</option>
<option>Custom Range...</option>
</select>
</div>
{/* <!-- Toggles Section --> */}
<div className="pt-4 border-t border-luxe-border space-y-4" data-purpose="toggles">
{/* <!-- Charts Toggle --> */}
<div className="flex items-center justify-between">
<span className="text-sm text-luxe-charcoal font-medium">Include Charts</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxe-rose"></div>
</label>
</div>
{/* <!-- Summary Tables Toggle --> */}
<div className="flex items-center justify-between">
<span className="text-sm text-luxe-charcoal font-medium">Summary Tables</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxe-rose"></div>
</label>
</div>
{/* <!-- Detailed Logs Toggle --> */}
<div className="flex items-center justify-between">
<span className="text-sm text-luxe-charcoal font-medium">Detailed Logs</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxe-rose"></div>
</label>
</div>
</div>
</div>
{/* <!-- Action Buttons --> */}
<div className="mt-8 space-y-3 pt-6 border-t border-luxe-border" data-purpose="actions">
<button className="w-full bg-luxe-rose text-white py-3 rounded-md font-semibold text-sm hover:bg-luxe-roseHover transition-colors shadow-lg shadow-luxe-rose/20">
          Download PDF
        </button>
<button onclick="window.location.href='reportgenrate.php'" className="w-full bg-transparent border border-luxe-border text-luxe-muted py-3 rounded-md font-semibold text-sm hover:bg-stone-50 transition-colors">
          Cancel
        </button>
</div>
</aside>
{/* <!-- END: Right Side --> */}
</main>
{/* <!-- END: Export Modal Container --> */}

    </div>
  );
}

export default ExportReport;