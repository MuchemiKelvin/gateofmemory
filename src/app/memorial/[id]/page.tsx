"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import memories from '../../../mock/memories.json';
import GateAnimation from '../../../components/memorial/GateAnimation';
import MemorialPages from '../../../components/memorial/MemorialPages';
import { Memorial } from '../../../types/memorial';

export default function MemorialDetailPage() {
  const params = useParams();
  const memorials = memories as Memorial[];
  const memorial = memorials.find(m => m.id === (params?.id ?? ''));
  const [showContent, setShowContent] = useState(false);

  if (!memorial) {
    return <div>Memorial not found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!showContent ? (
        <GateAnimation onComplete={() => setShowContent(true)} />
      ) : (
        <MemorialPages memorial={memorial} />
      )}
    </div>
  );
}
