<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE | Reservations Management</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Public+Sans:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c67c7c", // Muted luxe-rose as primary
                        "rose-accent": "#c67c7c",
                        "ivory": "#f4efec", // Warm luxe-beige
                        "deep-charcoal": "#2b2b2b", // Deep luxe-charcoal
                        "background-light": "#f4efec",
                        "background-dark": "#221610",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>body { font-family: 'Public Sans', sans-serif; }
        .sidebar-item-active { background-color: rgba(198, 124, 124, 0.1); border-right: 4px solid #c67c7c; }
        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); }
        .dark .glass-card { background: rgba(43, 43, 43, 0.8); }</style>
</head>
<body class="dark:bg-background-dark text-deep-charcoal dark:text-white transition-colors duration-200 bg-ivory">
<div class="flex h-screen overflow-hidden">
<!-- Side Navigation -->
<?php include 'sidebar.php'; ?>
<!-- Main Content -->
<main class="flex-1 flex flex-col overflow-hidden bg-ivory">
<!-- Header -->
<header class="h-16 flex-shrink-0 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/10 px-8 flex items-center justify-center sticky top-0 z-50">
    <div class="w-full max-w-[1400px] flex items-center justify-between">
        <div class="flex items-center gap-4 flex-1">
            <div class="relative w-full max-w-md">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                <input class="w-full bg-background-light dark:bg-white/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search reservations..." type="text"/>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <button class="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 relative translate-y-[1px]">
                <span class="material-symbols-outlined">notifications</span>
                <span class="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <button class="px-5 h-10 flex items-center gap-2 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-primary/10" onclick="toggleModal()">
                <span class="material-symbols-outlined text-sm">add</span>
                New Reservation
            </button>
        </div>
    </div>
