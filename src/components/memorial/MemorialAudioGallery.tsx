/**
 * MemorialAudioGallery.tsx
 *
 * Displays a gallery of audio memories for a memorial. Uses dummy data for now.
 */
import React from 'react';

const dummyAudios = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
];

const MemorialAudioGallery: React.FC = () => (
  <div className="flex flex-col gap-4 w-full">
    {dummyAudios.map((url, idx) => (
      <audio
        key={idx}
        controls
        className="w-full"
      >
        <source src={url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    ))}
  </div>
);

export default MemorialAudioGallery; 