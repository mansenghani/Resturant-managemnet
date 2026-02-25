import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const TableBooking = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '2 People',
        date: '',
        time: '19:00',
        requests: ''
    });

    // Derived values for success view
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
    const reservationId = `KK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5005/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, reservationId })
            });

            if (res.ok) {
                setIsSubmitted(true);
                // Scroll to top to see confirmation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert('Failed to submit reservation. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting reservation:', error);
            alert('Check your backend server! Could not connect to API.');
        }
    };

    const handleModify = (e) => {
        e.preventDefault();
        setIsSubmitted(false);
    };

    return (
        <Header>
            {/* BEGIN: Hero Section */}
            <section className="pt-20 pb-16 text-center" data-purpose="hero-section">
                <div className="max-w-3xl mx-auto px-4">
                    <span className="text-primary font-medium tracking-[0.3em] text-xs uppercase mb-4 block">Reservations</span>
                    <h1 className="font-serif text-5xl md:text-6xl mb-6 relative inline-block">
                        Book Your Table
                        <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-20 h-[1.5px] bg-primary"></span>
                    </h1>
                    <p className="text-soft-grey text-lg max-w-xl mx-auto mt-8 font-light leading-relaxed">
                        Reserve your table for an unforgettable fine dining experience. We look forward to welcoming you to KUKI.
                    </p>
                </div>
            </section>
            {/* END: Hero Section */}

            {isSubmitted ? (
                /* BEGIN: Reservation Confirmation Section */
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Confirmation Details Column */}
                        <div className="bg-white p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border-neutral rounded-sm animate-fade-in" data-purpose="reservation-success-container">
                            <div className="flex flex-col items-center text-center py-6">
                                {/* Checkmark Icon */}
                                <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-3xl text-primary">check</span>
                                </div>
                                {/* Success Message */}
                                <h2 className="serif-heading text-4xl mb-2 text-charcoal">Thank you!</h2>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-10">RESERVATION CONFIRMED</p>
                                <div className="max-w-md mx-auto space-y-4 mb-12">
                                    <p className="text-soft-grey text-lg leading-relaxed">Your table has been successfully reserved. We are preparing for your arrival.</p>
                                    <p className="text-soft-grey text-sm italic font-light">A confirmation email has been sent to {formData.email} with all the details.</p>
                                </div>

                                {/* Reservation Summary Section */}
                                <div className="w-full mb-12 text-left">
                                    <div className="mb-6">
                                        <h3 className="serif-heading text-xl text-charcoal mb-2">Reservation Summary</h3>
                                        <div className="w-12 h-[1px] bg-primary"></div>
                                    </div>
                                    <div className="bg-background-ivory/50 p-6 rounded-sm border border-border-neutral space-y-4">
                                        <div className="flex justify-between items-center text-sm border-b border-border-neutral/30 pb-3">
                                            <span className="text-soft-grey uppercase tracking-wider text-[10px]">Reservation ID</span>
                                            <span className="font-bold text-charcoal">{reservationId}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-border-neutral/30 pb-3">
                                            <span className="text-soft-grey uppercase tracking-wider text-[10px]">Full Name</span>
                                            <span className="font-bold text-charcoal">{formData.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-border-neutral/30 pb-3">
                                            <span className="text-soft-grey uppercase tracking-wider text-[10px]">Date</span>
                                            <span className="font-bold text-charcoal">{formattedDate}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-border-neutral/30 pb-3">
                                            <span className="text-soft-grey uppercase tracking-wider text-[10px]">Time</span>
                                            <span className="font-bold text-charcoal">{formData.time}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-border-neutral/30 pb-3">
                                            <span className="text-soft-grey uppercase tracking-wider text-[10px]">Number of Guests</span>
                                            <span className="font-bold text-charcoal">{formData.guests}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-soft-grey uppercase tracking-wider text-[10px]">Contact Number</span>
                                            <span className="font-bold text-charcoal">{formData.phone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-border-neutral mb-12"></div>
                                {/* Need to make changes section */}
                                <div className="space-y-6">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal">NEED TO MAKE CHANGES?</p>
                                    <button onClick={handleModify} className="inline-block px-10 py-3 border border-primary text-primary text-[10px] uppercase font-bold tracking-[0.2em] transition-soft hover:bg-primary hover:text-white rounded-sm text-center">
                                        MODIFY RESERVATION
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="h-full" data-purpose="reservation-visual-context">
                            <div className="sticky top-32">
                                <img alt="Luxury restaurant dining area" className="w-full h-auto object-cover rounded-sm shadow-xl aspect-[4/5] img-hover-scale transition-soft" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVKHtcw5X1cptWKGmP-u9YY1DYDvKCjkNvsVPMjc9uNMnCN6M9tywezTdIdPPIbRdLNgrGj73VwNuMSSkHQslIRfKEU6iJggG9mYV_w1Ls3MaXMLYqdn2npmhq4Ve63-Ae4hMoAT02kB4h_7jJCOvCnnp9rJuCQx3uHi7YhmFAeCOgP5QUmjsqyNuJnLwfcLVuBgzbzDQOj1fAGzPWayKSf5b0Uh3CbOeyRka_zmBN7IXQZKpjWyf2xaF15dU0qdGwLcyj9L5RrqM" />
                                {/* Subtle decorative element */}
                                <div className="mt-8 border-l-2 border-primary pl-6 bg-white/50 p-6 rounded-r-sm" style={{ borderColor: '#B76E79' }}>
                                    <p className="font-serif italic text-xl text-charcoal">"A dining experience that transcends the ordinary, where every detail is meticulously crafted for your pleasure."</p>
                                    <p className="mt-2 text-xs uppercase tracking-widest text-primary font-bold">— Executive Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                /* END: Reservation Confirmation Section */
            ) : (
                /* BEGIN: Reservation Main Section (Form) */
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Reservation Form Column */}
                        <div className="bg-white p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border-neutral rounded-sm animate-fade-in" data-purpose="reservation-form-container">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="flex flex-col">
                                        <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="name">Full Name</label>
                                        <input className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus bg-background-ivory/30" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required type="text" />
                                    </div>
                                    {/* Email Address */}
                                    <div className="flex flex-col">
                                        <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="email">Email Address</label>
                                        <input className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus bg-background-ivory/30" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required type="email" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone Number */}
                                    <div className="flex flex-col">
                                        <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="phone">Phone Number</label>
                                        <input className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus bg-background-ivory/30" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (234) 567-890" required type="tel" />
                                    </div>
                                    {/* Number of Guests */}
                                    <div className="flex flex-col">
                                        <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="guests">Guests</label>
                                        <select className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus bg-background-ivory/30" id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                                            <option>1 Person</option>
                                            <option>2 People</option>
                                            <option>3 People</option>
                                            <option>4 People</option>
                                            <option>5+ People</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Date */}
                                    <div className="flex flex-col">
                                        <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="date">Preferred Date</label>
                                        <input className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus bg-background-ivory/30" id="date" name="date" value={formData.date} onChange={handleChange} required type="date" />
                                    </div>
                                    {/* Time */}
                                    <div className="flex flex-col">
                                        <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="time">Preferred Time</label>
                                        <select className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus bg-background-ivory/30" id="time" name="time" value={formData.time} onChange={handleChange}>
                                            <option>18:00</option>
                                            <option>19:00</option>
                                            <option>20:00</option>
                                            <option>21:00</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Special Requests */}
                                <div className="flex flex-col">
                                    <label className="text-xs uppercase tracking-widest text-charcoal font-semibold mb-2" htmlFor="requests">Special Requests (Optional)</label>
                                    <textarea className="border-border-neutral rounded-sm p-3 text-sm transition-soft gold-focus resize-none bg-background-ivory/30" id="requests" name="requests" value={formData.requests} onChange={handleChange} placeholder="Allergies, anniversaries, or special seating preferences..." rows="4"></textarea>
                                </div>
                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 px-8 rounded-sm text-sm font-bold uppercase tracking-[0.2em] transition-soft btn-hover-lift shadow-md" type="submit">
                                        Reserve Now
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Image Column */}
                        <div className="h-full" data-purpose="reservation-visual-context">
                            <div className="sticky top-32">
                                <img alt="Luxury restaurant dining area" className="w-full h-auto object-cover rounded-sm shadow-xl aspect-[4/5] img-hover-scale transition-soft" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVKHtcw5X1cptWKGmP-u9YY1DYDvKCjkNvsVPMjc9uNMnCN6M9tywezTdIdPPIbRdLNgrGj73VwNuMSSkHQslIRfKEU6iJggG9mYV_w1Ls3MaXMLYqdn2npmhq4Ve63-Ae4hMoAT02kB4h_7jJCOvCnnp9rJuCQx3uHi7YhmFAeCOgP5QUmjsqyNuJnLwfcLVuBgzbzDQOj1fAGzPWayKSf5b0Uh3CbOeyRka_zmBN7IXQZKpjWyf2xaF15dU0qdGwLcyj9L5RrqM" />
                                {/* Subtle decorative element */}
                                <div className="mt-8 border-l-2 border-primary pl-6 bg-white/50 p-6 rounded-r-sm" style={{ borderColor: '#B76E79' }}>
                                    <p className="font-serif italic text-xl text-charcoal">"A dining experience that transcends the ordinary, where every detail is meticulously crafted for your pleasure."</p>
                                    <p className="mt-2 text-xs uppercase tracking-widest text-primary font-bold">— Executive Chef</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                /* END: Reservation Main Section */
            )}

            {/* BEGIN: Your Reservations Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="mb-12 text-center">
                    <h2 className="serif-heading text-4xl mb-2 text-charcoal">Your Reservations</h2>
                    <div className="w-16 h-[1px] bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Upcoming Reservations */}
                    <div>
                        <h3 className="serif-heading text-2xl mb-8 text-charcoal flex items-center gap-3">
                            Upcoming Reservations
                            {isSubmitted && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-sans font-bold uppercase tracking-wider">1 Active</span>}
                        </h3>
                        {isSubmitted ? (
                            <div className="space-y-6 animate-fade-in">
                                {/* Card: Upcoming */}
                                <div className="bg-white p-6 rounded-sm border border-border-neutral shadow-sm">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-soft-grey mb-1">Reservation ID</p>
                                            <p className="font-bold text-charcoal">#{reservationId}</p>
                                        </div>
                                        <span className="px-3 py-1 border border-primary text-primary text-[10px] uppercase font-bold tracking-widest rounded-full">Confirmed</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-soft-grey">Date</p>
                                            <p className="text-sm font-medium">{formattedDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-soft-grey">Time</p>
                                            <p className="text-sm font-medium">{formData.time}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-soft-grey">Guests</p>
                                            <p className="text-sm font-medium">{formData.guests}</p>
                                        </div>
                                    </div>
                                    <button onClick={handleModify} className="block w-full py-3 bg-white border-2 border-primary text-primary text-xs uppercase font-bold tracking-widest rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1 text-center">Modify Reservation</button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-soft-grey italic text-sm">You have no upcoming reservations.</p>
                        )}
                    </div>
                    {/* Past Reservations */}
                    <div>
                        <h3 className="serif-heading text-2xl mb-8 text-charcoal">Past Reservations</h3>
                        <div className="space-y-6">
                            {/* Card: Completed */}
                            <div className="bg-white/60 p-6 rounded-sm border border-border-neutral">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey mb-1">Reservation ID</p>
                                        <p className="font-bold text-charcoal">#KK-2024-7210</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] uppercase font-bold tracking-widest rounded-full">Completed</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey">Date</p>
                                        <p className="text-sm font-medium">Aug 12, 2024</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey">Time</p>
                                        <p className="text-sm font-medium">20:00</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey">Guests</p>
                                        <p className="text-sm font-medium">2 People</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 border border-charcoal/20 text-charcoal/60 text-[10px] uppercase font-bold tracking-widest transition-soft hover:bg-charcoal hover:text-white">View Receipt</button>
                            </div>
                            {/* Card: Cancelled */}
                            <div className="bg-white/60 p-6 rounded-sm border border-border-neutral">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey mb-1">Reservation ID</p>
                                        <p className="font-bold text-charcoal text-opacity-50">#KK-2024-6542</p>
                                    </div>
                                    <span className="px-3 py-1 bg-red-50 text-red-400 text-[10px] uppercase font-bold tracking-widest rounded-full">Cancelled</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 mb-6 text-opacity-50">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey">Date</p>
                                        <p className="text-sm font-medium">Jun 05, 2024</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey">Time</p>
                                        <p className="text-sm font-medium">19:00</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-soft-grey">Guests</p>
                                        <p className="text-sm font-medium">6 People</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 border border-charcoal/10 text-charcoal/40 text-[10px] uppercase font-bold tracking-widest">Cancelled</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Your Reservations Section */}

            <Footer />
        </Header>
    );
};

export default TableBooking;
