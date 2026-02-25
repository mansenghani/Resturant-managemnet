import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Feedback = () => {
    // Reviews state
    const allReviews = [
        {
            rating: 5,
            text: "An unforgettable evening. The Wagyu Ribeye was cooked to perfection, and the service was impeccable. A true 5-star experience in every sense.",
            initials: "JD",
            name: "James Dalton",
            role: "Food Critic",
        },
        {
            rating: 5,
            text: "The ambiance is sophisticated yet welcoming. The truffle tagliatelle is a masterpiece. Highly recommend for any special occasion.",
            initials: "SR",
            name: "Sophia Reynolds",
            role: "Lifestyle Blogger",
        },
        {
            rating: 5,
            text: "From the moment we walked in, we felt like royalty. The gold leaf fondant was the perfect end to a magnificent meal. We'll be back!",
            initials: "MT",
            name: "Marcus Thorne",
            role: "Regular Guest",
        },
        {
            rating: 5,
            text: "Absolute perfection. The wine pairing suggestions were spot on. A masterclass in fine dining.",
            initials: "EP",
            name: "Eleanor P.",
            role: "Regular Guest",
        },
        {
            rating: 5,
            text: "Best lobster bisque I've ever tasted. The textures and flavors were balanced perfectly.",
            initials: "JM",
            name: "Julian M.",
            role: "Food Enthusiast",
        },
        {
            rating: 5,
            text: "A hidden gem. The attention to detail in the plating is like nothing I've seen before.",
            initials: "SW",
            name: "Sarah W.",
            role: "Local Guide",
        },
        {
            rating: 5,
            text: "The tasting menu was a journey of flavors. Each course told a unique story. Simply brilliant.",
            initials: "AL",
            name: "Anna Lee",
            role: "Chef",
        },
        {
            rating: 5,
            text: "Elegant and timeless. The live jazz band added such a wonderful touch to our anniversary dinner.",
            initials: "RK",
            name: "Richard K.",
            role: "Musician",
        },
        {
            rating: 5,
            text: "Service that anticipates your needs before you do. A rare find in today's dining scene.",
            initials: "EM",
            name: "Emily M.",
            role: "Event Planner",
        }
    ];

    const [visibleReviews, setVisibleReviews] = useState(3);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLoadMore = () => {
        setVisibleReviews(prev => prev + 3);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert('Please select a rating.');
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            alert('Thank you for your feedback! Your review has been submitted.');
            setRating(0);
            setIsSubmitting(false);
            e.target.reset();
        }, 1500);
    };

    return (
        <Header>
            <header className="pt-20 pb-8 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-bold tracking-[0.3em] uppercase block mb-4 text-primary">Experience</span>
                <h1 className="text-5xl md:text-6xl font-serif mb-6 italic">What Our Guests Say</h1>
                <p className="text-soft-grey text-lg max-w-2xl mx-auto italic">"Refined moments, shared memories."</p>
                <div className="w-16 h-[1px] mx-auto mt-8 bg-primary"></div>
            </header>

            <section className="pt-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="reviews-grid" className="grid md:grid-cols-3 gap-8">
                    {allReviews.slice(0, visibleReviews).map((review, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-xl card-shadow relative animate-fade-in">
                            <div className="flex space-x-1 mb-6 text-sm text-primary">
                                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                            <p className="text-charcoal italic mb-8 leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-background-ivory rounded-full flex items-center justify-center font-bold text-sm text-primary">{review.initials}</div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wider">{review.name}</h4>
                                    <p className="text-xs text-soft-grey">{review.role}</p>
                                </div>
                            </div>
                            <span className="absolute top-8 right-10 text-4xl text-border-neutral font-serif">"</span>
                        </div>
                    ))}
                </div>

                {visibleReviews < allReviews.length && (
                    <div className="text-center mt-16">
                        <button onClick={handleLoadMore} id="load-more-btn" className="border border-border-neutral px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border-neutral disabled:hover:text-border-neutral">
                            Load More Reviews
                        </button>
                    </div>
                )}
            </section>

            <section className="py-16 bg-white/50 border-y border-border-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                        <div className="text-6xl font-serif text-charcoal mb-2">4.8</div>
                        <div className="flex justify-center md:justify-start space-x-1 mb-2 text-primary">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="opacity-50">★</span>
                        </div>
                        <p className="text-xs uppercase tracking-widest font-semibold">Based on 1,240 Reviews</p>
                    </div>
                    <div className="flex-grow w-full max-w-md space-y-3">
                        {[
                            { stars: '5 Stars', percent: 85, displayPercent: '85%' },
                            { stars: '4 Stars', percent: 10, displayPercent: '10%' },
                            { stars: '3 Stars', percent: 3, displayPercent: '3%' },
                            { stars: '2 Stars', percent: 1, displayPercent: '1%' },
                            { stars: '1 Star', percent: 1, displayPercent: '1%' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-4">
                                <span className="text-[10px] font-bold w-12 text-right uppercase tracking-wider">{item.stars}</span>
                                <div className="flex-grow bg-border-neutral/40 h-1.5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary/60 rounded-full" style={{ width: `${item.percent}%` }}></div>
                                </div>
                                <span className="text-[10px] text-soft-grey w-8 italic text-right font-medium">{item.displayPercent}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-12 rounded-xl card-shadow border border-border-neutral max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif mb-2">Share Your Experience</h2>
                            <p className="text-xs text-soft-grey uppercase tracking-widest">Your feedback is our greatest inspiration</p>
                        </div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-charcoal">Full Name</label>
                                    <input className="luxury-input" placeholder="Enter your name" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-charcoal">Email Address</label>
                                    <input className="luxury-input" placeholder="your@email.com" type="email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-charcoal">Rating</label>
                                <div className="flex space-x-2 text-2xl cursor-pointer" id="rating-stars">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`transition-colors duration-200 ${(hoverRating || rating) >= star ? 'text-primary' : 'text-border-neutral hover:text-primary'}`}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setRating(star)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-charcoal">Your Review</label>
                                <textarea className="luxury-input h-32" placeholder="Tell us about your dining experience..."></textarea>
                            </div>
                            <button
                                className="w-full text-white py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs transition-colors shadow-lg shadow-primary/20 bg-primary hover:bg-primary-hover btn-lift-glow"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Share Your Experience'}
                            </button>
                        </form>
                    </div>
                </div >
            </section >

            <section className="py-24 text-center bg-background-ivory border-t border-border-neutral">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif mb-8 italic">Ready to Experience KUKI?</h2>
                    <a className="inline-block bg-primary text-white px-12 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all hover:scale-105" href="/table_booking">
                        Reserve a Table
                    </a>
                </div>
            </section>

            <Footer />
        </Header >
    );
};

export default Feedback;
