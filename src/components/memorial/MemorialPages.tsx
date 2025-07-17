/**
 * MemorialPages.tsx
 *
 * Displays memorial information in either tabbed or swipeable (carousel) mode.
 * User can toggle between navigation styles.
 */
'use client';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import GateCard from './GateCard';
import MemorialPhotoGallery from './MemorialPhotoGallery';
import MemorialVideoGallery from './MemorialVideoGallery';
import MemorialAudioGallery from './MemorialAudioGallery';
import MemorialTextStories from './MemorialTextStories';
import { Memorial } from '../../types/memorial';

const TABS = [
  { label: 'Info', key: 'info' },
  { label: 'Photos', key: 'photos' },
  { label: 'Videos', key: 'videos' },
  { label: 'Audio', key: 'audio' },
  { label: 'Stories', key: 'stories' },
];

interface MemorialPagesProps {
  memorial: Memorial;
}

const GateCardData = {
  name: 'John',
  years: '1964 – 2024',
  subtitle: 'Gate of Memory — Christian',
  videoSrc: '/gate-open.mp4',
  id: 'KGV-KSM-2024-0112',
  nftLabel: 'NFT',
  openseaUrl: 'https://opensea.io/',
};

const MemorialPages: React.FC<MemorialPagesProps> = ({ memorial }) => {
  const [mode, setMode] = useState<'tabs' | 'swipe'>('tabs');
  const [page, setPage] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setPage((p) => Math.min(p + 1, TABS.length - 1)),
    onSwipedRight: () => setPage((p) => Math.max(p - 1, 0)),
    trackMouse: true,
  });

  const renderPage = () => {
    switch (TABS[page].key) {
      case 'info':
        return <GateCard {...GateCardData} />;
      case 'photos':
        return <MemorialPhotoGallery />;
      case 'videos':
        return <MemorialVideoGallery />;
      case 'audio':
        return <MemorialAudioGallery />;
      case 'stories':
        return <MemorialTextStories />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between mb-4">
        <div>
          <button
            className={`px-3 py-1 rounded-l ${mode === 'tabs' ? 'bg-yellow-700 text-white' : 'bg-neutral-800 text-yellow-200'}`}
            onClick={() => setMode('tabs')}
          >
            Tabs
          </button>
          <button
            className={`px-3 py-1 rounded-r ${mode === 'swipe' ? 'bg-yellow-700 text-white' : 'bg-neutral-800 text-yellow-200'}`}
            onClick={() => setMode('swipe')}
          >
            Swipe
          </button>
        </div>
        <div className="flex gap-2">
          {TABS.map((tab, idx) => (
            <button
              key={tab.key}
              className={`px-2 py-1 rounded ${page === idx ? 'bg-yellow-500 text-black' : 'bg-neutral-800 text-yellow-200'}`}
              onClick={() => setPage(idx)}
              disabled={mode === 'swipe'}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div {...(mode === 'swipe' ? handlers : {})} className="bg-neutral-900 rounded-lg p-6 min-h-[350px] flex items-center justify-center">
        {renderPage()}
      </div>
      {mode === 'swipe' && (
        <div className="flex justify-center gap-2 mt-4">
          {TABS.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${page === idx ? 'bg-yellow-400' : 'bg-neutral-700'}`}
              onClick={() => setPage(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MemorialPages; 