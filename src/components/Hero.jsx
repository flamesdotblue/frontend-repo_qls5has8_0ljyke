import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0f] text-white">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:gap-12 md:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            Zero-friction, passwordless auth
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">Auth that disappears.</span>
          </h1>
          <p className="mt-5 text-white/70">
            Ship biometric logins for your app in minutes. One line of code, global scale, built-in device trust, WebAuthn and passkeys by default.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#code"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Start with one line
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#trust"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Learn why developers trust us
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-emerald-400" />
              FIDO2 / WebAuthn
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              End-to-end encrypted
            </div>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[420px] w-full flex-1 md:h-[540px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.02] p-1">
            <div className="h-full w-full overflow-hidden rounded-xl">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          {/* Gradient overlay (does not block interaction) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
