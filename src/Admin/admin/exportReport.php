<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE - Export to PDF Preview</title>
<!-- Tailwind CSS CDN with Plugins -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts: Playfair Display for Serifs, Inter for Sans-Serif -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Playfair+Display:wght@600;700&amp;display=swap" rel="stylesheet"/>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            luxe: {
              ivory: '#F8F6F2',
              rose: '#B76E79',
              roseHover: '#a35d68',
              charcoal: '#2B2B2B',
              muted: '#717171',
              border: '#E5E1DA'
            }
          },
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
<style data-purpose="typography">
    body {
      font-family: 'Inter', sans-serif;
      color: #2B2B2B;
    }
    h1, h2, h3, .serif-text {
      font-family: 'Playfair Display', serif;
    }
  </style>
<style data-purpose="custom-ui">
    .paper-shadow {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .toggle-checkbox:checked {
      right: 0;
      border-color: #B76E79;
      background-color: #B76E79;
    }
    .toggle-checkbox:checked + .toggle-label {
      background-color: #B76E79;
    }
  </style>
</head>
<body class="bg-stone-200/50 min-h-screen flex items-center justify-center p-4 lg:p-8">
<?php include 'sidebar.php'; ?>
<!-- BEGIN: Export Modal Container -->
<main class="bg-luxe-ivory w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] max-h-[850px]" data-purpose="export-modal">
<!-- BEGIN: Left Side - PDF Preview -->
<section class="flex-1 bg-stone-100 p-8 overflow-y-auto scrollbar-hide border-r border-luxe-border flex flex-col items-center" data-purpose="preview-area">
<div class="mb-4 w-full max-w-[595px] flex justify-between items-center px-1">
<span class="text-xs uppercase tracking-widest text-luxe-muted font-semibold">Document Preview</span>
<span class="text-xs text-luxe-muted italic">Scale: 75%</span>
</div>
<!-- BEGIN: The "PDF" Paper -->
<div class="bg-white w-full max-w-[595px] min-h-[842px] paper-shadow p-12 flex flex-col" id="pdf-document">
<!-- Header Section -->
<header class="flex justify-between items-start border-b border-stone-100 pb-8 mb-8">
<div>
<div class="text-2xl font-bold tracking-tighter luxe-charcoal serif-text mb-1">LUXE</div>
<p class="text-[10px] text-luxe-muted uppercase tracking-widest">Fine Dining Excellence</p>
</div>
<div class="text-right">
<h1 class="text-xl font-bold text-luxe-charcoal serif-text">Monthly Reservation Report</h1>
<p class="text-xs text-luxe-muted mt-1">Generated: October 31, 2023</p>
</div>
</header>
<!-- Metrics Summary -->
<div class="grid grid-cols-3 gap-4 mb-10">
<div class="bg-luxe-ivory p-4 rounded border border-luxe-border/50">
<p class="text-[10px] uppercase text-luxe-muted mb-1">Total Revenue</p>
<p class="text-lg font-semibold text-luxe-charcoal serif-text">$142,500.00</p>
</div>
<div class="bg-luxe-ivory p-4 rounded border border-luxe-border/50">
<p class="text-[10px] uppercase text-luxe-muted mb-1">Total Bookings</p>
<p class="text-lg font-semibold text-luxe-charcoal serif-text">1,284</p>
</div>
<div class="bg-luxe-ivory p-4 rounded border border-luxe-border/50">
<p class="text-[10px] uppercase text-luxe-muted mb-1">Avg. Ticket</p>
<p class="text-lg font-semibold text-luxe-charcoal serif-text">$110.98</p>
</div>
</div>
<!-- Trend Chart Placeholder -->
<div class="mb-10">
<h3 class="text-xs font-semibold uppercase text-luxe-charcoal mb-4 tracking-wider">Revenue Trend</h3>
<div class="w-full h-32 flex items-end justify-between px-2 border-b border-luxe-border pt-4">
<!-- Simulated Line Chart -->
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 500 100">
<path d="M0,80 Q50,70 100,40 T200,50 T300,20 T400,30 T500,10" fill="none" stroke="#B76E79" stroke-width="2"></path>
<circle cx="100" cy="40" fill="#B76E79" r="3"></circle>
<circle cx="300" cy="20" fill="#B76E79" r="3"></circle>
<circle cx="500" cy="10" fill="#B76E79" r="3"></circle>
</svg>
</div>
<div class="flex justify-between mt-2 text-[9px] text-luxe-muted font-medium uppercase">
<span>Oct 01</span><span>Oct 08</span><span>Oct 15</span><span>Oct 22</span><span>Oct 31</span>
</div>
</div>
<!-- Data Table -->
<div class="flex-grow">
<h3 class="text-xs font-semibold uppercase text-luxe-charcoal mb-4 tracking-wider">Top Performing Dates</h3>
<table class="w-full text-left text-[11px]">
<thead>
<tr class="border-b border-luxe-border text-luxe-muted uppercase tracking-tighter">
<th class="py-2 font-medium">Date</th>
<th class="py-2 font-medium">Reservations</th>
<th class="py-2 font-medium">Capacity</th>
<th class="py-2 font-medium text-right">Net Sales</th>
</tr>
</thead>
<tbody class="text-luxe-charcoal">
<tr class="border-b border-stone-50">
<td class="py-3">Oct 28, 2023 (Sat)</td>
<td class="py-3">142</td>
<td class="py-3">98%</td>
<td class="py-3 text-right">$14,230</td>
</tr>
<tr class="border-b border-stone-50">
<td class="py-3">Oct 21, 2023 (Sat)</td>
<td class="py-3">138</td>
<td class="py-3">95%</td>
<td class="py-3 text-right">$13,890</td>
</tr>
<tr class="border-b border-stone-50">
<td class="py-3">Oct 27, 2023 (Fri)</td>
<td class="py-3">124</td>
<td class="py-3">89%</td>
<td class="py-3 text-right">$11,400</td>
</tr>
<tr class="border-b border-stone-50">
<td class="py-3">Oct 14, 2023 (Sat)</td>
<td class="py-3">131</td>
<td class="py-3">91%</td>
<td class="py-3 text-right">$12,100</td>
</tr>
</tbody>
</table>
</div>
<!-- Footer -->
<footer class="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center text-[9px] text-luxe-muted italic">
<span>Confidentially prepared for LUXE Admin</span>
<span>Page 1 of 12</span>
</footer>
</div>
<!-- END: The "PDF" Paper -->
</section>
<!-- END: Left Side -->
<!-- BEGIN: Right Side - Export Settings -->
<aside class="w-full md:w-80 lg:w-96 bg-luxe-ivory p-8 flex flex-col" data-purpose="settings-panel">
<div class="mb-8">
<h2 class="text-2xl font-bold text-luxe-charcoal serif-text">Export Settings</h2>
<p class="text-sm text-luxe-muted mt-1">Configure your document output</p>
</div>
<div class="flex-grow space-y-6 overflow-y-auto scrollbar-hide pr-2">
<!-- File Name Input -->
<div data-purpose="setting-field">
<label class="block text-xs font-semibold text-luxe-charcoal uppercase tracking-wider mb-2" for="file-name">File Name</label>
<input class="w-full bg-white border-luxe-border rounded-md text-sm focus:ring-luxe-rose focus:border-luxe-rose" id="file-name" type="text" value="LUXE_Monthly_Report_Oct23"/>
</div>
<!-- Format Selection -->
<div data-purpose="setting-field">
<label class="block text-xs font-semibold text-luxe-charcoal uppercase tracking-wider mb-2">File Format</label>
<div class="grid grid-cols-3 gap-2">
<button class="py-2 px-3 text-xs font-medium rounded border border-luxe-rose bg-luxe-rose text-white">PDF</button>
<button class="py-2 px-3 text-xs font-medium rounded border border-luxe-border bg-white text-luxe-charcoal hover:bg-stone-50">Excel</button>
<button class="py-2 px-3 text-xs font-medium rounded border border-luxe-border bg-white text-luxe-charcoal hover:bg-stone-50">CSV</button>
</div>
</div>
<!-- Page Range -->
<div data-purpose="setting-field">
<label class="block text-xs font-semibold text-luxe-charcoal uppercase tracking-wider mb-2">Page Range</label>
<select class="w-full bg-white border-luxe-border rounded-md text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>All Pages (12)</option>
<option>Current Page Only</option>
<option>Custom Range...</option>
</select>
</div>
<!-- Toggles Section -->
<div class="pt-4 border-t border-luxe-border space-y-4" data-purpose="toggles">
<!-- Charts Toggle -->
<div class="flex items-center justify-between">
<span class="text-sm text-luxe-charcoal font-medium">Include Charts</span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxe-rose"></div>
</label>
</div>
<!-- Summary Tables Toggle -->
<div class="flex items-center justify-between">
<span class="text-sm text-luxe-charcoal font-medium">Summary Tables</span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxe-rose"></div>
</label>
</div>
<!-- Detailed Logs Toggle -->
<div class="flex items-center justify-between">
<span class="text-sm text-luxe-charcoal font-medium">Detailed Logs</span>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxe-rose"></div>
</label>
</div>
</div>
</div>
<!-- Action Buttons -->
<div class="mt-8 space-y-3 pt-6 border-t border-luxe-border" data-purpose="actions">
<button class="w-full bg-luxe-rose text-white py-3 rounded-md font-semibold text-sm hover:bg-luxe-roseHover transition-colors shadow-lg shadow-luxe-rose/20">
          Download PDF
        </button>
<button onclick="window.location.href='reportgenrate.php'" class="w-full bg-transparent border border-luxe-border text-luxe-muted py-3 rounded-md font-semibold text-sm hover:bg-stone-50 transition-colors">
          Cancel
        </button>
</div>
</aside>
<!-- END: Right Side -->
</main>
<!-- END: Export Modal Container -->
</body></html>



