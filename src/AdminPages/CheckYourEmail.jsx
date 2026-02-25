import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const CheckYourEmail = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- BEGIN: MainContent --> */}
<main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
{/* <!-- Background Decoration: Subtle bed icon similar to SCREEN_204 --> */}
<div className="absolute right-[-5%] top-1/4 opacity-[0.03] pointer-events-none hidden lg:block">
<svg fill="currentColor" height="400" viewBox="0 0 24 24" width="400">
<path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM20 7H11v7H4V6H2v15h2v-3h16v3h2v-9c0-2.21-1.79-4-4-4z" />
</svg>
</div>
{/* <!-- BEGIN: SuccessCard --> */}
<section className="w-full max-w-md bg-white rounded-3xl p-10 luxe-card text-center z-10" data-purpose="success-message-container">
{/* <!-- Icon Wrapper --> */}
<div className="mb-8 flex justify-center">
<div className="w-20 h-20 bg-luxe-ivory rounded-full flex items-center justify-center" data-purpose="success-icon">
<svg className="h-10 w-10 text-luxe-rose" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
</div>
{/* <!-- Heading --> */}
<h1 className="font-serif text-3xl mb-4 text-[#1a1a1a]">Check Your Email</h1>
{/* <!-- Subtext --> */}
<p className="text-luxe-text-muted text-sm leading-relaxed mb-10 px-4">
        A password reset link has been sent to your email address. Please follow the instructions to reset your password.
      </p>
{/* <!-- Action Button --> */}
<div className="mb-8">
<a className="inline-block w-full bg-luxe-rose hover:bg-luxe-rose-dark text-white font-medium py-3.5 rounded-xl transition-colors duration-200 shadow-md" href="#">
          Back to Login
        </a>
</div>
{/* <!-- Secondary Info --> */}
<p className="text-xs text-luxe-text-muted leading-relaxed">
        Didn't receive the email? <br className="sm:hidden"/>
        Check your <span className="text-luxe-rose cursor-pointer hover:underline">spam folder</span> or 
        <a className="text-luxe-rose font-medium hover:underline" href="#">try again</a>.
      </p>
</section>
{/* <!-- END: SuccessCard --> */}
</main>
{/* <!-- END: MainContent --> */}
{/* <!-- BEGIN: Footer --> */}
<footer className="py-10 text-center" data-purpose="page-footer">
<div className="flex justify-center space-x-6 text-[10px] tracking-widest uppercase text-luxe-text-muted mb-4 font-medium">
<a className="hover:text-luxe-rose transition-colors" href="#">Support</a>
<span>•</span>
<a className="hover:text-luxe-rose transition-colors" href="#">Privacy Policy</a>
<span>•</span>
<a className="hover:text-luxe-rose transition-colors" href="#">Terms</a>
</div>
<p className="text-[10px] tracking-[0.15em] uppercase text-luxe-text-muted opacity-70">
      © 2024 LUXE HOSPITALITY GROUP
    </p>
</footer>
{/* <!-- END: Footer --> */}

    </div>
  );
}

export default CheckYourEmail;