</header>
<!-- Scrollable Page Content -->
<div class="flex-1 overflow-y-auto dark:bg-background-dark/50 bg-ivory pb-12">
    <div class="max-w-[1400px] mx-auto px-8 pt-8">
        <!-- Page Title -->
        <div class="mb-8">
            <div class="flex items-end justify-between">
                <div>
                    <?php
                    $breadcrumb = "DASHBOARD / RESERVATIONS";
                    $title = "Reservations Management";
                    include 'pageHeader.php';
                    ?>
                    <p class="text-sm text-gray-500 font-medium mt-1">Overview and manage all guest table bookings.</p>
                </div>
                <p class="text-[10px] text-gray-400 mb-1 uppercase tracking-[0.2em]">Last updated: Oct 12, 10:45 AM</p>
            </div>
        </div>
        <!-- Stats Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-4">
                    <span class="material-symbols-outlined p-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-600 dark:text-gray-300">book_online</span>
                    <span class="text-xs font-bold text-green-500 flex items-center">+12.5% <span class="material-symbols-outlined text-xs ml-1">trending_up</span></span>
                </div>
                <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Total Bookings</p>
                    <h3 class="text-3xl font-bold mt-1">1,284</h3>
                </div>
            </div>
            <div class="bg-white dark:bg-white/5 p-6 rounded-xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between h-full">
                <div class="absolute top-0 right-0 p-4 opacity-5">
                    <span class="material-symbols-outlined text-7xl text-primary">pending_actions</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <span class="material-symbols-outlined p-2 bg-primary/10 rounded-lg text-primary">hourglass_empty</span>
                    <span class="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">ACTION REQUIRED</span>
                </div>
                <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Pending Requests</p>
                    <h3 class="text-3xl font-bold mt-1 text-primary">42</h3>
                </div>
            </div>
            <div class="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-4">
                    <span class="material-symbols-outlined p-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-600 dark:text-gray-300">hail</span>
                    <span class="text-xs font-bold text-blue-500 flex items-center">+5% <span class="material-symbols-outlined text-xs ml-1">trending_up</span></span>
                </div>
                <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Today's Arrivals</p>
                    <h3 class="text-3xl font-bold mt-1">18</h3>
                </div>
            </div>
        </div>
        <!-- Filter Bar -->
        <div class="bg-white dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5 mb-6 flex flex-wrap items-center gap-4">
            <div class="flex-1 min-w-[200px]">
                <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">person_search</span>
                    <input class="w-full h-10 text-sm border-gray-100 dark:border-white/10 dark:bg-transparent rounded-lg pl-10 focus:ring-primary focus:border-primary" placeholder="Search guest name..." type="text"/>
                </div>
            </div>
            <select class="h-10 text-sm border-gray-100 dark:border-white/10 dark:bg-transparent rounded-lg focus:ring-primary focus:border-primary min-w-[160px]">
                <option>All Statuses</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
            </select>
            <div class="flex items-center h-10 gap-2 bg-background-light dark:bg-white/5 px-3 rounded-lg border border-gray-100 dark:border-white/10">
                <span class="material-symbols-outlined text-gray-400 text-sm">calendar_today</span>
                <span class="text-xs font-semibold">Oct 12 - Oct 19, 2023</span>
                <span class="material-symbols-outlined text-gray-400 text-xs cursor-pointer ml-1">close</span>
            </div>
            <button class="flex items-center gap-2 px-4 h-10 border border-gray-100 dark:border-white/10 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ml-auto">
                <span class="material-symbols-outlined text-sm">tune</span>
                More Filters
            </button>
        </div>
        <!-- Table Container -->
        <div class="bg-white dark:bg-white/5 rounded-xl border border-luxe-border shadow-md overflow-hidden">
            <table class="w-full text-left border-collapse">
                <thead class="sticky top-0 z-10">
                    <tr class="bg-gray-50/80 backdrop-blur-sm dark:bg-white/5 border-b border-luxe-border">
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">ID</th>
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Guest</th>
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Date &amp; Time</th>
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Party Size</th>
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Contact</th>
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Status</th>
                        <th class="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-white/5">
                    <!-- Row 1: Pending (Rose Accent) -->
                    <tr class="group hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                        <td class="px-6 py-5 align-middle text-sm font-mono text-gray-400">#LX-1024</td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex items-center gap-3">
                                <div class="size-8 rounded-full bg-rose-accent/20 flex items-center justify-center text-rose-accent font-bold text-xs uppercase">AV</div>
                                <p class="text-sm font-bold text-luxe-charcoal">Ananya Verma</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-sm font-bold text-luxe-charcoal">Today, 20:30</p>
                                <p class="text-[10px] font-medium text-gray-400 uppercase tracking-tight">Table 12 (Patio)</p>
                            </div>
                            <div class="mt-2 w-24 bg-gray-100 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div class="bg-rose-accent h-full shadow-[0_0_8px_rgba(198,124,124,0.3)]" style="width: 80%"></div>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <span class="px-1.5 py-0.5 bg-primary/10 text-primary text-[8px] font-black uppercase rounded-sm border border-primary/20">High Demand</span>
                                <span class="text-[9px] font-bold text-rose-accent uppercase tracking-tighter">1 Table Left</span>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                                <span class="material-symbols-outlined text-[14px]">groups</span> 4 People
                            </span>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-xs font-bold">+91 98765 43210</p>
                                <p class="text-[10px] text-gray-400">ananya.v@gmail.com</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="px-3 py-1 bg-rose-accent/15 text-rose-accent text-[9px] font-black uppercase rounded-full tracking-widest border border-rose-accent/30" title="Waiting for manager approval">Pending</span>
                        </td>
                        <td class="px-6 py-5 align-middle text-right">
                            <div class="flex items-center justify-end gap-2">
                                <button class="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm" title="Approve">
                                    <span class="material-symbols-outlined text-sm">check</span>
                                </button>
                                <button class="size-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 hover:bg-red-50 hover:text-red-600 transition-all shadow-sm" title="Cancel">
                                    <span class="material-symbols-outlined text-sm">close</span>
                                </button>
                                <button class="size-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all shadow-sm">
                                    <span class="material-symbols-outlined text-sm">edit</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <!-- Row 2: Confirmed -->
                    <tr class="group hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                        <td class="px-6 py-5 align-middle text-sm font-mono text-gray-400">#LX-1025</td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex items-center gap-3">
                                <div class="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs uppercase">RK</div>
                                <p class="text-sm font-bold text-luxe-charcoal">Rohan Kapoor</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-sm font-bold text-luxe-charcoal">Oct 21, 19:00</p>
                                <p class="text-[10px] font-medium text-gray-400 uppercase tracking-tight">Table 4 (Lounge)</p>
                            </div>
                            <div class="mt-2 w-24 bg-gray-100 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div class="bg-green-500 h-full" style="width: 40%"></div>
                            </div>
                            <p class="text-[9px] font-bold text-green-500 mt-1.5 uppercase tracking-tighter">3 Tables Left</p>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                                <span class="material-symbols-outlined text-[14px]">groups</span> 2 People
                            </span>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-xs font-bold">+91 99887 76655</p>
                                <p class="text-[10px] text-gray-400">rohan.kapoor@outlook.com</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="px-3 py-1 bg-green-500/15 text-green-500 text-[9px] font-black uppercase rounded-full tracking-widest border border-green-500/30" title="Booking confirmed and table reserved">Confirmed</span>
                        </td>
                        <td class="px-6 py-5 align-middle text-right">
                            <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button class="size-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all shadow-sm">
                                    <span class="material-symbols-outlined text-sm">mail</span>
                                </button>
                                <button class="size-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all shadow-sm">
                                    <span class="material-symbols-outlined text-sm">edit</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <!-- Row 3: Completed -->
                    <tr class="group hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                        <td class="px-6 py-5 align-middle text-sm font-mono text-gray-400">#LX-1020</td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex items-center gap-3">
                                <div class="size-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 font-bold text-xs uppercase">SM</div>
                                <p class="text-sm font-bold text-luxe-charcoal">Sarah Meyer</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-sm font-bold text-luxe-charcoal">Yesterday, 18:30</p>
                                <p class="text-[10px] font-medium text-gray-400 uppercase tracking-tight">Table 8 (Dining)</p>
                            </div>
                            <div class="mt-2 w-24 bg-gray-100 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div class="bg-red-500 h-full shadow-[0_0_8px_rgba(239,68,68,0.2)]" style="width: 100%"></div>
                            </div>
                            <div class="flex items-center gap-2 mt-1.5">
                                <span class="px-1.5 py-0.5 bg-primary/10 text-primary text-[8px] font-black uppercase rounded-sm border border-primary/20">High Demand</span>
                                <span class="text-[9px] font-bold text-red-500 uppercase tracking-tighter">Fully Booked</span>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                                <span class="material-symbols-outlined text-[14px]">groups</span> 6 People
                            </span>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-xs font-bold">+91 91234 56789</p>
                                <p class="text-[10px] text-gray-400">sarah.meyer@gmail.com</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="px-3 py-1 bg-gray-400/15 text-gray-400 text-[9px] font-black uppercase rounded-full tracking-widest border border-gray-400/30" title="Guest has finished their meal">Completed</span>
                        </td>
                        <td class="px-6 py-5 align-middle text-right">
                            <div class="flex items-center justify-end gap-2">
                                <p class="text-xs font-black text-primary">₹ 4,200.00</p>
                            </div>
                        </td>
                    </tr>
                    <!-- Row 4: Cancelled -->
                    <tr class="group hover:bg-gray-50 dark:hover:bg-white/5 transition-all opacity-60">
                        <td class="px-6 py-5 align-middle text-sm font-mono text-gray-400">#LX-1018</td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex items-center gap-3 grayscale">
                                <div class="size-8 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs uppercase">JD</div>
                                <p class="text-sm font-bold text-luxe-charcoal">John Doe</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col">
                                <p class="text-sm font-bold text-gray-400 line-through">Yesterday, 21:00</p>
                                <p class="text-[10px] font-medium text-gray-400 uppercase tracking-tight">Table 1 (Window)</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wide grayscale">
                                <span class="material-symbols-outlined text-[14px]">groups</span> 2 People
                            </span>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <div class="flex flex-col opacity-50">
                                <p class="text-xs font-bold">+91 90000 00001</p>
                                <p class="text-[10px] text-gray-400">john.doe@test.com</p>
                            </div>
                        </td>
                        <td class="px-6 py-5 align-middle">
                            <span class="px-3 py-1 bg-red-500/10 text-red-500 text-[9px] font-black uppercase rounded-full tracking-widest border border-red-500/20" title="Reservation cancelled by guest or staff">Cancelled</span>
                        </td>
                        <td class="px-6 py-5 align-middle text-right">
                            <div class="flex items-center justify-end gap-2">
                                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 italic">No-show</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- Pagination -->
            <div class="px-6 py-4 bg-gray-50/50 dark:bg-white/5 border-t border-luxe-border flex items-center justify-between">
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing 1-10 of 1,284 reservations</p>
                <div class="flex items-center gap-2">
                    <button class="size-8 flex items-center justify-center border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span class="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button class="size-8 flex items-center justify-center bg-primary text-white text-xs font-black rounded-lg shadow-sm shadow-primary/20">1</button>
                    <button class="size-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 text-xs font-bold rounded-lg transition-colors">2</button>
                    <button class="size-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 text-xs font-bold rounded-lg transition-colors">3</button>
                    <span class="text-xs px-1 text-gray-400">...</span>
                    <button class="size-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 text-xs font-bold rounded-lg transition-colors">128</button>
                    <button class="size-8 flex items-center justify-center border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center hidden" id="reservation-modal">
