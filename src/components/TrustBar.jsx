import React from 'react';
import { ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export default function TrustBar() {
  return (
    <section id="trust" className="bg-[#0a0b0f] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Built for trust</h3>
            <p className="mt-2 text-white/70">
              Security is the product. We ship with strong device attestation, replay protection, and hardware-backed keys.
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> SOC 2 Type II ready</li>
              <li className="flex items-center gap-2"><Lock className="h-4 w-4 text-emerald-400" /> GDPR & Privacy by design</li>
              <li className="flex items-center gap-2"><Fingerprint className="h-4 w-4 text-emerald-400" /> Passkeys and WebAuthn native</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-white/50">Trusted by</p>
              <div className="mt-3 flex items-center gap-4 opacity-80">
                <div className="text-lg font-semibold">NovaBank</div>
                <div className="text-lg font-semibold">BlueStack</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-white/50">Runtime</p>
              <div className="mt-3 flex items-center gap-4 opacity-80">
                <div className="text-lg font-semibold">AWS</div>
                <div className="text-lg font-semibold">Cloudflare</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-white/50">SDKs</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 opacity-80">
                <span className="rounded bg-white/10 px-2 py-1 text-xs">JS</span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">iOS</span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">Android</span>
                <span className="rounded bg-white/10 px-2 py-1 text-xs">Node</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wider text-white/50">Uptime</p>
              <div className="mt-3 text-2xl font-semibold">99.99%</div>
              <p className="text-xs text-white/60">Global edge network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
