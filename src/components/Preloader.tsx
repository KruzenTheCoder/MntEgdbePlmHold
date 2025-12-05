import React, { useEffect, useState } from 'react';
import WaveBackground from '@/components/WaveBackground';

const Preloader: React.FC<{ exiting?: boolean }> = ({ exiting = false }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const stepMs = 50;
    const durationMs = 2000;
    const inc = 100 * stepMs / durationMs;
    const t = setInterval(() => setProgress((p) => Math.min(100, p + inc)), stepMs);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={`fixed inset-0 z-[1000] bg-white ${exiting ? 'preloader-exit' : ''}`}>
      <div className="absolute inset-0">
        <WaveBackground />
      </div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className={`rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md p-8 w-[90%] max-w-md border border-blue-100 ${exiting ? 'scale-105 transition-transform' : ''}`}>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://i.ibb.co/8DH9PpTf/Gemini-Generated-Image-5aedc85aedc85aed-removebg-preview.png"
              alt="Company Logo"
              className="w-20 h-20 object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="text-center">
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Mount Edgecombe Plumbling and Holdings
              </div>
              <div className="text-sm text-gray-600">Preparing experience…</div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-[width]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
