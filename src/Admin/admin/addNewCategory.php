<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE Rose Edition - Menu Management</title>
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts for Serif and Sans fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'luxe-rose': '#B76E79',
            'luxe-rose-light': '#F3E5E7',
            'luxe-charcoal': '#333333',
            'luxe-ivory': '#F8F5F2',
            'luxe-gray': '#9CA3AF',
            'luxe-bg-muted': '#F9F7F5'
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
      font-family: 'Inter', sans-serif;
      background-color: #F8F5F2;
    }
    .serif-title {
      font-family: 'Playfair Display', serif;
    }
    /* Simple toggle switch styling */
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
<body class="text-luxe-charcoal overflow-hidden">
<!-- BEGIN: Dashboard Layout Container (Dimmed Background) -->
<div class="flex h-screen w-full filter blur-sm pointer-events-none select-none">
<!-- BEGIN: Sidebar -->
<?php include 'sidebar.php'; ?>
<!-- END: Sidebar -->
<!-- BEGIN: Main Dashboard Content -->
<main class="flex-1 p-12 overflow-y-auto">
<div class="flex justify-between items-start mb-10">
<div>
<h2 class="text-4xl serif-title font-semibold mb-2">Menu Management</h2>
<p class="text-gray-500">Manage dishes, categories, pricing and visibility.</p>
</div>
<button class="bg-luxe-rose text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg shadow-luxe-rose/20">
<svg class="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          Add New Dish
        </button>
</div>
<!-- Filters Placeholder -->
<div class="flex gap-4 mb-8 overflow-x-auto pb-2">
<span class="px-6 py-2 bg-white text-luxe-rose border border-luxe-rose/20 rounded-full font-medium whitespace-nowrap">All Dishes</span>
<span class="px-6 py-2 text-gray-400 font-medium whitespace-nowrap">Appetizers</span>
<span class="px-6 py-2 text-gray-400 font-medium whitespace-nowrap">Main Course</span>
<span class="px-6 py-2 text-gray-400 font-medium whitespace-nowrap">Desserts</span>
</div>
<!-- Table Container -->
<div class="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 min-h-[500px]">
<!-- Table structure placeholder matching original screenshot -->
</div>
</main>
<!-- END: Main Dashboard Content -->
</div>
<!-- END: Dashboard Layout Container -->
<!-- BEGIN: Modal Overlay -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]" data-purpose="modal-overlay">
<!-- BEGIN: Add New Category Modal -->
<div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-0 overflow-hidden transform transition-all" data-purpose="category-modal">
<!-- Modal Header -->
<div class="px-8 pt-8 pb-4">
<h3 class="text-2xl serif-title font-bold text-luxe-charcoal">Add New Category</h3>
<p class="text-sm text-gray-400 mt-1">Organize your menu with logical groupings.</p>
</div>
<!-- Modal Body (Form) -->
<form class="px-8 py-4 space-y-6">
<!-- Category Name Field -->
<div class="space-y-1.5" data-purpose="form-group">
<label class="block text-xs font-semibold uppercase tracking-wider text-luxe-charcoal/70" for="category-name">Category Name</label>
<input class="w-full px-4 py-3 bg-luxe-bg-muted border-none rounded-xl focus:ring-1 focus:ring-luxe-rose placeholder:text-gray-300 transition-all" id="category-name" name="category-name" placeholder="e.g. Signature Cocktails" type="text"/>
</div>
<!-- Category Slug Field -->
<div class="space-y-1.5" data-purpose="form-group">
<label class="block text-xs font-semibold uppercase tracking-wider text-luxe-charcoal/70" for="category-slug">Category Slug</label>
<input class="w-full px-4 py-3 bg-luxe-bg-muted border-none rounded-xl focus:ring-1 focus:ring-luxe-rose placeholder:text-gray-300 transition-all" id="category-slug" name="category-slug" placeholder="e.g. signature-cocktails" type="text"/>
</div>
<!-- Row: Display Order & Status -->

<!-- Modal Footer Actions -->
<div class="flex items-center justify-end gap-4 pt-6 pb-4">
<button onclick="window.location.href='menumanage.php'" class="px-6 py-3 border border-luxe-rose text-luxe-rose font-medium rounded-xl hover:bg-luxe-rose-light transition-colors" type="button">
            Cancel
          </button>
<button class="px-8 py-3 bg-luxe-rose text-white font-medium rounded-xl shadow-lg shadow-luxe-rose/20 hover:bg-[#a65d68] transition-colors" type="submit">
            Save Category
          </button>
</div>
</form>
</div>
<!-- END: Add New Category Modal -->
</div>
<!-- END: Modal Overlay -->
</body></html>

