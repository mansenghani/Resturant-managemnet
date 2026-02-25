import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Login = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- Main Container --> */}
<div className="w-full max-w-[480px] animate-fade-in">
{/* <!-- Login Card --> */}
<div className="bg-white dark:bg-zinc-900 shadow-xl rounded-xl overflow-hidden border border-primary/10">
{/* <!-- Branding & Header Section --> */}
<div className="pt-12 pb-8 px-10 text-center">
<div className="flex justify-center mb-6">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings":"'FILL' 1"}}>restaurant</span>
<h2 className="text-charcoal dark:text-slate-100 text-3xl font-bold tracking-widest uppercase">LUXE</h2>
</div>
</div>
<h1 className="text-charcoal dark:text-slate-100 text-2xl font-semibold tracking-tight">Admin Login</h1>
<p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Enter your credentials to manage your establishment</p>
</div>
{/* <!-- Form Section --> */}
<form className="px-10 pb-12 space-y-6">
{/* <!-- Email Input --> */}
<div className="space-y-2">
<label className="block text-sm font-medium text-charcoal dark:text-slate-200">Email Address</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 bg-background-light/50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-charcoal dark:text-white placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="admin@luxe.com" type="email"/>
</div>
</div>
{/* <!-- Password Input --> */}
<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="block text-sm font-medium text-charcoal dark:text-slate-200">Password</label>
<a className="text-xs font-medium text-primary hover:underline underline-offset-4 transition-colors" href="#">Forgot Password?</a>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">lock</span>
</div>
<input className="block w-full pl-11 pr-12 py-3.5 bg-background-light/50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-charcoal dark:text-white placeholder:text-slate-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="••••••••" type="password"/>
<button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-charcoal dark:hover:text-white transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
{/* <!-- Utilities Row --> */}
<div className="flex items-center">
<input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded cursor-pointer" id="remember-me" name="remember-me" type="checkbox"/>
<label className="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember-me">
                        Remember me for 30 days
                    </label>
</div>
{/* <!-- Login Button --> */}
<button className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-[0.98]" type="submit">
                    SIGN IN TO DASHBOARD
                </button>
{/* <!-- Footer Link --> */}
<div className="text-center pt-4">
<p className="text-sm text-slate-500 dark:text-slate-400">
                        Don't have an admin account? 
                        <a className="text-xs font-medium text-primary hover:underline underline-offset-4 transition-colors" href="#">Sign Up</a>
</p>
</div>
</form>
</div>
{/* <!-- Decorative Footer --> */}
<div className="mt-8 flex flex-col items-center gap-4">
<div className="flex items-center gap-6 text-slate-400 dark:text-slate-500">
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Support</a>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Privacy Policy</a>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#">Terms</a>
</div>
<p className="text-[10px] uppercase tracking-[0.2em] text-slate-400/60 dark:text-slate-600">© 2024 LUXE Hospitality Group</p>
</div>
</div>
{/* <!-- Background Decoration --> */}
<div className="fixed top-0 left-0 w-full h-1 bg-primary"></div>
<div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
<div className="fixed top-20 right-20 opacity-10 -z-10 pointer-events-none">
<span className="material-symbols-outlined text-[300px] text-primary">local_hotel</span>
</div>

    </div>
  );
}

export default Login;