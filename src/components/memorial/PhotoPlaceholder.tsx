/**
 * PhotoPlaceholder.tsx
 * 
 * Renders a photo if provided, otherwise shows a default placeholder icon and label.
 */
import React from 'react';

const PhotoPlaceholder: React.FC<{ profileImage?: string; name: string }> = ({ profileImage, name }) => (
  <div className="w-40 h-48 bg-yellow-50 border-2 border-yellow-300 rounded-lg flex flex-col items-center justify-center mb-6">
    {profileImage ? (
      <img src={profileImage} alt={name} className="w-full h-full object-cover rounded-lg" />
    ) : (
      <div className="flex flex-col items-center justify-center h-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c3.866 0 7 1.343 7 3v1H5v-1c0-1.657 3.134-3 7-3zm0-2a4 4 0 100-8 4 4 0 000 8z" /></svg>
        <span className="text-yellow-400 text-sm">Photo</span>
      </div>
    )}
  </div>
);

export default PhotoPlaceholder; 