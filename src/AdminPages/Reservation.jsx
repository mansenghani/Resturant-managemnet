import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const Reservation = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const res = await fetch('http://localhost:5005/api/reservations');
                const data = await res.json();
                setReservations(data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch reservations", err);
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch(`http://localhost:5005/api/reservations/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                setReservations(reservations.map(r => r._id === id ? { ...r, status: newStatus } : r));
            }
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const getStatusStyles = (status) => {
        switch (status) {
            case 'PENDING': return 'bg-rose-accent/15 text-rose-accent border-rose-accent/30';
            case 'CONFIRMED': return 'bg-green-500/15 text-green-500 border-green-500/30';
            case 'COMPLETED': return 'bg-gray-400/15 text-gray-400 border-gray-400/30';
            case 'CANCELLED':
            case 'REJECTED': return 'bg-red-500/10 text-red-500 border-red-500/20';
            default: return 'bg-gray-200 text-gray-600 border-gray-300';
        }
    };

    return (
        <div className="flex bg-[#f4efec] min-h-screen w-full">
            <div className="flex h-screen overflow-hidden w-full">
                {/* Side Navigation */}
                <Sidebar />
                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden bg-ivory">
                    {/* Header */}
                    <header className="h-16 flex-shrink-0 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/10 px-8 flex items-center justify-center sticky top-0 z-50">
                        <div className="w-full max-w-[1400px] flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                                <div className="relative w-full max-w-md">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                                    <input className="w-full bg-background-light dark:bg-white/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" placeholder="Search reservations..." type="text" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 relative translate-y-[1px]">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
                                </button>
                                <button className="px-5 h-10 flex items-center gap-2 bg-primary text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-primary/10">
                                    <span className="material-symbols-outlined text-sm">add</span>
                                    New Reservation
                                </button>
                            </div>
                        </div>
                    </header>
                    {/* Scrollable Page Content */}
                    <div className="flex-1 overflow-y-auto dark:bg-background-dark/50 bg-ivory pb-12 w-full">
                        <div className="max-w-[1400px] mx-auto px-8 pt-8">
                            {/* Page Title */}
                            <div className="mb-8">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <PageHeader breadcrumb="DASHBOARD / RESERVATIONS" title="Reservations Management" />
                                        <p className="text-sm text-gray-500 font-medium mt-1">Overview and manage all guest table bookings.</p>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-[0.2em]">Last updated: Just now</p>
                                </div>
                            </div>
                            {/* Stats Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="material-symbols-outlined p-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-600 dark:text-gray-300">book_online</span>
                                        <span className="text-xs font-bold text-green-500 flex items-center">+12.5% <span className="material-symbols-outlined text-xs ml-1">trending_up</span></span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Total Bookings</p>
                                        <h3 className="text-3xl font-bold mt-1">{reservations.length || 0}</h3>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-primary/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between h-full">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <span className="material-symbols-outlined text-7xl text-primary">pending_actions</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="material-symbols-outlined p-2 bg-primary/10 rounded-lg text-primary">hourglass_empty</span>
                                        <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">ACTION REQUIRED</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Pending Requests</p>
                                        <h3 className="text-3xl font-bold mt-1 text-primary">{reservations.filter(r => r.status === 'PENDING').length}</h3>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="material-symbols-outlined p-2 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-600 dark:text-gray-300">hail</span>
                                        <span className="text-xs font-bold text-blue-500 flex items-center">+5% <span className="material-symbols-outlined text-xs ml-1">trending_up</span></span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Today's Arrivals</p>
                                        <h3 className="text-3xl font-bold mt-1">{reservations.filter(r => r.status === 'CONFIRMED').length}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Table Container */}
                            <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-100 shadow-md overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead className="sticky top-0 z-10">
                                        <tr className="bg-gray-50/80 backdrop-blur-sm dark:bg-white/5 border-b border-gray-100">
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">ID</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Guest</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Date & Time</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Party Size</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Contact</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Status</th>
                                            <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                        {loading ? (
                                            <tr>
                                                <td colSpan="7" className="text-center py-8 text-gray-400">Loading reservations...</td>
                                            </tr>
                                        ) : reservations.length === 0 ? (
                                            <tr>
                                                <td colSpan="7" className="text-center py-8 text-gray-400">No reservations found.</td>
                                            </tr>
                                        ) : (
                                            reservations.map((res) => (
                                                <tr key={res._id} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                                                    <td className="px-6 py-5 align-middle text-sm font-mono text-gray-400">#{res.reservationId}</td>
                                                    <td className="px-6 py-5 align-middle">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-8 rounded-full bg-rose-accent/20 flex items-center justify-center text-rose-accent font-bold text-xs uppercase">
                                                                {res.name.substring(0, 2)}
                                                            </div>
                                                            <p className="text-sm font-bold text-charcoal">{res.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5 align-middle">
                                                        <div className="flex flex-col">
                                                            <p className="text-sm font-bold text-charcoal">{res.date}, {res.time}</p>
                                                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-tight">Requests: {res.requests || 'None'}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5 align-middle">
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wide">
                                                            <span className="material-symbols-outlined text-[14px]">groups</span> {res.guests}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 align-middle">
                                                        <div className="flex flex-col">
                                                            <p className="text-xs font-bold">{res.phone}</p>
                                                            <p className="text-[10px] text-gray-400">{res.email}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-5 align-middle">
                                                        <span className={`px-3 py-1 text-[9px] font-black uppercase rounded-full tracking-widest border ${getStatusStyles(res.status)}`}>
                                                            {res.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 align-middle text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            {res.status === 'PENDING' && (
                                                                <>
                                                                    <button onClick={() => updateStatus(res._id, 'CONFIRMED')} className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm" title="Approve">
                                                                        <span className="material-symbols-outlined text-sm">check</span>
                                                                    </button>
                                                                    <button onClick={() => updateStatus(res._id, 'REJECTED')} className="size-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-red-50 hover:text-red-600 transition-all shadow-sm" title="Reject">
                                                                        <span className="material-symbols-outlined text-sm">close</span>
                                                                    </button>
                                                                </>
                                                            )}
                                                            <button className="size-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-100 transition-all shadow-sm">
                                                                <span className="material-symbols-outlined text-sm">edit</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Reservation;