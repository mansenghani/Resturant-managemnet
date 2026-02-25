import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Setting = () => {
  useEffect(() => {

    const logoInput = document.getElementById('logoInput');
    const logoPreview = document.getElementById('logoPreview');
    const editLogoBtn = document.getElementById('editLogoBtn');
    const uploadLogoLink = document.getElementById('uploadLogoLink');

    const triggerUpload = () => logoInput.click();

    editLogoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerUpload();
    });

    uploadLogoLink.addEventListener('click', (e) => {
        e.preventDefault();
        triggerUpload();
    });

    logoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (!file) return;

        // Validation
        const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
        if (!validTypes.includes(file.type)) {
            alert('Please select a valid image file (JPG, PNG, or SVG).');
            this.value = '';
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert('Maximum file size is 2MB');
            this.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            logoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });


  }, []);

  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- Sidebar Navigation --> */}
<Sidebar />
{/* <!-- Main Content Area --> */}
<main className="flex-1 p-8 overflow-y-auto">
{/* <!-- Header --> */}
<header className="mb-10">
<PageHeader breadcrumb="DASHBOARD / SETTINGS" title="System Settings" />
<p className="text-slate-500 dark:text-slate-400 text-lg text-[#5a5a5a] mt-2">Manage restaurant configuration, admin preferences, and system controls.</p>
</header>
{/* <!-- Settings Grid --> */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* <!-- 1. Restaurant Information --> */}
<section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border dark:border-slate-800 overflow-hidden bg-white shadow-sm">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center">
<h3 className="text-xl font-bold text-charcoal dark:text-white flex items-center gap-2 text-[#2b2b2b]">
<span className="material-symbols-outlined text-primary" style={{"color":"#B76E79"}}>store</span>
                        Restaurant Information
                    </h3>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center gap-6 mb-6">
<input type="file" id="logoInput" hidden accept=".jpg,.jpeg,.png,.svg" />
<div className="relative group">
<div className="size-24 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
<img id="logoPreview" className="w-full h-full object-cover" data-alt="Dashboard Data Density Heatmap" src="{{DATA:IMAGE:IMAGE_23}}"/>
</div>
<button id="editLogoBtn" className="absolute -bottom-2 -right-2 size-8 bg-primary text-white rounded-full shadow-lg flex items-center justify-center btn-hover-lift" style={{"backgroundColor":"#c67c7c","color":"white"}}>
<span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
<div>
<p className="text-sm font-bold text-charcoal dark:text-slate-200 mb-1 text-[#2b2b2b]">Restaurant Logo</p>
<p className="text-xs text-slate-500 mb-2 text-[#5a5a5a]">JPG, PNG or SVG. Max size 2MB.</p>
<button id="uploadLogoLink" className="text-primary text-sm font-bold hover:underline" style={{"color":"#B76E79"}}>Upload new logo</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Restaurant Name</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="text" value="LUXE Fine Dining"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Email Address</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="email" value="contact@luxedining.com"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Phone Number</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="tel" value="+91 98765 43210"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Website</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="url" value="https://luxedining.com"/>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Address</label>
<textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" rows="2">123 Luxury Lane, Rose Garden Estate, Delhi - 110001</textarea>
</div>
<div className="pt-4">
<button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold shadow-lg shadow-primary/20 transition-all btn-hover-lift" style={{"backgroundColor":"#c67c7c","color":"white"}}>Save Changes</button>
</div>
</div>
</section>
{/* <!-- 2. Admin Account Settings --> */}
<section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border dark:border-slate-800 overflow-hidden bg-white shadow-sm">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
<h3 className="text-xl font-bold text-charcoal dark:text-white flex items-center gap-2 text-[#2b2b2b]">
<span className="material-symbols-outlined text-primary" style={{"color":"#B76E79"}}>account_circle</span>
                        Admin Account Settings
                    </h3>
