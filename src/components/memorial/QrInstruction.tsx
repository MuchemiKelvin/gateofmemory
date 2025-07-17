/**
 * QrInstruction.tsx
 * 
 * Shows the scan instructions and renders a QR code or a placeholder icon.
 */
import React from 'react';

const QrInstruction: React.FC<{ qrCodeUrl?: string }> = ({ qrCodeUrl }) => (
  <div className="w-full flex items-end justify-between mt-4">
    <div className="text-xs text-yellow-800 ml-1 mb-1">Scan with your<br />camera to view<br />the hologram</div>
    <div className="mr-1 mb-1">
      {qrCodeUrl ? (
        <img src={qrCodeUrl} alt="QR Code" className="w-12 h-12 rounded bg-white p-1 border border-yellow-300" />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-700 bg-white rounded p-1 border border-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="24" height="24" fill="none"/><path d="M3 3h4v4H3V3zm2 2v0M17 3h4v4h-4V3zm2 2v0M3 17h4v4H3v-4zm2 2v0M17 17h4v4h-4v-4zm2 2v0M7 7h2v2H7V7zm6 0h2v2h-2V7zm-6 6h2v2H7v-2zm6 6h2v2h-2v-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )}
    </div>
  </div>
);

export default QrInstruction; 