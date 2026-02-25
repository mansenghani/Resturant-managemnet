import os

def replace_in_file(filepath, old_str, new_str):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully patched {filepath}")
    else:
        print(f"Could not find target string in {filepath}")

# 1. dashboard.php
dash_old = """<header class="flex justify-between items-start mb-10">
<div>
<h2 class="font-serif font-bold text-[#2b2b2b] tracking-tight">Admin Dashboard</h2>
<p class="text-gray-500 dark:text-gray-400 mt-1">Manage website content and reservations</p>
</div>"""

dash_new = """<header class="flex justify-between items-start mb-10">
<div>
<?php
$breadcrumb = "DASHBOARD / HOME";
$title = "Admin Dashboard";
include 'pageHeader.php';
?>
<p class="text-gray-500 dark:text-gray-400 mt-1">Manage website content and reservations</p>
</div>"""
replace_in_file(r"c:\xampp\htdocs\admin\dashboard.php", dash_old, dash_new)

# 2. tableslot.php
tab_old = """<header class="h-20 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/5 px-8 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
<div>
<h2 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Table Slot Settings</h2>
<p class="text-sm text-slate-500 dark:text-slate-400 font-medium">Manage operational capacity and peak hour designations.</p>
</div>"""

tab_new = """<header class="h-20 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/5 px-8 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
<div>
<?php
$breadcrumb = "DASHBOARD / TABLE SLOTS";
$title = "Table Slot Settings";
include 'pageHeader.php';
?>
<p class="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Manage operational capacity and peak hour designations.</p>
</div>"""
replace_in_file(r"c:\xampp\htdocs\admin\tableslot.php", tab_old, tab_new)

# 3. setting.php
set_old = """<!-- Header -->
<header class="mb-10">
<nav class="flex gap-2 text-sm font-semibold tracking-wider text-slate-400 uppercase mb-4 text-[#5a5a5a]">
<a class="hover:text-primary transition-colors" href="#">DASHBOARD</a>
<span>/</span>
<span class="text-charcoal dark:text-slate-200">SETTINGS</span>
</nav>
<h2 class="text-4xl font-extrabold text-charcoal dark:text-white mb-2 tracking-tight text-[#2b2b2b]">System Settings</h2>
<p class="text-slate-500 dark:text-slate-400 text-lg text-[#5a5a5a]">Manage restaurant configuration, admin preferences, and system controls.</p>
</header>"""

set_new = """<!-- Header -->
<header class="mb-10">
<?php
$breadcrumb = "DASHBOARD / SETTINGS";
$title = "System Settings";
include 'pageHeader.php';
?>
<p class="text-slate-500 dark:text-slate-400 text-lg text-[#5a5a5a] mt-2">Manage restaurant configuration, admin preferences, and system controls.</p>
</header>"""
replace_in_file(r"c:\xampp\htdocs\admin\setting.php", set_old, set_new)
