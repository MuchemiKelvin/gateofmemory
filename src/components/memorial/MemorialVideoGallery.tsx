/**
 * MemorialVideoGallery.tsx
 *
 * Displays a gallery of videos for a memorial. Uses dummy data for now.
 */
import React from 'react';

const dummyVideos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
];

const MemorialVideoGallery: React.FC = () => (
  <div className="flex flex-col gap-4 w-full">
    {dummyVideos.map((url, idx) => (
      <video
        key={idx}
        controls
        className="rounded-lg shadow-md w-full h-48 bg-black"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ))}
  </div>
);

export default MemorialVideoGallery; 