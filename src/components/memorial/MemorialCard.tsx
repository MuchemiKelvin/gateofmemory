/**
 * MemorialCard.tsx
 * 
 * Displays a memorial card with the person's name, photo (or placeholder), 
 * and a QR code with scan instructions. Used on the landing and memorial detail pages.
 */
import React from 'react';
import QrInstruction from './QrInstruction';
import PhotoPlaceholder from './PhotoPlaceholder';

interface MemorialCardProps {
  name: string;
  profileImage?: string;
  qrCodeUrl?: string;
}

const MemorialCard: React.FC<MemorialCardProps> = ({
  name,
  profileImage,
  qrCodeUrl,
}) => (
  <div className="w-[350px] h-[500px] bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-2xl shadow-lg flex flex-col items-center justify-between p-6 border border-yellow-300 relative">
    <div className="w-full flex flex-col items-center mt-2">
      <h2 className="text-2xl font-bold text-yellow-900 mb-6 tracking-wide">GATE OF MEMORY</h2>
      <PhotoPlaceholder profileImage={profileImage} name={name} />
      <div className="text-center mt-2">
        <p className="text-lg text-yellow-900 font-semibold">In Loving Memory</p>
        <p className="text-lg text-yellow-900 font-bold mt-1">of {name}</p>
      </div>
    </div>
    <QrInstruction qrCodeUrl={qrCodeUrl} />
  </div>
);

export default MemorialCard; 