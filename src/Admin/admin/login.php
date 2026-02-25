<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE | Admin Login</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c67c7c",
                        "background-light": "#f8f6f2",
                        "background-dark": "#221610",
                        "charcoal": "#2d2d2d",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Public Sans', sans-serif;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6">
<!-- Main Container -->
<div class="w-full max-w-[480px] animate-fade-in">
<!-- Login Card -->
<div class="bg-white dark:bg-zinc-900 shadow-xl rounded-xl overflow-hidden border border-primary/10">
<!-- Branding & Header Section -->
<div class="pt-12 pb-8 px-10 text-center">
<div class="flex justify-center mb-6">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1">restaurant</span>
<h2 class="text-charcoal dark:text-slate-100 text-3xl font-bold tracking-widest uppercase">LUXE</h2>
</div>
</div>
<h1 class="text-charcoal dark:text-slate-100 text-2xl font-semibold tracking-tight">Admin Login</h1>
<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">Enter your credentials to manage your establishment</p>
</div>
<!-- Form Section -->
<form class="px-10 pb-12 space-y-6">
<!-- Email Input -->
<div class="space-y-2">
<label class="block text-sm font-medium text-charcoal dark:text-slate-200">Email Address</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
<input class="block w-full pl-11 pr-4 py-3.5 bg-background-light/50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-charcoal dark:text-white placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="admin@luxe.com" type="email"/>
</div>
</div>
<!-- Password Input -->
<div class="space-y-2">
<div class="flex justify-between items-center">
<label class="block text-sm font-medium text-charcoal dark:text-slate-200">Password</label>
<a class="text-xs font-medium text-primary hover:underline underline-offset-4 transition-colors" href="#">Forgot Password?</a>
</div>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">lock</span>
</div>
<input class="block w-full pl-11 pr-12 py-3.5 bg-background-light/50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-charcoal dark:text-white placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="••••••••" type="password"/>
<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-charcoal dark:hover:text-white transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
<!-- Utilities Row -->
<div class="flex items-center">
<input class="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded cursor-pointer" id="remember-me" name="remember-me" type="checkbox"/>
<label class="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer" for="remember-me">
                        Remember me for 30 days
                    </label>
</div>
<!-- Login Button -->
<button class="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-[0.98]" type="submit">
                    SIGN IN TO DASHBOARD
                </button>
<!-- Footer Link -->
<div class="text-center pt-4">
<p class="text-sm text-slate-500 dark:text-slate-400">
                        Don't have an admin account? 
                        <a class="text-xs font-medium text-primary hover:underline underline-offset-4 transition-colors" href="#">Sign Up</a>
</p>
</div>
</form>
</div>
<!-- Decorative Footer -->
<div class="mt-8 flex flex-col items-center gap-4">
<div class="flex items-center gap-6 text-slate-400 dark:text-slate-500">
<a class="text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Support</a>
<span class="h-1 w-1 rounded-full bg-slate-300"></span>
<a class="text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Privacy Policy</a>
<span class="h-1 w-1 rounded-full bg-slate-300"></span>
<a class="text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Terms</a>
</div>
<p class="text-[10px] uppercase tracking-[0.2em] text-slate-400/60 dark:text-slate-600">© 2024 LUXE Hospitality Group</p>
</div>
</div>
<!-- Background Decoration -->
<div class="fixed top-0 left-0 w-full h-1 bg-primary"></div>
<div class="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
<div class="fixed top-20 right-20 opacity-10 -z-10 pointer-events-none">
<span class="material-symbols-outlined text-[300px] text-primary">local_hotel</span>
</div>
</body></html>
