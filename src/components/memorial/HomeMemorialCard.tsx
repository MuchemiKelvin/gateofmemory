/**
 * HomeMemorialCard.tsx
 *
 * Displays a memorial card styled for the homepage, matching the provided reference image.
 */
import React from 'react';
import Link from 'next/link';

const HomeMemorialCard: React.FC = () => (
  <div className="w-[350px] bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-2xl shadow-lg flex flex-col items-center p-6 border border-yellow-300 relative">
    <h2 className="text-2xl font-bold text-yellow-900 mb-4 tracking-wide">GATE OF MEMORY</h2>
    <div className="w-full flex flex-col items-center mb-4">
      {/* Glowing gate background with person placeholder */}
      <div className="relative w-40 h-48 flex items-center justify-center mb-2">
        <div className="absolute inset-0 rounded-full bg-yellow-200 blur-2xl opacity-70" />
        <svg viewBox="0 0 160 180" className="absolute left-0 top-0 w-full h-full">
          <ellipse cx="80" cy="90" rx="75" ry="80" fill="#f7e9b0" opacity="0.7" />
          <ellipse cx="80" cy="110" rx="60" ry="60" fill="#f7e9b0" opacity="0.5" />
        </svg>
        <div className="relative z-10 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c3.866 0 7 1.343 7 3v1H5v-1c0-1.657 3.134-3 7-3zm0-2a4 4 0 100-8 4 4 0 000 8z" /></svg>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-lg text-yellow-900 font-semibold">In Loving Memory of</p>
        <p className="text-lg text-yellow-900 font-bold mt-1">Naomi N.</p>
      </div>
    </div>
    <div className="w-full flex items-end justify-between mt-4">
      <div className="text-xs text-yellow-800 ml-1 mb-1">Scan with your<br/>camera to view<br/>the hologram</div>
      <div className="mr-1 mb-1">
        <Link href="/memorial/KGV-KSM-2024-0112" passHref legacyBehavior>
          <a className="cursor-pointer" aria-label="Go to memorial page">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-700 bg-white rounded p-1 border border-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="24" height="24" fill="none"/><path d="M3 3h4v4H3V3zm2 2v0M17 3h4v4h-4V3zm2 2v0M3 17h4v4H3v-4zm2 2v0M17 17h4v4h-4v-4zm2 2v0M7 7h2v2H7V7zm6 0h2v2h-2V7zm-6 6h2v2H7v-2zm6 6h2v2h-2v-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default HomeMemorialCard; 