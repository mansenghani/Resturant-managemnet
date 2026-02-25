import React from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const ShowFeedback = () => {
  return (
    <div className="flex bg-[#f4efec] min-h-screen w-full">
      
{/* <!-- BEGIN: Feedback Details Modal Container --> */}
<div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4" data-purpose="modal-overlay">
{/* <!-- BEGIN: Modal Card --> */}
<article className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300" data-purpose="feedback-modal-card">
{/* <!-- BEGIN: Modal Header --> */}
<header className="px-8 pt-8 pb-4 flex justify-between items-start">
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-widest text-luxe-text-muted font-semibold">Review Details</p>
<h1 className="text-3xl serif-title text-luxe-text-dark">Guest Feedback</h1>
</div>
{/* <!-- Close Button --> */}
<button onclick="window.history.back()" className="text-luxe-text-muted hover:text-luxe-text-dark transition-colors p-2">
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
<div className="h-16 w-16 rounded-full bg-luxe-rose-light flex items-center justify-center text-luxe-rose font-serif text-xl border border-luxe-rose/10">
              <?= htmlspecialchars($initials) ?>
            </div>
<div>
<h2 className="text-xl font-semibold text-luxe-text-dark"><?= htmlspecialchars($name) ?></h2>
<p className="text-sm text-luxe-text-muted"><?= htmlspecialchars($email) ?></p>
</div>
</div>
<div className="flex flex-col md:items-end gap-1">
<div className="flex gap-1 text-luxe-star">
{/* <!-- 5-Star Rating Display --> */}
<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
<svg className="w-5 h-5 text-luxe-star-empty fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
</div>
<p className="text-xs font-medium text-luxe-text-muted uppercase tracking-wider"><?= htmlspecialchars($date) ?></p>
</div>
</section>
{/* <!-- Section: Feedback Message --> */}
<section className="space-y-4">
<h3 className="text-xs font-bold uppercase tracking-widest text-luxe-text-muted">Review Content</h3>
<p className="text-luxe-text-dark leading-relaxed text-lg italic serif-title">
            "<?= htmlspecialchars($review) ?>"
          </p>
</section>
{/* <!-- Section: Metadata Grid --> */}
<section className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-luxe-text-muted mb-1">Visit Date</p>
<p className="text-sm font-semibold text-luxe-text-dark"><?= htmlspecialchars($date) ?></p>
</div>
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-luxe-text-muted mb-1">Table No.</p>
<p className="text-sm font-semibold text-luxe-text-dark">14 (Window Side)</p>
</div>
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-luxe-text-muted mb-1">Service Staff</p>
<p className="text-sm font-semibold text-luxe-text-dark">Julian S.</p>
</div>
<div data-purpose="meta-item">
<p className="text-[10px] font-bold uppercase tracking-widest text-luxe-text-muted mb-1">Status</p>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium <?= $statusClasses ?>">
              <?= htmlspecialchars($status) ?>
            </span>
</div>
</section>
</main>
{/* <!-- END: Modal Content --> */}
{/* <!-- BEGIN: Modal Footer / Actions --> */}
<footer className="px-8 py-8 bg-luxe-beige/50 border-t border-luxe-border flex flex-col sm:flex-row justify-end items-center gap-4">
<button onclick="window.history.back()" className="w-full sm:w-auto px-8 py-3 rounded-lg border-2 border-luxe-rose text-luxe-rose font-semibold hover:bg-luxe-rose hover:text-white transition-all duration-300 active:scale-95">
          Reject Review
        </button>
<button onclick="window.history.back()" className="w-full sm:w-auto px-8 py-3 rounded-lg bg-luxe-rose text-white font-semibold hover:bg-[#b07270] shadow-lg shadow-luxe-rose/20 transition-all duration-300 active:scale-95">
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

export default ShowFeedback;