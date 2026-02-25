import React from 'react';

const Sidebar = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard';

    const isActive = (page) => {
        const menuPages = ['menumanage', 'addnewdish', 'addNewCategory'];
        if (page === 'menumanage' && menuPages.includes(currentPage)) return true;
        
        const reportPages = ['exportReport', 'reportgenrate'];
        if (page === 'reportgenrate' && reportPages.includes(currentPage)) return true;
        
        return currentPage === page;
    };

    const getLinkClass = (page) => {
        if (isActive(page)) {
            return 'flex items-center gap-3 px-4 py-3 rounded-[14px] bg-[#c67c7c] text-white shadow-lg shadow-[#c67c7c]/20 transition-all duration-300 ease-out';
        }
        return 'flex items-center gap-3 px-4 py-3 rounded-[14px] text-[#707070] hover:bg-white transition-all duration-300 ease-out group';
    };

    const getSvgClass = (page) => {
        if (isActive(page)) {
            return 'w-5 h-5';
        }
        return 'w-5 h-5 group-hover:text-[#c67c7c]';
    };

    return (
        <>
            <aside className="fixed inset-y-0 left-0 w-64 bg-[#f4efec] border-r border-[#e5e0dd] flex flex-col z-[60]">
                <div className="p-8 pb-12">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#c67c7c]/20 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-[#c67c7c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-lg font-serif font-bold tracking-tighter text-[#2b2b2b] leading-none">LUXE</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[#c67c7c]">Rose Edition Admin</div>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <a className={getLinkClass('dashboard')} href="/admin/dashboard">
                        <span className="text-sm font-medium">Dashboard</span>
                    </a>
                    <a className={getLinkClass('menumanage')} href="/admin/menumanage">
                        <span className="text-sm font-medium">Menu Management</span>
                    </a>
                    <a className={getLinkClass('reservation')} href="/admin/reservation">
                        <span className="text-sm font-medium">Reservations</span>
                    </a>
                    <a className={getLinkClass('feedback')} href="/admin/feedback">
                        <span className="text-sm font-medium">Feedback</span>
                    </a>
                    <a className={getLinkClass('reportgenrate')} href="/admin/reportgenrate">
                        <span className="text-sm font-medium">Reports</span>
                    </a>
                    <a className={getLinkClass('setting')} href="/admin/setting">
                        <span className="text-sm font-medium">Settings</span>
                    </a>
                </nav>
                <div className="p-4 border-t border-[#e5e0dd] mt-auto">
                    <a className="flex items-center gap-3 px-4 py-3 rounded-[14px] text-[#c67c7c] hover:bg-[#c67c7c]/5 transition-all duration-300 ease-out" href="/admin/login">
                        <span className="text-sm font-medium">Logout</span>
                    </a>
                </div>
            </aside>
            <div className="w-64 shrink-0"></div>
        </>
    );
};
export default Sidebar;
