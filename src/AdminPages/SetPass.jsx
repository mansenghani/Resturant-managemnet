import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const SetPass = () => {
  useEffect(() => {

    // Simple toggle functionality for password visibility
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('new-password');

    toggleBtn.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Update icon visual state
      this.classList.toggle('text-luxe-rose');
    });
  

  }, []);

  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- BEGIN: New Password Card --> */}
<main className="w-full max-w-md" data-purpose="auth-container">
<div className="bg-white rounded-luxe shadow-sm p-8 md:p-12">
{/* <!-- BEGIN: Header Section --> */}
<header className="text-center mb-10" data-purpose="card-header">
{/* <!-- LUXE Logo Placeholder --> */}
<div className="flex justify-center mb-6">
<div className="text-3xl font-serif tracking-widest border-y border-luxe-charcoal py-2 px-4">
            LUXE
          </div>
</div>
<h1 className="text-2xl font-serif font-bold mb-2">Set New Password</h1>
<p className="text-sm text-gray-500 font-light">
          Please enter a strong password to secure your account.
        </p>
</header>
{/* <!-- END: Header Section --> */}
{/* <!-- BEGIN: Password Form --> */}
<form action="#" className="space-y-6" data-purpose="password-reset-form" method="POST">
{/* <!-- New Password Field --> */}
<div className="space-y-2">
<label className="block text-xs uppercase tracking-wider font-semibold text-gray-600" htmlFor="new-password">
            New Password
          </label>
<div className="relative">
<input className="w-full px-4 py-3 rounded-luxe border-luxe-grey focus:ring-luxe-rose focus:border-luxe-rose transition-colors duration-200" id="new-password" name="new-password" placeholder="••••••••" required="" type="password"/>
{/* <!-- Password Visibility Toggle --> */}
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-luxe-rose" data-purpose="password-visibility-toggle" id="togglePassword" type="button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</button>
</div>
</div>
{/* <!-- Confirm Password Field --> */}
<div className="space-y-2">
<label className="block text-xs uppercase tracking-wider font-semibold text-gray-600" htmlFor="confirm-password">
            Confirm New Password
          </label>
<input className="w-full px-4 py-3 rounded-luxe border-luxe-grey focus:ring-luxe-rose focus:border-luxe-rose transition-colors duration-200" id="confirm-password" name="confirm-password" placeholder="••••••••" required="" type="password"/>
</div>
{/* <!-- Submit Button --> */}
<div className="pt-4">
<button className="w-full bg-luxe-rose hover:bg-luxe-rose-hover text-white font-medium py-3.5 px-4 rounded-luxe shadow-md hover-lift uppercase tracking-widest text-sm transition-all" type="submit">
            Update Password
          </button>
</div>
</form>
{/* <!-- END: Password Form --> */}
{/* <!-- BEGIN: Footer Navigation --> */}
<footer className="mt-10 text-center" data-purpose="card-footer">
<a className="text-sm text-gray-400 hover:text-luxe-rose transition-colors duration-200 flex items-center justify-center gap-2 group" href="/login">
<svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
          Back to Login
        </a>
</footer>
{/* <!-- END: Footer Navigation --> */}
</div>
</main>
{/* <!-- END: New Password Card --> */}


    </div>
  );
}

export default SetPass;