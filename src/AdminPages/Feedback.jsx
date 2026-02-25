import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Feedback = () => {
  useEffect(() => {


    const closeModalBtn = document.getElementById('modalCloseBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('feedbackModal').classList.add('hidden');
        });
    }

    const modalRejectBtn = document.getElementById('modalRejectBtn');
    if (modalRejectBtn) {
        modalRejectBtn.addEventListener('click', () => {
            const el = document.getElementById('modalStatus');
            el.textContent = 'Rejected';
            el.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-600 border border-rose-100';
            setTimeout(() => document.getElementById('feedbackModal').classList.add('hidden'), 500);
        });
    }

    const modalApproveBtn = document.getElementById('modalApproveBtn');
    if (modalApproveBtn) {
        modalApproveBtn.addEventListener('click', () => {
            const el = document.getElementById('modalStatus');
            el.textContent = 'Approved';
            el.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100';
            setTimeout(() => document.getElementById('feedbackModal').classList.add('hidden'), 500);
        });
    }
    const tableBody = document.querySelector('tbody');
    if (!tableBody) return;

    tableBody.addEventListener('click', function(e) {
        const btn = e.target.closest('button');
        if (!btn) return;
        
        const row = btn.closest('tr');
        if (!row) return;

        const title = btn.getAttribute('title');
        
        if (title === 'Approve') {
            if (confirm("Are you sure you want to approve this review?")) {
                updateStatus(row, 'Approved');
                hideActionButtons(row);
            }
        } else if (title === 'Reject') {
            if (confirm("Are you sure you want to reject this review?")) {
                updateStatus(row, 'Rejected');
                hideActionButtons(row);
            }
        } else if (title === 'View' || title === 'View Details') {
            document.getElementById('modalGuestName').textContent = row.dataset.name;
            document.getElementById('modalEmail').textContent = row.dataset.email;
            document.getElementById('modalInitials').textContent = row.dataset.initials;
            document.getElementById('modalReviewDate').textContent = row.dataset.date;
            document.getElementById('modalReviewContent').textContent = '"' + row.dataset.review + '"';
            document.getElementById('modalVisitDate').textContent = row.dataset.visit;
            document.getElementById('modalTableNo').textContent = row.dataset.table;
            document.getElementById('modalServiceStaff').textContent = row.dataset.staff;
            
            const ratingContainer = document.getElementById('modalRating');
            const ratingVal = parseInt(row.dataset.rating) || 5;
            ratingContainer.innerHTML = '';
            for(let i=1; i<=5; i++) {
                if(i <= ratingVal) {
                    ratingContainer.innerHTML += `<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`;
                } else {
                    ratingContainer.innerHTML += `<svg className="w-5 h-5 text-[#D1D5DB] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`;
                }
            }

            const statusEl = document.getElementById('modalStatus');
            const statusTxt = row.dataset.status;
            statusEl.textContent = statusTxt;
            if (statusTxt.toLowerCase() === 'approved') {
                statusEl.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100';
            } else if (statusTxt.toLowerCase() === 'rejected') {
                statusEl.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-600 border border-rose-100';
            } else {
                statusEl.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200';
            }
            
            document.getElementById('feedbackModal').classList.remove('hidden');
        } else if (title === 'Delete') {
            if (confirm("Are you sure you want to delete this review?")) {
                row.style.transition = 'opacity 0.3s ease';
                row.style.opacity = '0';
                setTimeout(() => row.remove(), 300);
            }
        }
    });

    function updateStatus(row, statusStr) {
        const statusCell = row.querySelector('td:nth-child(4)');
        if (!statusCell) return;
        
        const badge = statusCell.querySelector('span');
        if (!badge) return;
        
        if (statusStr === 'Approved') {
            badge.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20 bg-emerald-50 text-emerald-600 border-emerald-100';
            badge.innerText = 'Approved';
        } else if (statusStr === 'Rejected') {
            badge.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20 bg-rose-50 text-rose-600 border-rose-100';
            badge.innerText = 'Rejected';
        }
    }

    function hideActionButtons(row) {
        const approveBtn = row.querySelector('button[title="Approve"]');
        const rejectBtn = row.querySelector('button[title="Reject"]');
        if (approveBtn) approveBtn.style.display = 'none';
        if (rejectBtn) rejectBtn.style.display = 'none';
    }

    // Custom Dropdown Logic
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        const menu = dropdown.querySelector('.dropdown-menu');
        const valueSpan = dropdown.querySelector('.dropdown-value');
        const icon = dropdown.querySelector('.dropdown-icon');
        const items = dropdown.querySelectorAll('.dropdown-item');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.contains('opacity-100');
            
            // Close all other dropdowns
            document.querySelectorAll('.custom-dropdown .dropdown-menu').forEach(m => {
                m.classList.remove('opacity-100', 'visible', 'translate-y-0');
                m.classList.add('opacity-0', 'invisible', 'translate-y-[-5px]');
            });
            document.querySelectorAll('.custom-dropdown .dropdown-icon').forEach(i => {
                i.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                menu.classList.remove('opacity-0', 'invisible', 'translate-y-[-5px]');
                menu.classList.add('opacity-100', 'visible', 'translate-y-0');
                icon.style.transform = 'rotate(180deg)';
                btn.focus();
            }
        });
        
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                valueSpan.textContent = item.textContent;
                
                menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                menu.classList.add('opacity-0', 'invisible', 'translate-y-[-5px]');
                icon.style.transform = 'rotate(0deg)';
                
            });
        });
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown .dropdown-menu').forEach(menu => {
            menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
            menu.classList.add('opacity-0', 'invisible', 'translate-y-[-5px]');
        });
        document.querySelectorAll('.custom-dropdown .dropdown-icon').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    });


  }, []);

  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      <Sidebar />
{/* <!-- BEGIN: MainHeader --> */}
<header className="border-b border-luxe-border bg-luxe-beige/80 backdrop-blur-md z-50 px-8 py-6 bg-luxe-beige/90">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
{/* <!-- Breadcrumbs and Title --> */}
<PageHeader breadcrumb="DASHBOARD / REVIEWS" title="Customer Feedback Management" />
{/* <!-- Search Bar --> */}
<div className="relative w-full md:w-96" data-purpose="header-search">
<input className="w-full bg-white border-luxe-border text-sm text-luxe-charcoal rounded-luxe pl-11 pr-4 py-3 focus:border-luxe-rose focus:ring-1 focus:ring-luxe-rose/30 transition-custom outline-none placeholder:text-gray-400" placeholder="Search reviews by name or keyword..." type="text"/>
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</div>
</div>
</div>
</header>
{/* <!-- END: MainHeader --> */}
<main className="max-w-[1400px] mx-auto px-8 py-10 space-y-10">
{/* <!-- BEGIN: SummarySection --> */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-purpose="stats-overview">
{/* <!-- Total Feedback --> */}
<div className="bg-white p-6 rounded-luxe border border-luxe-border hover-card transition-custom shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-luxe-grey-text text-sm font-medium uppercase tracking-wider">Total Feedback</span>
<div className="p-2 bg-luxe-rose/10 rounded-lg text-luxe-rose">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
</div>
</div>
<div className="text-3xl font-serif text-luxe-charcoal">1,284</div>
<p className="text-green-500 text-xs mt-2">+12% from last month</p>
</div>
{/* <!-- 5-Star Reviews --> */}
<div className="bg-white p-6 rounded-luxe border border-luxe-border hover-card transition-custom shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-luxe-grey-text text-sm font-medium uppercase tracking-wider">5-Star Reviews</span>
<div className="p-2 bg-luxe-rose/10 rounded-lg text-luxe-rose">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
</div>
</div>
<div className="text-3xl font-serif text-luxe-charcoal">942</div>
<p className="text-green-500 text-xs mt-2">73% of total volume</p>
</div>
{/* <!-- Pending Reviews --> */}
<div className="bg-white p-6 rounded-luxe border border-luxe-border hover-card transition-custom shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-luxe-grey-text text-sm font-medium uppercase tracking-wider">Pending Reviews</span>
<div className="p-2 bg-luxe-rose/10 rounded-lg text-luxe-rose">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
</div>
</div>
<div className="text-3xl font-serif text-luxe-charcoal">18</div>
<p className="text-amber-500 text-xs mt-2">Requires immediate action</p>
</div>
{/* <!-- Average Rating --> */}
<div className="bg-white p-6 rounded-luxe border border-luxe-border hover-card transition-custom shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-luxe-grey-text text-sm font-medium uppercase tracking-wider">Average Rating</span>
<div className="p-2 bg-luxe-rose/10 rounded-lg text-luxe-rose">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 2c-5.62 0-10.19 4.48-10.47 10h2.01c.28-4.39 3.92-7.85 8.39-7.97l-.01 2.02L17.5 3.5 13.5 1v1zm1.5 10c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-9 0c0 5.52 4.48 10 10 10 3.31 0 6.24-1.61 8.06-4.09l-1.47-1.35c-1.4 1.91-3.66 3.16-6.21 3.42V18h-2v2.01c-3.92-.12-7.14-3.13-7.85-6.91l-1.95-.14c.28 5.52 4.85 10 10.47 10h1v-2l4 2.5-4 2.5v-2h-1c-6.63 0-12-5.37-12-12s5.37-12 12-12h1v2l4-2.5-4-2.5v2h-1c-5.18 0-9.44 3.93-9.96 9z" /></svg>
</div>
</div>
<div className="text-3xl font-serif text-luxe-charcoal">4.8 <span className="text-sm text-gray-500 font-sans">/ 5.0</span></div>
<div className="flex gap-0.5 mt-2"><svg className="w-3 h-3 text-[#d4af37] fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg><svg className="w-3 h-3 text-[#d4af37] fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg><svg className="w-3 h-3 text-[#d4af37] fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg><svg className="w-3 h-3 text-[#d4af37] fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg><svg className="w-3 h-3 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg></div>
</div>
</section>
{/* <!-- END: SummarySection --> */}
{/* <!-- BEGIN: FilterBar --> */}
<section className="flex flex-col md:flex-row items-center gap-6" data-purpose="filtering-controls">
<div className="flex items-center gap-4 w-full md:w-auto">
<label className="text-sm font-medium text-gray-400 whitespace-nowrap">Filter by Rating:</label>
<div className="relative w-full md:w-[160px] custom-dropdown">
  <button type="button" className="w-full bg-white border border-luxe-border text-luxe-charcoal rounded-luxe py-2 px-4 focus:border-luxe-rose focus:ring-1 focus:ring-luxe-rose transition-custom hover:border-luxe-rose/50 flex justify-between items-center h-[42px] dropdown-btn">
    <span className="truncate text-sm dropdown-value font-medium">All Ratings</span>
    <svg className="w-4 h-4 text-gray-400 transition-transform duration-200 dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
  </button>
  <div className="absolute z-50 top-[calc(100%+4px)] left-0 w-full bg-white border border-luxe-border rounded-luxe shadow-lg opacity-0 invisible transition-all duration-200 transform translate-y-[-5px] dropdown-menu overflow-hidden">
    <div className="py-1">
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">All Ratings</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">5 Stars</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">4 Stars</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">3 Stars</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">2 Stars</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">1 Star</div>
    </div>
  </div>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto">
<label className="text-sm font-medium text-gray-400 whitespace-nowrap">Date Period:</label>
<div className="relative w-full md:w-[160px] custom-dropdown">
  <button type="button" className="w-full bg-white border border-luxe-border text-luxe-charcoal rounded-luxe py-2 px-4 focus:border-luxe-rose focus:ring-1 focus:ring-luxe-rose transition-custom hover:border-luxe-rose/50 flex justify-between items-center h-[42px] dropdown-btn">
    <span className="truncate text-sm dropdown-value font-medium">Last 30 Days</span>
    <svg className="w-4 h-4 text-gray-400 transition-transform duration-200 dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
  </button>
  <div className="absolute z-50 top-[calc(100%+4px)] left-0 w-full bg-white border border-luxe-border rounded-luxe shadow-lg opacity-0 invisible transition-all duration-200 transform translate-y-[-5px] dropdown-menu overflow-hidden">
    <div className="py-1">
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">Last 30 Days</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">Last 3 Months</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">Last 6 Months</div>
      <div className="px-4 py-2.5 text-sm text-luxe-charcoal hover:bg-luxe-rose/10 hover:text-luxe-rose cursor-pointer transition-custom dropdown-item font-medium">All Time</div>
    </div>
  </div>
</div>
</div>
<button className="md:ml-auto bg-luxe-rose hover:bg-luxe-rose-hover text-white px-6 py-2.5 rounded-luxe font-semibold text-sm transition-custom uppercase tracking-wider shadow-sm shadow-luxe-rose/20 h-[42px] flex flex-row justify-center items-center">
        Export Report
      </button>
</section>
{/* <!-- END: FilterBar --> */}
{/* <!-- BEGIN: FeedbackTable --> */}
<section className="bg-white border border-luxe-border rounded-luxe overflow-hidden shadow-sm" data-purpose="table-container">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-luxe-beige/50 border-b border-luxe-border">
<th className="px-6 py-4 text-xs uppercase tracking-widest text-luxe-rose font-semibold">Customer Details</th>
<th className="px-6 py-4 text-xs uppercase tracking-widest text-luxe-rose font-semibold">Rating</th>
<th className="px-6 py-4 text-xs uppercase tracking-widest text-luxe-rose font-semibold">Review Content</th>
<th className="px-6 py-4 text-xs uppercase tracking-widest text-luxe-rose font-semibold">Status</th>
<th className="px-6 py-4 text-xs uppercase tracking-widest text-luxe-rose font-semibold">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-luxe-border/50">
{/* <!-- Row 1 --> */}
<tr className="table-row-hover transition-custom" data-id="1" data-name="Julianne Alexander" data-email="j.alex@example.com" data-rating="5" data-date="Oct 24, 2023" data-review="The Truffle Risotto was an absolute masterpiece. The service was impeccable..." data-visit="Oct 24, 2023" data-table="14 (Window Side)" data-staff="Julian S." data-status="Approved" data-initials="JA">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-luxe-beige flex items-center justify-center text-luxe-rose font-serif text-lg border border-luxe-border">JA</div>
<div>
<div className="text-sm font-medium text-luxe-charcoal">Julianne Alexander</div>
<div className="text-xs text-gray-500">j.alex@example.com</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex gap-0.5 text-luxe-rose">
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
</div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Oct 24, 2023</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-luxe-charcoal/80 max-w-xs truncate">The Truffle Risotto was an absolute masterpiece. The service was impeccable...</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20 bg-emerald-50 text-emerald-600 border-emerald-100">Approved</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-luxe-border rounded-lg text-gray-400 hover:text-white transition-custom" title="View Details">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
<button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-custom" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
</div>
</td>
</tr>
{/* <!-- Row 2 (Pending) --> */}
<tr className="table-row-hover transition-custom" data-id="2" data-name="Marcus Wright" data-email="m.wright@luxury.co" data-rating="2" data-date="Oct 25, 2023" data-review="Wait time was longer than expected despite a reservation. Food was cold..." data-visit="Oct 24, 2023" data-table="12 (Main Dining)" data-staff="Sarah L." data-status="Pending" data-initials="MW">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-luxe-beige flex items-center justify-center text-luxe-rose font-serif text-lg border border-luxe-border">MW</div>
<div>
<div className="text-sm font-medium text-luxe-charcoal">Marcus Wright</div>
<div className="text-xs text-gray-500">m.wright@luxury.co</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex gap-0.5 text-luxe-rose">
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
</div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Oct 25, 2023</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-luxe-charcoal/80 max-w-xs truncate">Wait time was longer than expected despite a reservation. Food was cold...</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 bg-amber-50 text-amber-600 border-amber-100">Pending</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-green-500/10 rounded-lg text-gray-400 hover:text-green-500 transition-custom" title="Approve">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
<button className="p-2 hover:bg-orange-500/10 rounded-lg text-gray-400 hover:text-orange-500 transition-custom" title="Reject">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
<button className="p-2 hover:bg-luxe-border rounded-lg text-gray-400 hover:text-white transition-custom" title="View">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
<button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-custom" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
</div>
</td>
</tr>
{/* <!-- Row 3 (Rejected) --> */}
<tr className="table-row-hover transition-custom" data-id="3" data-name="Samuel Peters" data-email="speters@web.net" data-rating="1" data-date="Oct 22, 2023" data-review="Spam content detected by system filter regarding external links..." data-visit="N/A" data-table="N/A" data-staff="N/A" data-status="Rejected" data-initials="SP">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-luxe-beige flex items-center justify-center text-luxe-rose font-serif text-lg border border-luxe-border">SP</div>
<div>
<div className="text-sm font-medium text-luxe-charcoal">Samuel Peters</div>
<div className="text-xs text-gray-500">speters@web.net</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex gap-0.5 text-luxe-rose">
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
</div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Oct 22, 2023</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-luxe-charcoal/80 max-w-xs truncate">Spam content detected by system filter regarding external links...</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20 bg-rose-50 text-rose-600 border-rose-100">Rejected</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-luxe-border rounded-lg text-gray-400 hover:text-white transition-custom" title="View">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
<button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-custom" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
</div>
</td>
</tr>
{/* <!-- Row 4 --> */}
<tr className="table-row-hover transition-custom" data-id="4" data-name="Eleanor Lane" data-email="e.lane@style.com" data-rating="4" data-date="Oct 20, 2023" data-review="Loved the atmosphere and the wine list. Highly recommended for dates..." data-visit="Oct 19, 2023" data-table="8 (Terrace)" data-staff="Michael B." data-status="Approved" data-initials="EL">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-luxe-beige flex items-center justify-center text-luxe-rose font-serif text-lg border border-luxe-border">EL</div>
<div>
<div className="text-sm font-medium text-luxe-charcoal">Eleanor Lane</div>
<div className="text-xs text-gray-500">e.lane@style.com</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex gap-0.5 text-luxe-rose">
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
<svg className="w-4 h-4 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
</div>
<div className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Oct 20, 2023</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-luxe-charcoal/80 max-w-xs truncate">Loved the atmosphere and the wine list. Highly recommended for dates...</p>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20 bg-emerald-50 text-emerald-600 border-emerald-100">Approved</span>
</td>
<td className="px-6 py-5 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-2 hover:bg-luxe-border rounded-lg text-gray-400 hover:text-white transition-custom" title="View Details">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
<button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-custom" title="Delete">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* <!-- Pagination --> */}
<div className="bg-white px-6 py-4 border-t border-luxe-border flex items-center justify-between">
<span className="text-xs text-gray-500">Showing 1 to 4 of 1,284 entries</span>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 hover:text-luxe-gold transition-custom disabled:opacity-30" disabled="">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd" /></svg>
</button>
<div className="flex gap-1">
<button className="w-8 h-8 rounded-lg bg-luxe-rose text-white text-xs font-bold shadow-luxe-rose/20">1</button>
<button className="w-8 h-8 rounded-lg text-gray-400 hover:bg-luxe-border text-xs transition-custom">2</button>
<button className="w-8 h-8 rounded-lg text-gray-400 hover:bg-luxe-border text-xs transition-custom">3</button>
<span className="text-gray-600 px-1">...</span>
<button className="w-8 h-8 rounded-lg text-gray-400 hover:bg-luxe-border text-xs transition-custom">32</button>
</div>
<button className="p-2 text-gray-500 hover:text-luxe-gold transition-custom">
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd" /></svg>
</button>
</div>
</div>
</section>
{/* <!-- END: FeedbackTable --> */}
</main>
{/* <!-- BEGIN: PageFooter --> */}
<footer className="max-w-[1400px] mx-auto px-8 py-10 border-t border-luxe-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-luxe-grey-text">
<div>© 2023 LUXE Restaurant Management. All Rights Reserved.</div>
<div className="flex gap-6 uppercase tracking-widest">
<a className="hover:text-luxe-gold transition-custom hover:text-luxe-rose" href="#">Privacy Policy</a>
<a className="hover:text-luxe-gold transition-custom hover:text-luxe-rose" href="#">Terms of Service</a>
<a className="hover:text-luxe-gold transition-custom hover:text-luxe-rose" href="#">System Status</a>
</div>
</footer>
{/* <!-- END: PageFooter --> */}

{/* <!-- BEGIN: Feedback Details Modal Container --> */}
<div id="feedbackModal" className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 hidden transistion-opacity" data-purpose="modal-overlay">
{/* <!-- BEGIN: Modal Card --> */}
<article className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300" data-purpose="feedback-modal-card" style={{"fontFamily":"'Inter', sans-serif"}}>
{/* <!-- BEGIN: Modal Header --> */}
<header className="px-8 pt-8 pb-4 flex justify-between items-start">
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-widest text-[#8A8A8A] font-semibold">Review Details</p>
<h1 className="text-3xl font-serif text-[#4A4A4A]" style={{"fontFamily":"'Georgia', serif"}}>Guest Feedback</h1>
</div>
{/* <!-- Close Button --> */}
<button id="modalCloseBtn" className="text-[#8A8A8A] hover:text-[#4A4A4A] transition-colors p-2">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</button>
</header>
{/* <!-- END: Modal Header --> */}
{/* <!-- BEGIN: Modal Content --> */}
<main className="px-8 py-6 space-y-8">
{/* <!-- Section: Customer Profile & Rating --> */}
<section className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-luxe-border pb-8">
<div className="flex items-center gap-4">
{/* <!-- Avatar Circle --> */}
<div id="modalInitials" className="h-16 w-16 rounded-full bg-[#F9F1F0] flex items-center justify-center text-[#C38280] font-serif text-xl border border-[#C38280]/10" style={{"fontFamily":"'Georgia', serif"}}>MW</div>
<div>
<h2 id="modalGuestName" className="text-xl font-semibold text-[#4A4A4A]">Marcus Wright</h2>
<p id="modalEmail" className="text-sm text-[#8A8A8A]">m.wright@luxury.co</p>
</div>
</div>
<div className="flex flex-col md:items-end gap-1">
<div id="modalRating" className="flex gap-1 text-[#C38280]">
</div>
<p id="modalReviewDate" className="text-xs font-medium text-[#8A8A8A] uppercase tracking-wider">OCT 25, 2023</p>
</div>
</section>
{/* <!-- Section: Feedback Message --> */}
<section className="space-y-4">
<h3 className="text-xs font-bold uppercase tracking-widest text-[#8A8A8A]">Review Content</h3>
<p id="modalReviewContent" className="text-[#4A4A4A] leading-relaxed text-lg italic font-serif" style={{"fontFamily":"'Georgia', serif"}}>
"Wait time was longer than expected despite a reservation, but the Truffle Risotto was an absolute masterpiece. The ambiance in the evening is unmatched. I would suggest slightly more attentive service near the bar area."
</p>
</section>
{/* <!-- Section: Metadata Grid --> */}
<section className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Visit Date</p>
<p id="modalVisitDate" className="text-sm font-semibold text-[#4A4A4A]">Oct 24, 2023</p>
</div>
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Table No.</p>
<p id="modalTableNo" className="text-sm font-semibold text-[#4A4A4A]">14 (Window Side)</p>
</div>
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Service Staff</p>
<p id="modalServiceStaff" className="text-sm font-semibold text-[#4A4A4A]">Julian S.</p>
</div>
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A8A] mb-1">Status</p>
<span id="modalStatus" className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Pending</span>
</div>
</section>
</main>
{/* <!-- END: Modal Content --> */}
{/* <!-- BEGIN: Modal Footer / Actions --> */}
<footer className="px-8 py-8 bg-[#F4EFEC]/50 border-t border-luxe-border flex flex-col sm:flex-row justify-end items-center gap-4">
<button id="modalRejectBtn" className="w-full sm:w-auto px-8 py-3 rounded-lg border-2 border-[#C38280] text-[#C38280] font-semibold hover:bg-[#C38280] hover:text-white transition-all duration-300 active:scale-95">
Reject Review
</button>
<button id="modalApproveBtn" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#C38280] text-white font-semibold hover:bg-[#b07270] shadow-lg shadow-[#C38280]/20 transition-all duration-300 active:scale-95">
Approve Review
</button>
</footer>
{/* <!-- END: Modal Footer / Actions --> */}
</article>
{/* <!-- END: Modal Card --> */}
</div>
{/* <!-- END: Feedback Details Modal Container --> */}



    </div>
  );
}

export default Feedback;