<div class="bg-white dark:bg-background-dark w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10">
<div class="flex justify-between items-center mb-6">
<h3 class="text-xl font-bold">New Reservation</h3>
<button class="text-gray-400 hover:text-gray-600" onclick="toggleModal()"><span class="material-symbols-outlined">close</span></button>
</div>
<div class="space-y-4">
<div>
<label class="block text-xs font-bold text-gray-500 uppercase mb-1">Date</label>
<input class="w-full rounded-lg border-gray-200 dark:bg-white/5 dark:border-white/10 text-sm" id="res-date" onchange="checkAvailability()" type="date"/>
</div>
<div>
<label class="block text-xs font-bold text-gray-500 uppercase mb-1">Time Slot</label>
<select class="w-full rounded-lg border-gray-200 dark:bg-white/5 dark:border-white/10 text-sm" id="res-time" onchange="checkAvailability()">
<option value="">Select time</option>
<option value="18:00">18:00</option>
<option value="18:30">18:30</option>
<option value="19:00">19:00</option>
<option value="19:30">19:30</option>
<option value="20:00">20:00</option>
<option value="20:30">20:30</option>
<option value="21:00">21:00</option>
</select>
</div>
<div class="min-h-[20px]" id="availability-feedback"></div>
<button class="w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 mt-4 transition-all" id="submit-reservation">Reserve Now</button>
</div>
</div>
</div></main>
</div>
<script>
    const MAX_TABLES = 5;
    // Mock data for existing bookings
    const mockBookings = {
        '2023-10-12T20:30': 4,
        '2023-10-21T19:00': 2,
        '2023-10-19T18:30': 5
    };

    function checkAvailability() {
        const date = document.getElementById('res-date').value;
        const time = document.getElementById('res-time').value;
        const feedback = document.getElementById('availability-feedback');
        const submitBtn = document.getElementById('submit-reservation');

        if (!date || !time) return;

        const slotKey = `${date}T${time}`;
        const booked = mockBookings[slotKey] || 0;
        const remaining = MAX_TABLES - booked;

        if (remaining <= 0) {
            feedback.innerHTML = `<span class='text-red-500 flex items-center gap-1 text-xs mt-2'><span class='material-symbols-outlined text-sm'>error</span> This time slot is fully booked. Please select another available time.</span>`;
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            feedback.innerHTML = `<span class='text-green-600 flex items-center gap-1 text-xs mt-2'><span class='material-symbols-outlined text-sm'>check_circle</span> Only ${remaining} tables left for ${time}</span>`;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    function toggleModal() {
        const modal = document.getElementById('reservation-modal');
        modal.classList.toggle('hidden');
    }
</script></body></html>




