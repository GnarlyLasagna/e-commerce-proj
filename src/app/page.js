import VideoPlayer from '../components/VideoPlayer';
import Image from "next/image";
import React from 'react';
import ProductGrid from '../components/ProductGrid';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <VideoPlayer videoId="iJtn9ptKIjI" />
      <ProductGrid />
    </main>
  );
}
