import React, { useMemo, useState } from 'react';
import { Check, Copy, Terminal, Code2 } from 'lucide-react';

const codeBlocks = {
  javascript: `// 1) Install the SDK (already tree-shaken)
// npm i @disappearauth/js

import { auth } from '@disappearauth/js';

// One line: open the native biometric prompt
await auth.signIn();

// Optional: get the session
const session = await auth.session();
`,
  curl: `# Exchange a passkey assertion for a session
curl -X POST \\
  https://api.disappearauth.com/v1/auth/passkey \\
  -H 'Content-Type: application/json' \\
  -d '{
    "challenge": "<from-server>",
    "assertion": { /* WebAuthn payload */ }
  }'
`,
};

export default function CodeSnippet() {
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => codeBlocks[active], [active]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="code" className="relative bg-[#07080c] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-fuchsia-600/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Code2 className="h-3.5 w-3.5 text-cyan-400" />
            One line to production
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Drop-in biometric login</h2>
          <p className="mt-3 text-white/70">Copy, paste, ship. Built for modern stacks with first-class passkey support.</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0b0d14]/70 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <div className="flex gap-1">
              {['javascript', 'curl'].map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    active === key ? 'bg-white text-black' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {key === 'javascript' ? 'JavaScript' : 'cURL'}
                </button>
              ))}
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:bg-white/10"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="relative m-0 max-h-[460px] w-full overflow-auto p-4 text-sm leading-relaxed text-white/90">
            <code>{code}</code>
          </pre>
          <div className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/60">
            <Terminal className="h-3.5 w-3.5" />
            Works with Next.js, React, Remix, Vite, Expo, Node, and more
          </div>
        </div>
      </div>
    </section>
  );
}
