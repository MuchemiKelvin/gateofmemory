/**
 * MemorialTextStories.tsx
 *
 * Displays a list of written stories or text memories for a memorial. Uses dummy data for now.
 */
import React from 'react';

const dummyStories = [
  {
    title: 'A Cherished Memory',
    content: 'Naomi always brought joy to every family gathering. Her laughter was infectious and her kindness knew no bounds.'
  },
  {
    title: 'A Lesson Remembered',
    content: 'She taught me the value of patience and the importance of listening. I will always be grateful for her wisdom.'
  }
];

const MemorialTextStories: React.FC = () => (
  <div className="flex flex-col gap-4 w-full">
    {dummyStories.map((story, idx) => (
      <div key={idx} className="bg-yellow-50 rounded-lg p-4 shadow">
        <h3 className="font-bold text-yellow-900 mb-2">{story.title}</h3>
        <p className="text-yellow-800">{story.content}</p>
      </div>
    ))}
  </div>
);

export default MemorialTextStories; 