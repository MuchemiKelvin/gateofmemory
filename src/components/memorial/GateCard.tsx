/**
 * GateCard.tsx
 *
 * Displays the gate video and memorial details in a dark, elegant card.
 */
import React from 'react';

interface GateCardProps {
  name: string;
  years: string;
  subtitle: string;
  videoSrc: string;
  id?: string;
  nftLabel?: string;
  openseaUrl?: string;
}

const GateCard: React.FC<GateCardProps> = ({
  name,
  years,
  subtitle,
  videoSrc,
  id,
  nftLabel,
  openseaUrl,
}) => (
  <div className="w-[350px] bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 flex flex-col items-center p-0 overflow-hidden">
    <div className="w-full h-[250px] bg-black flex items-center justify-center">
      <video
        src={videoSrc}
        autoPlay
        muted
        width={350}
        height={250}
        className="object-contain"
        style={{ background: 'black' }}
      />
    </div>
    <div className="flex flex-col items-center px-6 py-6 w-full">
      {nftLabel && (
        <div className="w-full flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-bold">{nftLabel}</span>
          {openseaUrl && (
            <a href={openseaUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 underline">OpenSea</a>
          )}
        </div>
      )}
      <div className="text-xs text-gray-300 tracking-widest mb-2">IN LOVING MEMORY OF</div>
      <div className="text-3xl font-extrabold text-white mb-1">{name}</div>
      <div className="text-lg text-gray-400 mb-2">{years}</div>
      <div className="text-sm text-gray-300 mb-4">{subtitle}</div>
      {id && <div className="text-xs text-gray-500">{id}</div>}
    </div>
  </div>
);

export default GateCard; 