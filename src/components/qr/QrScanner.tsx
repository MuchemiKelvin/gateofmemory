/**
 * QrScanner.tsx
 *
 * A QR code scanner component using react-qr-reader. On successful scan, redirects to the memorial page with the scanned ID.
 */
'use client';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const QrScanner: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [permission, setPermission] = useState<'pending' | 'granted' | 'denied'>('pending');

  const handleScan = useCallback((data: string | null) => {
    if (data) {
      router.push(`/memorial/${data}`);
    }
  }, [router]);

  const handleError = useCallback((err: unknown) => {
    let message = 'Unknown error occurred.';
    if (err instanceof Error) {
      message = err.message;
    } else if (typeof err === 'string') {
      message = err;
    }
    setError(message);
    // Check for permission errors
    if (message.toLowerCase().includes('permission')) {
      setPermission('denied');
    }
    console.error(err);
  }, []);

  // react-qr-reader does not provide explicit permission events, so we infer from errors

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Scan a Memorial QR Code</h2>
      <div className="w-72 h-72 bg-gray-100 rounded-lg shadow flex items-center justify-center" aria-label="QR Scanner">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {permission === 'denied' && (
        <p className="mt-4 text-red-600 text-sm">Camera access denied. Please enable camera permissions in your browser settings.</p>
      )}
      {error && permission !== 'denied' && (
        <p className="mt-4 text-red-600 text-sm">{error}</p>
      )}
      <p className="mt-4 text-gray-600 text-sm">Point your camera at a QR code to view a memorial.</p>
    </div>
  );
};

export default QrScanner; 