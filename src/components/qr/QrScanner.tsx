/**
 * QrScanner.tsx
 *
 * A QR code scanner component using react-qr-reader. On successful scan, redirects to the memorial page with the scanned ID.
 */
'use client';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const QrScanner: React.FC = () => {
  const router = useRouter();

  const handleScan = useCallback((data: string | null) => {
    if (data) {
      // Assume the QR code contains the memorial ID
      router.push(`/memorial/${data}`);
    }
  }, [router]);

  const handleError = useCallback((err: any) => {
    // Optionally handle errors
    console.error(err);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Scan a Memorial QR Code</h2>
      <div className="w-72 h-72 bg-gray-100 rounded-lg shadow flex items-center justify-center">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <p className="mt-4 text-gray-600 text-sm">Point your camera at a QR code to view a memorial.</p>
    </div>
  );
};

export default QrScanner; 