<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE | Admin Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&amp;family=Public+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#B76E79", // Rose Edition Accents
                "background-light": "#f4efec", // Soft Warm Beige
                "background-dark": "#1A1614",
                "luxe-ivory": "#FAF9F6",
                "luxe-rose": "#B76E79",
                "luxe-dark": "#2b2b2b",
              },
              fontFamily: {
                "display": ["Public Sans", "sans-serif"],
                "serif": ["Playfair Display", "serif"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }</script>
<style>        body { font-family: 'Public Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .action-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px -1px rgba(0, 0, 0, 0.03), 0 2px 10px -1px rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(183, 110, 121, 0.05);
        }
        .action-card:hover {
            transform: translateY(-4px) scale(1.02);
            border-color: rgba(183, 110, 121, 0.3);
            box-shadow: 0 20px 25px -5px rgba(183, 110, 121, 0.1), 0 10px 10px -5px rgba(183, 110, 121, 0.04);
        }
        .active-nav {
            box-shadow: 0 0 15px rgba(183, 110, 121, 0.3);
        }</style>
</head>
<body class="dark:bg-background-dark text-luxe-dark dark:text-luxe-ivory min-h-screen flex bg-[#f4efec]">
<!-- Sidebar Navigation -->
<?php include 'sidebar.php'; ?>
<!-- Main Content Area -->
<main class="flex-1 overflow-y-auto px-10 py-8">
<!-- Top Bar -->
<header class="flex justify-between items-start mb-10">
<div>
<?php
$breadcrumb = "DASHBOARD / HOME";
$title = "Admin Dashboard";
include 'pageHeader.php';
?>
<p class="text-gray-500 dark:text-gray-400 mt-1">Manage website content and reservations</p>
</div>
<div class="flex items-center gap-6"><div class="flex gap-3 mr-4">
<button class="px-4 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm">add_circle</span> Add Reservation
  </button>
<button class="px-4 py-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-sm">restaurant_menu</span> Add Menu Item
  </button>
</div>
<div class="text-right">
<p class="text-xs font-bold text-primary uppercase tracking-widest">Julian Vane</p>
<p class="text-xs text-gray-400">October 24, 2023</p>
</div>
<div class="relative">
<img alt="Admin Profile" class="size-12 rounded-full object-cover border-2 border-primary/20 shadow-md" data-alt="Close up portrait of male administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpTjIHSBdNKFRznjf6IRHM_Thxuag9-C__AO9GsQS7OsgaGGPwa90AwtmAYG5rS8b0u7vxXexbLOz0yZ612DeC24iykVFbmhQ0rdCDfXddpGiTn0YqTEnVbuct-MWV0AmwbAakuFLs2BTNYjb7w_sfnqhDT3rCFy93TYP-upypxoukZswM6yL-bkp_UywrwpdQ3c2uM9ynuRohtB7x5JZtw3eq7rxC42Ys5W5e7HSTMHBDf0gPHr_zX60FxetkNOJ-zmwsAkLRF5U"/>
<div class="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-luxe-dark rounded-full"></div>
</div>
</div>
</header>
<!-- Stats Bar -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<!-- Metric 1 -->
<div class="bg-white dark:bg-luxe-dark rounded-xl shadow-sm border border-primary/5 flex items-center justify-between p-8 shadow-md">
<div>
<p class="text-gray-500 dark:text-gray-400 font-medium text-[10px] uppercase tracking-widest font-bold opacity-70">Total Dishes</p>
<h3 class="font-serif text-4xl font-bold mt-1">42</h3>
<div class="flex items-center gap-1 mt-2 text-green-500 text-xs font-bold font-semibold">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>+2% this week</span>
</div>
</div>
<div class="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">restaurant</span>
</div>
</div>
<!-- Metric 2 -->
<div class="bg-white dark:bg-luxe-dark rounded-xl shadow-sm border border-primary/5 flex items-center justify-between p-8 shadow-md">
<div>
<p class="text-gray-500 dark:text-gray-400 font-medium text-[10px] uppercase tracking-widest font-bold opacity-70">Pending Reservations</p>
<h3 class="font-serif text-4xl font-bold mt-1">14</h3>
<div class="flex items-center gap-1 mt-2 text-primary text-xs font-bold font-semibold">
<span class="material-symbols-outlined text-sm">notification_important</span>
<span>Action required</span>
</div>
</div>
<div class="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">event_seat</span>
</div>
</div>
<!-- Metric 3 -->
<div class="bg-white dark:bg-luxe-dark rounded-xl shadow-sm border border-primary/5 flex items-center justify-between p-8 shadow-md">
<div>
<p class="text-gray-500 dark:text-gray-400 font-medium text-[10px] uppercase tracking-widest font-bold opacity-70">New Reviews</p>
<h3 class="font-serif text-4xl font-bold mt-1">08</h3>
<div class="flex items-center gap-1 mt-2 text-primary text-xs font-bold font-semibold">
<span class="material-symbols-outlined text-sm">grade</span>
<span>Avg. 4.9 stars</span>
</div>
</div>
<div class="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">rate_review</span>
</div>
</div>
</section>
<!-- Main Content Grid -->
<h4 class="font-serif font-bold text-[#2b2b2b] tracking-tight mb-6 flex items-center">
            Management Modules
            <span class="h-px bg-primary/20 flex-1 ml-4"></span>
</h4>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Module 1: Homepage -->
<!-- Module 2: Menu -->
<div class="action-card bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-transparent flex flex-col items-center text-center group cursor-pointer">
<div class="size-16 bg-background-light dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">flatware</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="size-2 bg-green-500 rounded-full"></span>
<h5 class="font-serif font-bold text-[#2b2b2b]">Manage Menu</h5>
</div>
<p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                    Add new seasonal dishes, edit existing items, and update pricing or categories.
                </p>
<button class="mt-auto text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Edit Menu <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<!-- Module 3: Reservations -->
<div class="action-card bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-transparent flex flex-col items-center text-center group cursor-pointer">
<div class="size-16 bg-background-light dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">confirmation_number</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="size-2 bg-primary animate-pulse rounded-full"></span>
<h5 class="font-serif font-bold text-[#2b2b2b]">Reservations</h5>
</div>
<p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                    Review incoming table bookings, approve requests, or manage waitlists.
                </p>
<button class="mt-auto text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View Bookings <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<!-- Module 4: Gallery Manager -->
<!-- Module 5: Testimonials -->
<div class="action-card bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-transparent flex flex-col items-center text-center group cursor-pointer">
<div class="size-16 bg-background-light dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">star</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="size-2 bg-gray-400 rounded-full"></span>
<h5 class="font-serif font-bold text-[#2b2b2b]">Testimonials</h5>
</div>
<p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                    Moderate customer reviews, feature top testimonials, and hide outdated feedback.
                </p>
<button class="mt-auto text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Moderate <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<!-- Module 6: Footer & Contact -->
<div class="action-card bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-transparent flex flex-col items-center text-center group cursor-pointer">
<div class="size-16 bg-background-light dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
<span class="material-symbols-outlined text-4xl">contact_support</span>
</div>
<div class="flex items-center gap-2 mb-2">
<span class="size-2 bg-green-500 rounded-full"></span>
<h5 class="font-serif font-bold text-[#2b2b2b]">Footer &amp; Contact</h5>
</div>
<p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                    Update phone numbers, physical address, and linked social media profiles.
                </p>
<button class="mt-auto text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Update Info <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
<!-- Performance Analytics Section -->
<section class="mt-16">
<h4 class="font-serif font-bold text-[#2b2b2b] tracking-tight mb-8 flex items-center">
        Performance Analytics
        <span class="h-px bg-primary/20 flex-1 ml-4"></span>
</h4>
<!-- Mini Stats Row -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div class="bg-white dark:bg-luxe-dark p-6 rounded-xl shadow-sm border border-primary/5 flex flex-col">
<span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Average Rating</span>
<div class="flex items-center gap-2">
<span class="text-2xl font-serif font-bold">4.8</span>
<span class="material-symbols-outlined text-primary text-sm">grade</span>
</div>
</div>
<div class="bg-white dark:bg-luxe-dark p-6 rounded-xl shadow-sm border border-primary/5 flex flex-col">
<span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Booking Growth</span>
<div class="flex items-center gap-2">
<span class="text-2xl font-serif font-bold text-green-600">+12.5%</span>
<span class="material-symbols-outlined text-green-600 text-sm">trending_up</span>
</div>
</div>
<div class="bg-white dark:bg-luxe-dark p-6 rounded-xl shadow-sm border border-primary/5 flex flex-col">
<span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Peak Booking Time</span>
<div class="flex items-center gap-2">
<span class="text-2xl font-serif font-bold">08:00 PM</span>
<span class="material-symbols-outlined text-primary text-sm">schedule</span>
</div>
</div>
</div>
<!-- Main Analytics Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
<!-- Table Booking Analytics -->
<div class="bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-primary/5">
<div class="flex justify-between items-center mb-8">
<h5 class="font-serif font-bold text-[#2b2b2b]">Table Booking Analytics</h5><p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Weekly reservation trends</p>
<select class="text-xs border-primary/20 rounded-lg bg-transparent text-gray-500 focus:ring-primary focus:border-primary">
<option>Last 30 Days</option>
<option>Last 7 Days</option>
</select>
</div>
<div class="h-64 flex items-end justify-between gap-2 relative">
<!-- Simple CSS Visual Representation of a Line Chart -->
<svg class="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q10,75 20,85 T40,60 T60,70 T80,40 T100,50" fill="none" stroke="#B76E79" stroke-linecap="round" stroke-width="3"></path>
</svg>
<div class="absolute inset-0 flex justify-between items-end opacity-20">
<div class="w-px h-full bg-primary/20"></div><div class="w-px h-full bg-primary/20"></div><div class="w-px h-full bg-primary/20"></div><div class="w-px h-full bg-primary/20"></div><div class="w-px h-full bg-primary/20"></div>
</div>
</div>
<div class="flex justify-between mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
<span>Oct 01</span><span>Oct 15</span><span>Oct 30</span>
</div>
</div>
<!-- Review Sentiment -->
<div class="bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-primary/5">
<h5 class="font-serif font-bold text-[#2b2b2b] mb-8">Review Sentiment</h5><p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Customer satisfaction metrics</p>
<div class="flex items-center justify-around h-64">
<div class="relative size-48 rounded-full border-[16px] border-primary/10 flex items-center justify-center">
<!-- Doughnut chart visualization -->
<div class="absolute inset-[-16px] rounded-full border-[16px] border-primary border-r-transparent border-b-transparent border-l-transparent rotate-[45deg]"></div>
<div class="text-center">
<span class="block text-3xl font-serif font-bold">92%</span>
<span class="text-[10px] text-gray-400 uppercase tracking-widest">Positive</span>
</div>
</div>
<div class="space-y-3">
<div class="flex items-center gap-2 text-xs"><span class="size-2 bg-primary rounded-full"></span> <span>5 Stars</span></div>
<div class="flex items-center gap-2 text-xs"><span class="size-2 bg-primary/60 rounded-full"></span> <span>4 Stars</span></div>
<div class="flex items-center gap-2 text-xs"><span class="size-2 bg-primary/30 rounded-full"></span> <span>3 Stars</span></div>
<div class="flex items-center gap-2 text-xs"><span class="size-2 bg-gray-200 rounded-full"></span> <span>Low</span></div>
</div>
</div>
</div>
</div>
<!-- Booking Heatmap -->
<div class="bg-white dark:bg-luxe-dark p-8 rounded-xl shadow-sm border border-primary/5">
<h5 class="font-serif font-bold text-[#2b2b2b] mb-6">Booking Heatmap <span class="text-xs font-normal text-gray-400 ml-2">(Hourly Density)</span></h5><p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Peak service hour distribution</p>
<div class="grid grid-cols-12 gap-2">
<!-- Heatmap Blocks -->
<div class="h-12 bg-primary/5 rounded-md flex items-center justify-center text-[8px] text-gray-400">11AM</div>
<div class="h-12 bg-primary/10 rounded-md"></div>
<div class="h-12 bg-primary/20 rounded-md"></div>
<div class="h-12 bg-primary/40 rounded-md"></div>
<div class="h-12 bg-primary/60 rounded-md"></div>
<div class="h-12 bg-primary/80 rounded-md"></div>
<div class="h-12 bg-primary rounded-md shadow-lg shadow-primary/20 border-2 border-white"></div>
<div class="h-12 bg-primary/90 rounded-md"></div>
<div class="h-12 bg-primary/70 rounded-md"></div>
<div class="h-12 bg-primary/30 rounded-md"></div>
<div class="h-12 bg-primary/10 rounded-md"></div>
<div class="h-12 bg-primary/5 rounded-md flex items-center justify-center text-[8px] text-gray-400">10PM</div>
</div>
<div class="flex justify-between mt-2 text-[10px] text-gray-400 uppercase tracking-widest">
<span>Lunch Service</span>
<span>Peak Dinner</span>
<span>Late Night</span>
</div>
<div class="mt-6 pt-4 border-t border-primary/5 flex justify-center gap-8 text-[9px] uppercase tracking-widest text-gray-400 font-bold">
<span class="flex items-center gap-2"><span class="size-2 bg-primary/5 rounded-full"></span> Light = Low Traffic</span>
<span class="flex items-center gap-2"><span class="size-2 bg-primary rounded-full"></span> Dark = Peak Hours</span>
</div></div>
</section>
<!-- System Status Bar -->
<footer class="flex items-center justify-between py-6 border-t border-primary/10 text-gray-400 text-[10px] uppercase tracking-widest mt-24">
<div class="flex gap-6">
<span class="flex items-center gap-2"><span class="size-1.5 bg-green-500 rounded-full"></span> System Live</span>
<span class="flex items-center gap-2"><span class="size-1.5 bg-green-500 rounded-full"></span> Database Encrypted</span>
</div>
<p>© 2023 LUXE Restaurant Group | Admin Portal v2.4.0</p>
</footer>
</main>
</body></html>



