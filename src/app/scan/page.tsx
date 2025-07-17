import React from 'react';
import QrScanner from '../../components/qr/QrScanner';

export default function ScanPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-200 py-8 px-2">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl border-2 border-yellow-300 flex flex-col items-center p-8">
        <h1 className="text-3xl font-extrabold text-yellow-900 mb-2 tracking-wide text-center drop-shadow">Scan a Memorial QR Code</h1>
        <p className="text-yellow-800 text-base mb-6 text-center">Point your camera at a QR code to view a memorial. Make sure your camera is enabled and well-lit for best results.</p>
        <QrScanner />
      </div>
    </div>
  );
}
