import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

interface GeneratedQrCodeProps {
  value: string; // The URL or text to encode
  size?: number;
  label?: string;
}

const GeneratedQrCode: React.FC<GeneratedQrCodeProps> = ({ value, size = 192, label }) => {
  const qrRef = useRef<HTMLDivElement>(null);

  // Download QR as PNG
  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'memorial-qr.png';
    a.click();
  };

  // Share QR using Web Share API (if available)
  const handleShare = async () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const res = await fetch(url);
    const blob = await res.blob();
    const file = new File([blob], 'memorial-qr.png', { type: 'image/png' });
    if ((navigator as any).share) {
      (navigator as any).share({
        files: [file],
        title: 'Memorial QR Code',
        text: label || value,
      });
    } else {
      alert('Sharing is not supported on this device/browser. Please download instead.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {label && <div className="mb-2 text-yellow-900 font-semibold text-center">{label}</div>}
      <div ref={qrRef} className="bg-white p-2 rounded-lg shadow border border-yellow-300">
        <QRCodeCanvas value={value} size={size} fgColor="#78350f" bgColor="#fffbe6" level="H" includeMargin={true} />
      </div>
      <div className="flex gap-2 mt-2">
        <button
          className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold rounded shadow border border-yellow-700"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded shadow border border-yellow-700"
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default GeneratedQrCode; 