import React from 'react';

const Menu = () => {
    const current_page = window.location.pathname.split('/').pop() || 'index.php';

    const getLinkClass = (pages) => {
        return pages.includes(current_page)
            ? 'text-luxe-rose border-b border-luxe-rose'
            : 'hover:text-luxe-rose transition-colors';
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <div className="flex-shrink-0">
                    <a className="text-3xl font-serif tracking-widest font-bold" href="/home">KUKI</a>
                </div>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
                    <a className={getLinkClass(['home', 'index', ''])} href="/home">Home</a>
                    <a className={getLinkClass(['food_menu'])} href="/food_menu">Menu</a>
                    <a className={getLinkClass(['table_booking', 'booking'])} href="/table_booking">Reservations</a>
                    <a className={getLinkClass(['about'])} href="/about">About</a>
                    <a className={getLinkClass(['feedback'])} href="/feedback">Reviews</a>
                </nav>
                {/* Search & CTA */}
                <div className="flex items-center space-x-6">
                    <a className="bg-luxe-rose text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md" href="/table_booking">Book a Table</a>
                </div>
            </div>
        </header>
    );
};

export default Menu;
