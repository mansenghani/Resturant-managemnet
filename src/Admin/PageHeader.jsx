import React from 'react';

const PageHeader = ({ breadcrumb = "DASHBOARD / PAGE", title = "Page Title" }) => {
    const parts = breadcrumb.split('/');
    let part1 = parts[0] ? parts[0].trim() : 'DASHBOARD';
    let part2 = parts[1] ? parts[1].trim() : '';

    if (!part2) {
        part2 = part1;
        part1 = 'DASHBOARD';
    }

    return (
        <div data-purpose="header-title-container">
            <nav className="text-xs uppercase tracking-[0.2em] text-[#c67c7c] mb-2 flex items-center gap-2" style={{ fontFamily: "'Inter', 'Public Sans', sans-serif" }}>
                <span>{part1}</span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-400">{part2}</span>
            </nav>
            <h1 className="text-3xl text-[#2b2b2b] tracking-wide font-bold" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>{title}</h1>
        </div>
    );
};

export default PageHeader;
