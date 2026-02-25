import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const FoodMenu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleFilter = (e, category) => {
        if (e) e.preventDefault();
        setActiveCategory(category);
    };

    const getLinkClass = (category) => {
        return activeCategory === category
            ? 'nav-tab text-luxe-rose font-medium transition-colors duration-300 cursor-pointer'
            : 'nav-tab text-gray-500 hover:text-luxe-charcoal transition-colors duration-300 cursor-pointer text-base bg-transparent border-none';
    };

    const shouldShowSection = (sectionId) => {
        return activeCategory === 'all' || activeCategory === sectionId;
    };

    const shouldShowItem = (index) => {
        if (activeCategory === 'all') {
            return index < 3;
        }
        return true;
    };

    // Helper for rendering a menu category section
    const MenuCategory = ({ id, title, items }) => {
        if (!shouldShowSection(id)) return null;

        return (
            <div className="mb-16 menu-category animate-fade-in" id={id}>
                <h2 className="text-3xl mb-10 pb-2 border-b border-luxe-rose w-fit">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.filter((_, idx) => shouldShowItem(idx)).map((item, idx) => (
                        <div key={idx} className="menu-card bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <img alt={item.title} className="w-full h-64 object-cover" src={item.img} />
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <span className="text-luxe-rose font-medium">{item.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const appetizers = [
        { title: "Truffle Risotto", price: "₹42", desc: "Creamy Arborio rice infused with black truffle oil and finished with aged Parmesan.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3xB8EbeLvB65Zh16p1MJSDupqDnN9vG9Oa78v3wqyqQttOv0AcvImNbPrVeuUhtQLrf_7YUuWhnf_t2Ll6DOeKaGUce7z3Xbseg4HSNfhABekOO_abvdNTCyp-_FZej4FO_Owxoa3U2Kx7JfLiRJzRv6aMd32nYQcSZ_Qv3I7J8ByOoJCRuspb_5_nLr1xtoMXgUlwV3TUZewIgwWBbLOcPSVcTY9gt4CH9mfT8QT6loWxFYi6jUoS7kmqVpzQVNpjHrHyFWAGL0" },
        { title: "Burrata with Heirloom Tomatoes", price: "₹38", desc: "Fresh Italian burrata, heirloom tomatoes, basil oil, and balsamic reduction.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxcxF8dCuOU08qHsA7FTjO0YcnidXn2DQ_nz6O8zcqtKFwLtyGc-iGJUsUuYQkm7MSiPZQoDc8IX8_7P6Ci10XeuJkiJHXhirqkW0jyq31UxWH6tBZIHZa7W2UVX1PUDLyTafOGB7J9j8HUOyDXuJARSoYbb9-LWrA7N2mzGo0xklCAeKjNoWy9ntdkzZUkRv8RSPuqkgrjiIqBg5JHZ25R5m89whBdR0FdVfwp_D0zGlJDdjganIjmEFNmeQhgIs40TREdsbv5E8" },
        { title: "Lobster Bisque", price: "₹48", desc: "Velvety lobster cream soup served with cognac and butter-poached lobster chunks.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtr5mHuYh--bKkW6iG2PAJwf-gwSwdAZWFy0L74l95vmN-PtR8cP7blBR1NAmVUAwQa5NAVgBt00A7PODfofBTQFc8mzJGOWtwfsqyHOLpvqNORmfFPVlJbGm4eNnHuPAyholChb-I8hAfxJ4_kr0OfcwJz-tqA8D28EDSL70t5d7RFtpKLmRss3xSXKDoneroGaZ8XG7z-VzP-BRGclIQVgsnA9tYr0lWr9NZqee3XUkE36p6WE558LOERC5yrcGx21wSXm5KJuk" },
        { title: "Beef Carpaccio", price: "₹45", desc: "Thinly sliced raw beef tenderloin, arugula, capers, and truffle aioli.", img: "https://images.unsplash.com/photo-1559847844-325b1285c54d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Seared Scallops", price: "₹52", desc: "Pan-seared scallops with cauliflower puree and crispy pancetta.", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Bruschetta Trio", price: "₹35", desc: "Toasted baguette with tomato basil, olive tapenade, and roasted pepper toppings.", img: "https://images.unsplash.com/photo-1572695157363-bc6b7e0c4763?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    ];

    const mainCourse = [
        { title: "Wagyu Ribeye", price: "₹125", desc: "Premium A5 Wagyu, grilled to perfection, served with roasted bone marrow and red wine jus.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkqeL9TDsacjwwQOhdPr-Necg8NTe_a2_Gk0XqtQ_vFQMk-RKbNGrq9YBLYk4uMEjk2fnOPSINcLyfrjUrhGwrW143XfVLqBv6fhQS-NH6UcfafC2MJCo58vNNmN6NrcbkMMnI6KzkbSuLX-mcIftBwUyzUUfxm-eyz6VtclG_iLmp4h3Ry8Y9Nyvvm5dEQXcWYoldmfTNNFcsk0rcr83IStVReQ2Zz4Oce46MXx0AZ3LiiT4P7nyA9U36y1F0we1ZSXYlQ68K4g0" },
        { title: "Herb-Crusted Salmon", price: "₹95", desc: "Wild-caught salmon with a herb crust, asparagus spears, and lemon-butter beurre blanc.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt25tZQxClQsGut69Af2ewNmQpO9p0rIoGnjym6Elcr9SmM7Pb-Aav5q53J2Ku8I1w2aGXEcT7he35mxgattc6OAlktUbrbtRjaadl4esjg5wimhgDcNQXuVs9sLPB3w9TF3eEVBGHmT-KgiFSyPjW9L4bjrtESo7oYm2IDy97wrgmKkFm0P5AeAUN7zekuu9ujPSPnAa9uWIfpYMeBRAf7GZBWXW_U7V0lFYBV9ok34pPspRITw0KAPBvEy5_tjMYCsiU3ZB7GB8" },
        { title: "Wild Mushroom Ravioli", price: "₹78", desc: "Handmade pasta filled with forest mushrooms, served in a light brown butter and sage sauce.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANSE2dUfKCzQgkAz4i2PrtYoE_FyT6_o0yuL1FP1nL_MlEJNsLMQOV2vwZKI9lUkdmWYgqGmH4okjA72CXAJOpJOTIF6cubLizX04Jzy6ECJwUgu6lF5nG6CsS0BBUUS0424cTvCvGy0Y43nu0mvGDClAO7LXfqKjq9d_RRw8Ry9dXQhmEG4f5aMD71MM2q3PSMfK9YLC69fcHPBi0v9bMdpqrk3OseiSz1jrREwXFPpNAmAwNn_Iqh0yzA_3zdQlCSndF6WEWplI" },
        { title: "Grilled Lamb Chops", price: "₹110", desc: "Australian lamb chops marinated in rosemary and garlic, served with minted pea puree.", img: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Pan-Seared Sea Bass", price: "₹98", desc: "Crispy skin sea bass fillet with ratatouille and basil pesto drizzle.", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Chicken Supreme", price: "₹85", desc: "Roasted chicken breast supreme with creamy mushroom sauce and truffle mash.", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    ];

    const desserts = [
        { title: "Gold Leaf Opera", price: "₹28", desc: "Layers of almond sponge, coffee buttercream, and dark chocolate ganache.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Dark Chocolate Soufflé", price: "₹26", desc: "Warm molten center, served with Madagascan vanilla bean gelato.", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Pistachio Crème Brûlée", price: "₹24", desc: "Torched sugar crust with a creamy Iranian pistachio custard.", img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Tiramisu Classico", price: "₹22", desc: "Classic Italian dessert with mascarpone, espresso-soaked ladyfingers, and cocoa powder.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Raspberry Cheesecake", price: "₹25", desc: "New York style cheesecake topped with fresh raspberry coulis and mint.", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Macaron Assortment", price: "₹30", desc: "Selection of 6 handmade French macarons: chocolate, pistachio, raspberry, lemon, vanilla, and caramel.", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    ];

    const wineList = [
        { title: "Cabernet Sauvignon Reserve", price: "₹60", desc: "Full-bodied, notes of blackcurrant and cedar. 2018 Vintage.", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Chardonnay Grand Selection", price: "₹55", desc: "Crisp oak-aged white with notes of green apple and vanilla.", img: "https://images.unsplash.com/photo-1572569998634-8c0356708027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Vintage Merlot", price: "₹72", desc: "Velvety smooth finish with hints of plum and dark chocolate.", img: "https://images.unsplash.com/photo-1545620857-8af0b472e35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Rose d'Anjou", price: "₹48", desc: "Off-dry rose with fresh strawberry and redcurrant aromas.", img: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Pinot Noir Estate", price: "₹65", desc: "Elegant light-bodied red with cherry, raspberry, and clove notes.", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Champagne Brut", price: "₹120", desc: "Prestigious bubbles with brioche and citrus undertones.", img: "https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    ];

    const chefsSpecials = [
        { title: "Signature Seabass", price: "₹145", desc: "Wild Chilean sea bass with a miso glaze and pickled ginger.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDY50RNiicCsVerCMfYsJRD6K_sTLVDVS--FU3QfWoxAb--DTT1G5w6ba8-22vjQZz6uCR-ww1pZa4k2WCwk_S2wpssTS4oWK8ukgH8AWIAzxO27BHDrGHRQac8wtdnWYoiKPQRqC0mF1PcfTRjTzbKIqJ16_tINShoBDBwmN2ZuLkHUjdIOeHr7O1zf1kmWL4tzy9ngEU5-5lNbWFBCVINE1Ng4ax495Sa6GtFNMIBXgHCPnHEWZXNv1bnBf8jn4woY7oCe1-yRo" },
        { title: "Dry Aged Duck", price: "₹130", desc: "14-day aged duck breast, honey lavender glaze, parsnip purée.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDemhVfhl-ICfglQK76wx0TTYwFNd9PY4TYeP0k85COWfldGWIkRX9v1vh6gnG57Wy94mQPhwbdp1rmvvUdOh1O5pipv6VI5zCKAhghyBiNvtQdYinncH2lTyFRu0QfaKhFRvXELU2-ZqkgljaE12_2S12Q1tsA0NZO_blu5dAN2Li78_XUwQm9vmRVW9CzFXBrVsrIcM0IC_fai_-qISJ3gMiBTLMYP-LMrVcXecPZ3QplJ_zGw6q5RuGsE42rb3tFwNUmK6sbPOI" },
        { title: "Saffron Scallops", price: "₹115", desc: "Diver scallops, saffron foam, cauliflower textures, and caviar.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj4LX4MdljFczXp3s_mxDsyYOSW0q6ZomKR52NsBJjVbg70Q9RoZlJwlPqSZAcEO7SNVVHgrO-gSWQ61m8JgdY9ZDrmxyG8GFh60m9N4CczqFzgy2K3UGhHi2yuwb98KJ2ZoE8nEUfPsNKGoUSubGwPfwpcir2OudHvQr4u-2mH5D18dO9IaI3N6RuWdjTBFnT7njqFwj_0ZVHcOS147I9zVEZplEO3cRKMyMXvceRj-cHq99tnSLYQDB8fs_gr_o5W4C59wTF8NM" },
        { title: "Truffle Filet Mignon", price: "₹140", desc: "8oz Petit filet butter-basted with fresh shaved black truffles and pommes puree.", img: "https://images.unsplash.com/photo-1544025162-d76690b67f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Lobster Thermidor", price: "₹155", desc: "Whole lobster stuffed with crab meat, brandy cream sauce, and gruyere gratin.", img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { title: "Vegetarian Tasting Menu", price: "₹110", desc: "Chef's curated selection of 5 seasonal vegetarian courses.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <Header>
            {/* BEGIN: HeroSection */}
            <section className="py-20 text-center px-4" data-purpose="hero">
                <h1 className="text-5xl md:text-7xl mb-6">From Our Kitchen</h1>
                <p className="text-lg md:text-xl text-gray-600 font-light tracking-widest uppercase">Crafted with Passion & Precision</p>
            </section>
            {/* END: HeroSection */}

            {/* BEGIN: CategoryNavigation */}
            <section className="max-w-4xl mx-auto mb-16" data-purpose="category-filter">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-gray-200 pb-4">
                    <button className={getLinkClass('all')} onClick={(e) => handleFilter(e, 'all')}>All Dishes</button>
                    <button className={getLinkClass('appetizers')} onClick={(e) => handleFilter(e, 'appetizers')}>Appetizers</button>
                    <button className={getLinkClass('main-course')} onClick={(e) => handleFilter(e, 'main-course')}>Main Course</button>
                    <button className={getLinkClass('desserts')} onClick={(e) => handleFilter(e, 'desserts')}>Desserts</button>
                    <button className={getLinkClass('wine-list')} onClick={(e) => handleFilter(e, 'wine-list')}>Wine List</button>
                    <button className={getLinkClass('chefs-specials')} onClick={(e) => handleFilter(e, 'chefs-specials')}>Chef’s Specials</button>
                </div>
            </section>
            {/* END: CategoryNavigation */}

            {/* BEGIN: MenuGrid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0" data-purpose="menu-listing">
                <MenuCategory id="appetizers" title="Appetizers" items={appetizers} />
                <MenuCategory id="main-course" title="Main Course" items={mainCourse} />
                <MenuCategory id="desserts" title="Desserts" items={desserts} />
                <MenuCategory id="wine-list" title="Wine List" items={wineList} />
                <MenuCategory id="chefs-specials" title="Chef’s Specials" items={chefsSpecials} />
            </section>
            {/* END: MenuGrid */}

            {/* BEGIN: CTASection */}
            <section className="pt-4 pb-12 text-center px-4" data-purpose="call-to-action">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl mb-8">Ready for an Unforgettable Experience?</h2>
                    <a className="inline-block bg-luxe-rose text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl" href="/table_booking">Reserve Your Table</a>
                </div>
            </section>
            {/* END: CTASection */}

            <Footer />
        </Header>
    );
};

export default FoodMenu;
