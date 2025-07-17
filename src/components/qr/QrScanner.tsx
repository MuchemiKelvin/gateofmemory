/**
 * QrScanner.tsx
 *
 * A QR code scanner component using react-qr-reader. On successful scan, redirects to the memorial page with the scanned ID.
 */
'use client';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import jsQR from 'jsqr';

const QrReader = dynamic(
  () => import('react-qr-reader').then(mod => mod.QrReader),
  { ssr: false }
);

const QrScanner: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [permission, setPermission] = useState<'pending' | 'granted' | 'denied'>('pending');
  const [scannedValue, setScannedValue] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleResult = useCallback((result: any, err: any) => {
    if (result?.text && !isRedirecting) {
      setScannedValue(result.text);
      setIsRedirecting(true);
      setTimeout(() => {
        router.push(`/memorial/${result.text}`);
      }, 1000); // Show scanned value for 1 second
    }
    if (err) {
      let message = 'Unknown error occurred.';
      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === 'string') {
        message = err;
      }
      setError(message);
      if (typeof message === 'string' && message.toLowerCase().includes('permission')) {
        setPermission('denied');
      }
      // Only log errors, don't block on them
      // console.error(err);
    }
  }, [router, isRedirecting]);

  // Handle image upload and QR scan
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Could not get canvas context');
          return;
        }
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imageData.data, img.width, img.height);
        if (code && code.data) {
          setScannedValue(code.data);
          setIsRedirecting(true);
          setTimeout(() => {
            router.push(`/memorial/${code.data}`);
          }, 1000);
        } else {
          setError('No QR code found in the image.');
        }
      };
      img.onerror = () => setError('Failed to load image.');
      img.src = e.target?.result as string;
    };
    reader.onerror = () => setError('Failed to read file.');
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-yellow-900 drop-shadow text-center">Scan a Memorial QR Code</h2>
      <div className="w-full flex flex-col items-center">
        <div className="relative w-80 max-w-full h-80 bg-black rounded-2xl shadow-2xl border-4 border-yellow-400 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-10 pointer-events-none border-4 border-yellow-400 rounded-2xl animate-pulse" style={{ boxShadow: '0 0 32px 4px #facc15, 0 0 0 8px #fff3cd' }} />
          <QrReader
            constraints={{ facingMode: 'environment' }}
            scanDelay={300}
            onResult={handleResult}
            containerStyle={{ width: '100%', height: '100%', background: 'black', borderRadius: '1rem', zIndex: 5 }}
            videoContainerStyle={{ width: '100%', height: '100%', background: 'black', borderRadius: '1rem' }}
            videoStyle={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold rounded shadow border-2 border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => fileInputRef.current?.click()}
          type="button"
        >
          Upload QR Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        {scannedValue && (
          <div className="mt-4 px-4 py-2 bg-green-700/90 text-white font-bold text-lg rounded shadow animate-pulse border-2 border-green-400">
            Scanned: {scannedValue}
          </div>
        )}
        {permission === 'denied' && (
          <p className="mt-4 text-red-700 text-base font-semibold bg-red-100 rounded px-3 py-2 border border-red-300">Camera access denied. Please enable camera permissions in your browser settings.</p>
        )}
        {error && permission !== 'denied' && (
          <p className="mt-4 text-red-700 text-base font-semibold bg-red-100 rounded px-3 py-2 border border-red-300">{error}</p>
        )}
        <p className="mt-6 text-yellow-900 text-lg font-medium text-center drop-shadow">Point your camera at a QR code to view a memorial.<br/>Or upload a QR code image.<br/>Make sure your camera is enabled and well-lit for best results.</p>
      </div>
    </div>
  );
};

export default QrScanner; 