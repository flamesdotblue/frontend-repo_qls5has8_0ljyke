import React from 'react';
import Hero from './components/Hero';
import CodeSnippet from './components/CodeSnippet';
import TrustBar from './components/TrustBar';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased">
      <Hero />
      <CodeSnippet />
      <TrustBar />
      <CTAFooter />
    </div>
  );
}

export default App;