</div>
<div className="p-6 space-y-6">
<div className="space-y-4">
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Full Name</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="text" value="Ananya Sharma"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Login Email</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="email" value="admin@luxedining.com"/>
</div>
<button className="px-6 py-2 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white rounded-lg font-bold hover:opacity-90 transition-all">Update Profile</button>
</div>
<div className="pt-6 border-t border-slate-100 dark:border-slate-800">
<p className="text-sm font-bold text-charcoal dark:text-white mb-4 text-[#2b2b2b]">Security</p>
<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
<div>
<p className="font-bold text-charcoal dark:text-slate-200 text-[#2b2b2b]">Password</p>
<p className="text-xs text-slate-500 text-[#5a5a5a]">Last updated 15 days ago</p>
</div>
<button className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-charcoal dark:text-white rounded-lg font-bold hover:bg-white dark:hover:bg-slate-700 transition-all text-[#2b2b2b]">Change Password</button>
</div>
</div>
</div>
</section>
{/* <!-- 3. Booking Settings --> */}
<section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border dark:border-slate-800 overflow-hidden bg-white shadow-sm">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
<h3 className="text-xl font-bold text-charcoal dark:text-white flex items-center gap-2 text-[#2b2b2b]">
<span className="material-symbols-outlined text-primary" style={{"color":"#B76E79"}}>book_online</span>
                        Booking Settings
                    </h3>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-charcoal dark:text-white text-[#2b2b2b]">Online Reservations</p>
<p className="text-xs text-slate-500 text-[#5a5a5a]">Allow customers to book tables from website</p>
</div>
<label className="relative inline-flex items-center cursor-pointer text-[#5a5a5a]">
<input checked="" className="sr-only peer text-[#2b2b2b]" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" style={{"backgroundColor":"#c67c7c"}}></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-bold text-charcoal dark:text-white text-[#2b2b2b]">Auto Confirmation</p>
<p className="text-xs text-slate-500 text-[#5a5a5a]">Automatically confirm bookings if tables are available</p>
</div>
<label className="relative inline-flex items-center cursor-pointer text-[#5a5a5a]">
<input className="sr-only peer text-[#2b2b2b]" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" style={{"backgroundColor":"#c67c7c"}}></div>
</label>
</div>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Max Tables</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]" type="number" value="24"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Booking Duration</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]">
<option>1 Hour</option>
<option selected="">1.5 Hours</option>
<option>2 Hours</option>
<option>3 Hours</option>
</select>
</div>
</div>
<button className="w-full py-3 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-bold transition-all" style={{"backgroundColor":"rgba(183, 110, 121, 0.1)","color":"#B76E79"}}>Save Booking Settings</button>
</div>
</section>
{/* <!-- 4. Notification Settings --> */}
<section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border dark:border-slate-800 overflow-hidden bg-white shadow-sm">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
<h3 className="text-xl font-bold text-charcoal dark:text-white flex items-center gap-2 text-[#2b2b2b]">
<span className="material-symbols-outlined text-primary" style={{"color":"#B76E79"}}>notifications_active</span>
                        Notification Settings
                    </h3>
</div>
<div className="p-6 space-y-5">
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 text-[#5a5a5a]">mail</span>
<span className="font-medium text-slate-700 dark:text-slate-200">Email Notifications</span>
</div>
<label className="relative inline-flex items-center cursor-pointer text-[#5a5a5a]">
<input checked="" className="sr-only peer text-[#2b2b2b]" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" style={{"backgroundColor":"#c67c7c"}}></div>
</label>
</div>
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 text-[#5a5a5a]">notification_add</span>
<span className="font-medium text-slate-700 dark:text-slate-200">New Reservation Alert</span>
</div>
<label className="relative inline-flex items-center cursor-pointer text-[#5a5a5a]">
<input checked="" className="sr-only peer text-[#2b2b2b]" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" style={{"backgroundColor":"#c67c7c"}}></div>
</label>
</div>
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 text-[#5a5a5a]">rate_review</span>
<span className="font-medium text-slate-700 dark:text-slate-200">New Review Notification</span>
</div>
<label className="relative inline-flex items-center cursor-pointer text-[#5a5a5a]">
<input className="sr-only peer text-[#2b2b2b]" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" style={{"backgroundColor":"#c67c7c"}}></div>
</label>
</div>
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 text-[#5a5a5a]">assessment</span>
<span className="font-medium text-slate-700 dark:text-slate-200">Daily Report Alert</span>
</div>
<label className="relative inline-flex items-center cursor-pointer text-[#5a5a5a]">
<input checked="" className="sr-only peer text-[#2b2b2b]" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" style={{"backgroundColor":"#c67c7c"}}></div>
</label>
</div>
<div className="pt-4">
<button className="w-full py-3 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white rounded-lg font-bold transition-all">Save Notification Settings</button>
</div>
</div>
</section>
{/* <!-- 5. System Preferences --> */}
<section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border dark:border-slate-800 overflow-hidden lg:col-span-2 bg-white shadow-sm">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
<h3 className="text-xl font-bold text-charcoal dark:text-white flex items-center gap-2 text-[#2b2b2b]">
<span className="material-symbols-outlined text-primary" style={{"color":"#B76E79"}}>tune</span>
                        System Preferences
                    </h3>
</div>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Currency</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]">
<option value="INR">INR (?)</option>
<option value="USD">USD ($)</option>
<option value="EUR">EUR (€)</option>
</select>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-600 dark:text-slate-400 text-[#5a5a5a]">Time Format</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-[#2b2b2b]">
<option>12-hour (1:00 PM)</option>
<option>24-hour (13:00)</option>
</select>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="px-8 py-2.5 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 transition-all btn-hover-lift" style={{"backgroundColor":"#c67c7c","color":"white"}}>Save Preferences</button>
</div>
</div>
</section>
{/* <!-- 6. Danger Zone --> */}
<section className="bg-red-50/30 dark:bg-red-900/10 rounded-xl shadow-sm border-2 border-dashed border-red-200 dark:border-red-900/30 overflow-hidden lg:col-span-2">
<div className="p-6 border-b border-red-100 dark:border-red-900/20">
<h3 className="text-xl font-bold text-danger flex items-center gap-2 text-[#2b2b2b]">
<span className="material-symbols-outlined">warning</span>
                        Danger Zone
                    </h3>
<p className="text-sm text-red-600/70 dark:text-red-400/70">These actions are destructive and cannot be undone.</p>
</div>
<div className="p-6 space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-red-100 dark:border-red-900/30 gap-4">
<div>
<p className="font-bold text-charcoal dark:text-white text-[#2b2b2b]">Reset System Settings</p>
<p className="text-sm text-slate-500 text-[#5a5a5a]">Restore all configuration to factory defaults.</p>
</div>
<button className="px-6 py-2 border border-danger text-danger hover:bg-danger hover:text-white rounded-lg font-bold transition-all">Reset</button>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-red-100 dark:border-red-900/30 gap-4">
<div>
<p className="font-bold text-charcoal dark:text-white text-[#2b2b2b]">Delete All Reports</p>
<p className="text-sm text-slate-500 text-[#5a5a5a]">Purge all historical analytics and report data.</p>
</div>
<button className="px-6 py-2 border border-danger text-danger hover:bg-danger hover:text-white rounded-lg font-bold transition-all">Clear Data</button>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-red-100 dark:border-red-900/30 gap-4">
<div>
<p className="font-bold text-charcoal dark:text-white text-[#2b2b2b]">Logout All Sessions</p>
<p className="text-sm text-slate-500 text-[#5a5a5a]">Forcefully end all active admin login sessions.</p>
</div>
<button className="px-6 py-2 bg-danger text-white hover:bg-danger/90 rounded-lg font-bold transition-all">Logout All</button>
</div>
</div>
</section>
</div>
<footer className="mt-12 text-center text-slate-400 text-sm font-medium text-[#5a5a5a]">
            © 2024 LUXE Fine Dining. Rose Edition Admin Panel v2.4.0
        </footer>
</main>


    </div>
  );
}

export default Setting;