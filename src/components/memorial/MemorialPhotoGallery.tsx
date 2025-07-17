/**
 * MemorialPhotoGallery.tsx
 *
 * Displays a gallery of photos for a memorial. Uses dummy data for now.
 */
import React from 'react';

const dummyPhotos = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
];

const MemorialPhotoGallery: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {dummyPhotos.map((url, idx) => (
      <img
        key={idx}
        src={url}
        alt={`Memorial photo ${idx + 1}`}
        className="rounded-lg shadow-md object-cover w-full h-48"
      />
    ))}
  </div>
);

export default MemorialPhotoGallery; 