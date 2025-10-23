import React, { useMemo, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTAFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const backendUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, ''), []);

  const validateEmail = (value) => {
    // Basic RFC 5322 compliant-ish email check
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      if (!backendUrl) throw new Error('Backend URL not configured');

      const res = await fetch(`${backendUrl}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });

      const contentType = res.headers.get('content-type');
      let data = null;
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      }

      if (!res.ok) {
        const detail = data?.detail || data?.message;
        throw new Error(detail || `Request failed with ${res.status}`);
      }

      const successMsg = data?.message || 'Thanks! You\'re on the list.';
      setStatus('success');
      setMessage(successMsg);
      setEmail('');
    } catch (err) {
      console.error('Waitlist error:', err);
      setStatus('error');
      setMessage(
        err?.message?.includes('URL not configured')
          ? 'Waitlist is temporarily unavailable. Please try again shortly.'
          : 'Something went wrong. Please try again.'
      );
    }
  };

  const isLoading = status === 'loading';

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
            disabled={isLoading}
            className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${
              isLoading ? 'bg-white/50 text-black' : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            {isLoading ? 'Joining…' : 'Join waitlist'}
            {!isLoading && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-3 text-sm text-emerald-400">{message}</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-400">{message}</p>
        )}

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Disappear Auth Inc.</p>
      </div>
    </footer>
  );
}
