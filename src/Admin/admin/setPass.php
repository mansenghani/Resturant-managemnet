<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>LUXE | Set New Password</title>
<!-- Tailwind CSS v3 with Forms and Container Queries -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Google Fonts: Playfair Display for headers and Inter for body -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Playfair+Display:wght@600;700&amp;display=swap" rel="stylesheet"/>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'luxe-ivory': '#F8F6F2',
            'luxe-charcoal': '#1C1C1C',
            'luxe-rose': '#B76E79',
            'luxe-rose-hover': '#A65D68',
            'luxe-grey': '#E5E7EB',
          },
          fontFamily: {
            'serif': ['"Playfair Display"', 'serif'],
            'sans': ['Inter', 'sans-serif'],
          },
          borderRadius: {
            'luxe': '14px',
          },
        }
      }
    }
  </script>
<style data-purpose="custom-transitions">
    .hover-lift {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .hover-lift:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(183, 110, 121, 0.3);
    }
  </style>
</head>
<body class="bg-luxe-ivory font-sans text-luxe-charcoal min-h-screen flex items-center justify-center p-6">
<!-- BEGIN: New Password Card -->
<main class="w-full max-w-md" data-purpose="auth-container">
<div class="bg-white rounded-luxe shadow-sm p-8 md:p-12">
<!-- BEGIN: Header Section -->
<header class="text-center mb-10" data-purpose="card-header">
<!-- LUXE Logo Placeholder -->
<div class="flex justify-center mb-6">
<div class="text-3xl font-serif tracking-widest border-y border-luxe-charcoal py-2 px-4">
            LUXE
          </div>
</div>
<h1 class="text-2xl font-serif font-bold mb-2">Set New Password</h1>
<p class="text-sm text-gray-500 font-light">
          Please enter a strong password to secure your account.
        </p>
</header>
<!-- END: Header Section -->
<!-- BEGIN: Password Form -->
<form action="#" class="space-y-6" data-purpose="password-reset-form" method="POST">
<!-- New Password Field -->
<div class="space-y-2">
<label class="block text-xs uppercase tracking-wider font-semibold text-gray-600" for="new-password">
            New Password
          </label>
<div class="relative">
<input class="w-full px-4 py-3 rounded-luxe border-luxe-grey focus:ring-luxe-rose focus:border-luxe-rose transition-colors duration-200" id="new-password" name="new-password" placeholder="••••••••" required="" type="password"/>
<!-- Password Visibility Toggle -->
<button class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-luxe-rose" data-purpose="password-visibility-toggle" id="togglePassword" type="button">
<svg class="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</button>
</div>
</div>
<!-- Confirm Password Field -->
<div class="space-y-2">
<label class="block text-xs uppercase tracking-wider font-semibold text-gray-600" for="confirm-password">
            Confirm New Password
          </label>
<input class="w-full px-4 py-3 rounded-luxe border-luxe-grey focus:ring-luxe-rose focus:border-luxe-rose transition-colors duration-200" id="confirm-password" name="confirm-password" placeholder="••••••••" required="" type="password"/>
</div>
<!-- Submit Button -->
<div class="pt-4">
<button class="w-full bg-luxe-rose hover:bg-luxe-rose-hover text-white font-medium py-3.5 px-4 rounded-luxe shadow-md hover-lift uppercase tracking-widest text-sm transition-all" type="submit">
            Update Password
          </button>
</div>
</form>
<!-- END: Password Form -->
<!-- BEGIN: Footer Navigation -->
<footer class="mt-10 text-center" data-purpose="card-footer">
<a class="text-sm text-gray-400 hover:text-luxe-rose transition-colors duration-200 flex items-center justify-center gap-2 group" href="/login">
<svg class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
          Back to Login
        </a>
</footer>
<!-- END: Footer Navigation -->
</div>
</main>
<!-- END: New Password Card -->
<script data-purpose="interactivity">
    // Simple toggle functionality for password visibility
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('new-password');

    toggleBtn.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Update icon visual state
      this.classList.toggle('text-luxe-rose');
    });
  </script>
</body></html>
