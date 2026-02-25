<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE Management - Print Preview</title>
<!-- Tailwind CSS v3 with Plugins -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts: Elegant Serif and Clean Sans -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            luxe: {
              ivory: '#f4efec',
              rose: '#c67c7c',
              roseDark: '#b06a6a',
              gold: '#d4af37',
              charcoal: '#333333',
              muted: '#8e8e8e'
            }
          },
          fontFamily: {
            serif: ['Playfair Display', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
<style data-purpose="custom-styling">
    body {
      background-color: #f4efec;
      font-family: 'Inter', sans-serif;
    }
    .serif-heading {
      font-family: 'Playfair Display', serif;
    }
    /* Background Dimming Layer */
    .dashboard-backdrop {
      filter: blur(4px) brightness(0.8);
      pointer-events: none;
      user-select: none;
    }
    /* Scrollbar Styling */
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #c67c7c;
      border-radius: 10px;
    }
    /* Print Paper Shadow */
    .paper-shadow {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body class="h-screen w-full overflow-hidden flex items-center justify-center relative">
<!-- BEGIN: Blurred Background Dashboard -->
<div class="absolute inset-0 z-0 dashboard-backdrop flex overflow-hidden">
<!-- Sidebar -->
<aside class="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
<div class="mb-10 flex items-center gap-3">
<div class="w-10 h-10 bg-luxe-rose rounded-full flex items-center justify-center text-white">Ψ</div>
<div>
<h1 class="font-bold text-lg leading-none">LUXE</h1>
<p class="text-[10px] uppercase tracking-widest text-luxe-rose">Management</p>
</div>
</div>
<nav class="space-y-4 opacity-50">
<div class="flex items-center gap-3 p-2 rounded text-gray-500"><span class="w-5 h-5 bg-gray-200"></span> Dashboard</div>
<div class="flex items-center gap-3 p-2 rounded text-gray-500"><span class="w-5 h-5 bg-gray-200"></span> Reservations</div>
<div class="flex items-center gap-3 p-2 rounded bg-luxe-rose/10 text-luxe-rose font-medium border-r-4 border-luxe-rose"><span class="w-5 h-5 bg-luxe-rose"></span> Reports</div>
</nav>
</aside>
<!-- Main Area Mock -->
<main class="flex-1 p-10 bg-luxe-ivory">
<header class="mb-8">
<h2 class="text-4xl serif-heading text-luxe-charcoal">Report Generation</h2>
</header>
<div class="grid grid-cols-3 gap-6">
<div class="h-48 bg-white rounded-xl"></div>
<div class="h-48 bg-white rounded-xl"></div>
<div class="h-48 bg-white rounded-xl"></div>
</div>
</main>
</div>
<!-- END: Blurred Background Dashboard -->
<!-- BEGIN: Modal Overlay -->
<div class="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
<!-- BEGIN: Print Preview Dialog -->
<div class="bg-white w-[1100px] h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300" data-purpose="print-preview-dialog" id="print-modal">
<!-- Modal Content Area -->
<div class="flex flex-1 overflow-hidden">
<!-- BEGIN: Left Side (Preview) -->
<section class="flex-1 bg-gray-100 flex justify-center overflow-y-auto p-12 custom-scrollbar border-r border-gray-200" data-purpose="document-preview">
<!-- The "Paper" -->
<article class="bg-white w-[210mm] min-h-[297mm] p-16 paper-shadow flex flex-col transform origin-top scale-95">
<!-- Paper Header -->
<div class="flex justify-between items-start border-b-2 border-luxe-rose pb-8 mb-10">
<div>
<h3 class="serif-heading text-3xl text-luxe-charcoal mb-1">Monthly Reservation Report</h3>
<p class="text-sm text-gray-500 uppercase tracking-wide">Period: October 2023</p>
</div>
<div class="text-right">
<p class="text-xs font-bold text-luxe-rose">LUXE RESTAURANT GROUP</p>
<p class="text-[10px] text-gray-400">Generated on: Oct 24, 2023 11:15 AM</p>
</div>
</div>
<!-- Paper Content (Stats) -->
<div class="grid grid-cols-3 gap-8 mb-12">
<div class="border-l-2 border-luxe-rose/30 pl-4">
<p class="text-[10px] text-gray-400 uppercase font-semibold">Total Bookings</p>
<p class="text-2xl font-serif text-luxe-charcoal">1,248</p>
</div>
<div class="border-l-2 border-luxe-rose/30 pl-4">
<p class="text-[10px] text-gray-400 uppercase font-semibold">Growth Trend</p>
<p class="text-2xl font-serif text-green-600">+12%</p>
</div>
<div class="border-l-2 border-luxe-rose/30 pl-4">
<p class="text-[10px] text-gray-400 uppercase font-semibold">Occupancy</p>
<p class="text-2xl font-serif text-luxe-charcoal">88%</p>
</div>
</div>
<!-- Paper Content (Mock Chart) -->
<div class="mb-12">
<p class="text-xs font-bold text-gray-700 uppercase mb-4">Weekly Booking Velocity</p>
<div class="h-48 w-full bg-gray-50 flex items-end justify-between px-10 pb-4 border rounded-lg">
<div class="w-12 bg-luxe-rose/40 h-24 rounded-t"></div>
<div class="w-12 bg-luxe-rose/60 h-32 rounded-t"></div>
<div class="w-12 bg-luxe-rose/80 h-40 rounded-t"></div>
<div class="w-12 bg-luxe-rose h-44 rounded-t"></div>
</div>
</div>
<!-- Paper Content (Table) -->
<div class="flex-1">
<p class="text-xs font-bold text-gray-700 uppercase mb-4">Top Performance Metrics</p>
<table class="w-full text-left text-sm border-collapse">
<thead>
<tr class="border-b border-gray-100 text-[11px] text-gray-400 uppercase">
<th class="py-3 font-medium">Metric Category</th>
<th class="py-3 font-medium text-right">Current</th>
<th class="py-3 font-medium text-right">Target</th>
</tr>
</thead>
<tbody class="text-gray-600">
<tr class="border-b border-gray-50">
<td class="py-4">Weekend Dinner Rush</td>
<td class="py-4 text-right">98.2%</td>
<td class="py-4 text-right">95.0%</td>
</tr>
<tr class="border-b border-gray-50">
<td class="py-4">No-Show Rate</td>
<td class="py-4 text-right text-red-500">4.1%</td>
<td class="py-4 text-right">2.0%</td>
</tr>
<tr class="border-b border-gray-50">
<td class="py-4">VIP Retention</td>
<td class="py-4 text-right">76.0%</td>
<td class="py-4 text-right">70.0%</td>
</tr>
</tbody>
</table>
</div>
<!-- Paper Footer -->
<div class="mt-auto pt-10 border-t border-gray-100 text-center">
<p class="text-[9px] text-gray-400 uppercase tracking-widest">Confidential Internal Document - Luxe Restaurant Management Systems</p>
<p class="text-[9px] text-gray-300 mt-1">Page 1 of 3</p>
</div>
</article>
</section>
<!-- END: Left Side (Preview) -->
<!-- BEGIN: Right Side (Settings) -->
<aside class="w-[320px] p-8 flex flex-col bg-white" data-purpose="print-settings">
<h4 class="text-xl serif-heading text-luxe-charcoal mb-8 pb-4 border-b">Print Settings</h4>
<div class="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
<!-- Destination -->
<div class="space-y-2">
<label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Destination</label>
<select class="w-full border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>Save as PDF</option>
<option>Luxe Office Printer (HP-M404)</option>
<option>Kitchen Receipt Printer</option>
</select>
</div>
<!-- Pages -->
<div class="space-y-3">
<label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Pages</label>
<div class="space-y-2">
<label class="flex items-center text-sm text-gray-700 cursor-pointer">
<input checked="" class="text-luxe-rose focus:ring-luxe-rose mr-3" name="pages" type="radio"/>
                  All (3 pages)
                </label>
<label class="flex items-center text-sm text-gray-700 cursor-pointer">
<input class="text-luxe-rose focus:ring-luxe-rose mr-3" name="pages" type="radio"/>
                  Custom
                </label>
<input class="w-full border-gray-200 rounded-lg text-sm mt-1 focus:ring-luxe-rose focus:border-luxe-rose placeholder:text-gray-300" placeholder="e.g. 1-2" type="text"/>
</div>
</div>
<!-- Copies -->
<div class="space-y-2">
<label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Copies</label>
<input class="w-24 border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose" min="1" type="number" value="1"/>
</div>
<!-- Layout -->
<div class="space-y-2">
<label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Layout</label>
<select class="w-full border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>Portrait</option>
<option>Landscape</option>
</select>
</div>
<!-- Color -->
<div class="space-y-2">
<label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Color</label>
<select class="w-full border-gray-200 rounded-lg text-sm focus:ring-luxe-rose focus:border-luxe-rose">
<option>Color</option>
<option>Black &amp; White</option>
</select>
</div>
<!-- More Settings Toggle (Visual Only) -->
<button class="text-luxe-rose text-sm font-medium hover:underline flex items-center gap-1">
              More settings
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</div>
</aside>
<!-- END: Right Side (Settings) -->
</div>
<!-- BEGIN: Footer Actions -->
<footer class="p-6 bg-gray-50 border-t flex justify-end items-center gap-4" data-purpose="modal-footer">
<button onclick="window.location.href='reportgenrate.php'" class="px-8 py-2.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
          Cancel
        </button>
<button class="px-10 py-2.5 rounded-full text-sm font-semibold bg-luxe-rose text-white hover:bg-luxe-roseDark shadow-lg shadow-luxe-rose/20 transition-all flex items-center gap-2">
<svg class="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
          Print Report
        </button>
</footer>
<!-- END: Footer Actions -->
</div>
<!-- END: Print Preview Dialog -->
</div>
<!-- END: Modal Overlay -->
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
</body></html>
