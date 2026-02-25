<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE Admin - Reports Generation</title>
<!-- Google Fonts: Playfair Display for Headings, Public Sans for Body -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Public+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c67c7c", // Muted Rose
                        "background-light": "#f4efec", // Soft Beige
                        "background-dark": "#2b2b2b", // Deep Charcoal
                        "charcoal": "#2b2b2b",
                        "rose-accent": "#c67c7c",
                        "beige-light": "#f4efec",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"],
                        "serif": ["Playfair Display", "serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Public Sans', sans-serif;
            background-color: #f4efec;
            color: #2b2b2b;
        }
        .serif-heading {
            font-family: 'Playfair Display', serif;
        }
        .sidebar-item-active {
            background-color: rgba(198, 124, 124, 0.15);
            color: #c67c7c;
            border-right: 3px solid #c67c7c;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-charcoal dark:text-slate-100">
<div class="flex min-h-screen">
<!-- Sidebar Navigation -->
<?php include 'sidebar.php'; ?>
<!-- Main Content Area -->
<main class="flex-1 overflow-y-auto p-8 lg:p-12">
<!-- Top Bar -->
<header class="py-8 bg-background-light dark:bg-background-dark px-12 flex items-center justify-between z-50">
    <div>
        <?php
        $breadcrumb = "DASHBOARD / REPORTS";
        $title = "Report Generation";
        include 'pageHeader.php';
        ?>
        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Generate analytics and performance reports for restaurant management.</p>
    </div>
    <div class="hidden md:flex flex-col items-end gap-1 text-right">
        <p class="text-[10px] font-bold text-rose-accent uppercase tracking-widest">Status Overview</p>
        <p class="text-xs text-slate-500">Last Generated: <span class="font-semibold text-charcoal dark:text-white">Oct 24, 2023 10:45 AM</span></p>
        <p class="text-xs text-slate-500">Reports Created: <span class="font-semibold text-charcoal dark:text-white">128</span></p>
    </div>
</header>
<!-- Report Configuration Cards -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
<!-- Daily Booking Report -->
<div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-rose-accent/5 hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-rose-accent/10 rounded-lg text-rose-accent">
<span class="material-symbols-outlined">event_available</span>
</div>
<span class="text-[10px] font-bold text-rose-accent bg-rose-accent/10 px-2 py-1 rounded uppercase">Daily</span>
</div>
<h3 class="font-bold text-lg mb-2">Daily Booking Report</h3>
<p class="text-xs text-slate-500 mb-4">Summary: Total 42 bookings today</p>
<div class="space-y-4">
<input class="w-full rounded-lg border-rose-accent/20 focus:ring-rose-accent focus:border-rose-accent bg-background-light/30 text-sm py-2" type="date"/>
<button class="w-full bg-rose-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-rose-accent/90 transition-colors">Generate</button>
</div>
</div>
<!-- Monthly Reservation Report -->
<div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-rose-accent/5 hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-rose-accent/10 rounded-lg text-rose-accent">
<span class="material-symbols-outlined">calendar_month</span>
</div>
<span class="text-[10px] font-bold text-rose-accent bg-rose-accent/10 px-2 py-1 rounded uppercase">Monthly</span>
</div>
<h3 class="font-bold text-lg mb-2">Monthly Reservation Report</h3>
<p class="text-xs text-emerald-600 mb-4 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">trending_up</span> Trend: +12% from last month
                    </p>
<div class="space-y-4">
<select class="w-full rounded-lg border-rose-accent/20 focus:ring-rose-accent focus:border-rose-accent bg-background-light/30 text-sm py-2">
<option>October 2023</option>
<option>September 2023</option>
<option>August 2023</option>
</select>
<button class="w-full bg-rose-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-rose-accent/90 transition-colors">Generate</button>
</div>
</div>
<!-- Most Ordered Food -->
<div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-rose-accent/5 hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-rose-accent/10 rounded-lg text-rose-accent">
<span class="material-symbols-outlined">restaurant_menu</span>
</div>
<span class="text-[10px] font-bold text-rose-accent bg-rose-accent/10 px-2 py-1 rounded uppercase">Menu</span>
</div>
<h3 class="font-bold text-lg mb-2">Most Ordered Food</h3>
<div class="text-[11px] text-slate-500 mb-4 flex flex-wrap gap-2">
<span class="px-2 py-0.5 bg-slate-100 dark:bg-zinc-700 rounded-full">Grilled Salmon</span>
<span class="px-2 py-0.5 bg-slate-100 dark:bg-zinc-700 rounded-full">Wagyu Beef</span>
</div>
<div class="space-y-4">
<select class="w-full rounded-lg border-rose-accent/20 focus:ring-rose-accent focus:border-rose-accent bg-background-light/30 text-sm py-2">
<option>Top 10 Dishes</option>
<option>Top 25 Dishes</option>
<option>All Items</option>
</select>
<button class="w-full bg-rose-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-rose-accent/90 transition-colors">Generate</button>
</div>
</div>
<!-- Peak Hour Booking -->
<div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-rose-accent/5 hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-rose-accent/10 rounded-lg text-rose-accent">
<span class="material-symbols-outlined">schedule</span>
</div>
<span class="text-[10px] font-bold text-rose-accent bg-rose-accent/10 px-2 py-1 rounded uppercase">Analytics</span>
</div>
<h3 class="font-bold text-lg mb-2">Peak Hour Booking</h3>
<p class="text-xs text-slate-500 mb-4">Busiest window: 19:00 - 21:00</p>
<div class="space-y-4">
<div class="flex gap-2">
<input class="w-1/2 rounded-lg border-rose-accent/20 focus:ring-rose-accent focus:border-rose-accent bg-background-light/30 text-xs py-2" type="time" value="17:00"/>
<input class="w-1/2 rounded-lg border-rose-accent/20 focus:ring-rose-accent focus:border-rose-accent bg-background-light/30 text-xs py-2" type="time" value="23:00"/>
</div>
<button class="w-full bg-rose-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-rose-accent/90 transition-colors">Generate</button>
</div>
</div>
<!-- Customer Visit Frequency -->
<div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-rose-accent/5 hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
<div class="flex justify-between items-start mb-4">
<div class="p-2 bg-rose-accent/10 rounded-lg text-rose-accent">
<span class="material-symbols-outlined">group_work</span>
</div>
<span class="text-[10px] font-bold text-rose-accent bg-rose-accent/10 px-2 py-1 rounded uppercase">Loyalty</span>
</div>
<h3 class="font-bold text-lg mb-2">Customer Visit Frequency</h3>
<div class="mb-4">
<div class="flex justify-between text-[10px] font-bold mb-1">
<span>Repeat</span>
<span>65%</span>
</div>
<div class="w-full bg-slate-100 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden">
<div class="bg-rose-accent h-full w-[65%]"></div>
</div>
</div>
<div class="space-y-4">
<select class="w-full rounded-lg border-rose-accent/20 focus:ring-rose-accent focus:border-rose-accent bg-background-light/30 text-sm py-2">
<option>Last Quarter</option>
<option>Last 6 Months</option>
<option>Year to Date</option>
</select>
<button class="w-full bg-rose-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-rose-accent/90 transition-colors">Generate</button>
</div>
</div>
<!-- Blank / Additional Action -->
<div class="bg-rose-accent/5 border-2 border-dashed border-rose-accent/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between"><div class="group cursor-pointer flex flex-col items-center justify-center text-center py-10">
<span class="material-symbols-outlined text-rose-accent/40 text-4xl mb-2 group-hover:scale-110 group-hover:text-rose-accent transition-all duration-300">add_circle</span>
<p class="text-sm font-bold text-rose-accent/60 group-hover:text-rose-accent">Create Custom Report</p>
</div></div>
</section>
<!-- Preview Section Area -->
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-rose-accent/5 shadow-sm">
<p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Total Revenue</p>
<p class="text-xl font-bold text-charcoal dark:text-white">?48,250</p>
</div>
<div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-rose-accent/5 shadow-sm">
<p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Total Bookings</p>
<p class="text-xl font-bold text-charcoal dark:text-white">124</p>
</div>
<div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-rose-accent/5 shadow-sm">
<p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Avg Order</p>
<p class="text-xl font-bold text-charcoal dark:text-white">?389</p>
</div>
<div class="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-rose-accent/5 shadow-sm">
<p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Peak Hour</p>
<p class="text-xl font-bold text-charcoal dark:text-white">8:00 PM</p>
</div>
</div><section class="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-rose-accent/5 overflow-hidden">
<!-- Toolbar -->
<div class="px-6 py-4 border-b border-rose-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
    <div class="relative w-full md:w-96">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
        <input class="w-full h-10 pl-10 pr-4 rounded-xl border-slate-200 dark:border-zinc-700 dark:bg-zinc-900 focus:ring-rose-accent text-sm" placeholder="Search report data..." type="text"/>
    </div>
    <div class="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
        <button id="exportBtn" class="h-10 px-5 flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 text-charcoal dark:text-white border border-rose-accent/10 rounded-xl text-xs font-bold whitespace-nowrap hover:bg-rose-accent/5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-sm">picture_as_pdf</span>
            Export PDF
        </button>
        <button id="exportExcelBtn" class="h-10 px-5 flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 text-charcoal dark:text-white border border-rose-accent/10 rounded-xl text-xs font-bold whitespace-nowrap hover:bg-rose-accent/5 transition-all shadow-sm">
            <span class="material-symbols-outlined text-sm">description</span>
            Export Excel
        </button>
        <button id="printBtn" class="h-10 px-6 flex items-center justify-center gap-2 bg-rose-accent/10 text-rose-accent rounded-xl text-xs font-black whitespace-nowrap hover:bg-rose-accent/20 transition-all uppercase tracking-wide border border-rose-accent/20 shadow-sm">
            <span class="material-symbols-outlined text-sm">print</span>
            Print Report
        </button>
    </div>
</div><div class="px-6 py-4 bg-background-light/30 border-b border-rose-accent/10 flex flex-wrap gap-4 items-end">
    <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-bold text-rose-accent uppercase ml-1 tracking-wider">From Date</label>
        <input class="h-10 rounded-lg border-rose-accent/20 focus:ring-rose-accent bg-white dark:bg-zinc-900 text-xs px-3 w-40" type="date"/>
    </div>
    <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-bold text-rose-accent uppercase ml-1 tracking-wider">To Date</label>
        <input class="h-10 rounded-lg border-rose-accent/20 focus:ring-rose-accent bg-white dark:bg-zinc-900 text-xs px-3 w-40" type="date"/>
    </div>
    <div class="flex flex-col gap-1.5">
        <label class="text-[10px] font-bold text-rose-accent uppercase ml-1 tracking-wider">Report Type</label>
        <select class="h-10 rounded-lg border-rose-accent/20 focus:ring-rose-accent bg-white dark:bg-zinc-900 text-xs px-3 w-48">
            <option>All Transactions</option>
            <option>Reservations Only</option>
            <option>Revenue Analysis</option>
        </select>
    </div>
    <button class="h-10 px-6 bg-charcoal text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-charcoal/90 transition-all shadow-sm flex items-center justify-center">Apply Filters</button>
</div>
<!-- Data Table -->
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-background-light/50 dark:bg-zinc-900/50 border-b border-rose-accent/10 sticky top-0 z-10">
<tr>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500"><div class="flex items-center gap-1">Date <span class="material-symbols-outlined text-xs cursor-pointer">unfold_more</span></div></th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Customer Name</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Table No.</th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500"><div class="flex items-center gap-1">Status <span class="material-symbols-outlined text-xs cursor-pointer">unfold_more</span></div></th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500"><div class="flex items-center gap-1">Amount <span class="material-symbols-outlined text-xs cursor-pointer">unfold_more</span></div></th>
<th class="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-rose-accent/5">
<tr class="hover:bg-rose-accent/5 transition-colors">
<td class="px-6 py-4 text-sm whitespace-nowrap">Oct 24, 2023 - 19:30</td>
<td class="px-6 py-4 text-sm font-medium">Eleanor Thorne</td>
<td class="px-6 py-4 text-sm">Table 08</td>
<td class="px-6 py-4 text-xs">
<span class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold uppercase">Completed</span>
</td>
<td class="px-6 py-4 text-sm font-bold">?184.50</td>
<td class="px-6 py-4">
<button class="text-rose-accent hover:text-rose-accent/70"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr class="hover:bg-rose-accent/5 transition-colors">
<td class="px-6 py-4 text-sm whitespace-nowrap">Oct 24, 2023 - 20:15</td>
<td class="px-6 py-4 text-sm font-medium">Julian Vane</td>
<td class="px-6 py-4 text-sm">Table 12</td>
<td class="px-6 py-4 text-xs">
<span class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold uppercase">Completed</span>
</td>
<td class="px-6 py-4 text-sm font-bold">?312.00</td>
<td class="px-6 py-4">
<button class="text-rose-accent hover:text-rose-accent/70"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr class="hover:bg-rose-accent/5 transition-colors">
<td class="px-6 py-4 text-sm whitespace-nowrap">Oct 24, 2023 - 18:45</td>
<td class="px-6 py-4 text-sm font-medium">Beatrice Thorne</td>
<td class="px-6 py-4 text-sm">Table 02</td>
<td class="px-6 py-4 text-xs">
<span class="px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-bold uppercase">Pending</span>
</td>
<td class="px-6 py-4 text-sm font-bold">?95.20</td>
<td class="px-6 py-4">
<button class="text-rose-accent hover:text-rose-accent/70"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr class="hover:bg-rose-accent/5 transition-colors">
<td class="px-6 py-4 text-sm whitespace-nowrap">Oct 23, 2023 - 21:00</td>
<td class="px-6 py-4 text-sm font-medium">Marcus Sterling</td>
<td class="px-6 py-4 text-sm">Private Suite B</td>
<td class="px-6 py-4 text-xs">
<span class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold uppercase">Completed</span>
</td>
<td class="px-6 py-4 text-sm font-bold">?1,250.00</td>
<td class="px-6 py-4">
<button class="text-rose-accent hover:text-rose-accent/70"><span class="material-symbols-outlined">visibility</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="p-6 border-t border-rose-accent/10 flex justify-between items-center">
<p class="text-xs text-slate-500 font-medium">Showing 4 of 42 results</p>
<div class="flex items-center gap-1">
<button class="p-2 rounded-lg border border-rose-accent/10 hover:bg-rose-accent/5 disabled:opacity-50" disabled="">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button class="size-8 rounded-lg bg-rose-accent text-white text-xs font-bold">1</button>
<button class="size-8 rounded-lg border border-rose-accent/10 text-xs font-bold hover:bg-rose-accent/5">2</button>
<button class="size-8 rounded-lg border border-rose-accent/10 text-xs font-bold hover:bg-rose-accent/5">3</button>
<button class="p-2 rounded-lg border border-rose-accent/10 hover:bg-rose-accent/5">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</section>
</main>
</div>
<script>
document.getElementById('exportBtn').addEventListener('click', function () {
    window.location.href = 'exportReport.php';
});

document.getElementById('exportExcelBtn').addEventListener('click', function () {
    window.location.href = 'exportReport.php';
});

document.getElementById('printBtn').addEventListener('click', function () {
    window.open('printRopart.php', '_blank');
});
</script>
</body></html>


