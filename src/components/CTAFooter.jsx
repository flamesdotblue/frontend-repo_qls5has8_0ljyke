import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTAFooter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="border-t border-white/10 bg-[#07080c] py-16 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h3 className="text-3xl font-semibold">Be first to get access</h3>
        <p className="mt-3 text-white/70">Join the waitlist and we’ll email you the beta in the coming weeks.</p>

        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex w-full max-w-xl items-center gap-2">
          <div className="flex w-full items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left">
            <Mail className="h-4 w-4 text-white/60" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Join waitlist
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {submitted && (
          <p className="mt-3 text-sm text-emerald-400">Thanks! We’ll be in touch soon.</p>
        )}

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Disappear Auth Inc.</p>
      </div>
    </footer>
  );
}
