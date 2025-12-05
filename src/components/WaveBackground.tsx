import React from 'react';

const WaveBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[200%] h-40 opacity-30" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"1600\" height=\"160\" viewBox=\"0 0 1600 160\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 80 C 200 120 400 40 600 80 C 800 120 1000 40 1200 80 C 1400 120 1600 40 1600 40 L 1600 160 L 0 160 Z\" fill=\"%230066CC\" opacity=\"0.5\"/%3E%3Cpath d=\"M0 100 C 200 140 400 60 600 100 C 800 140 1000 60 1200 100 C 1400 140 1600 60 1600 60 L 1600 160 L 0 160 Z\" fill=\"%2320B2AA\" opacity=\"0.5\"/%3E%3C/svg%3E')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        animation: 'waveSlide 12s linear infinite'
      }} />
      <style>{`
        @keyframes waveSlide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default WaveBackground;
