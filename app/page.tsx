import React from 'react';

interface BannerProps {
  purpose: 'For Rent' | 'For Sale';
}

const Banner: React.FC<BannerProps> = ({ purpose }) => (
  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800">
      {purpose === 'For Rent' ? 'Properties For Rent' : 'Properties For Sale'}
    </h1>
  </div>
);

export default Banner;
