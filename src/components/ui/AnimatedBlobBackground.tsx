import { motion } from 'framer-motion';

interface BlobConfig {
  className: string;
  animation: {
    x: number[];
    y: number[];
    scale: number[];
  };
  duration: number;
  delay?: number;
}

interface AnimatedBlobBackgroundProps {
  className?: string;
  blobCount?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const defaultBlobs: BlobConfig[] = [
  {
    className: "absolute -top-32 -right-32 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60",
    animation: {
      x: [0, 50, -30, 0],
      y: [0, -60, 40, 0],
      scale: [1, 1.2, 0.9, 1],
    },
    duration: 20,
  },
  {
    className: "absolute -bottom-32 -left-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60",
    animation: {
      x: [0, -40, 50, 0],
      y: [0, 60, -30, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 25,
    delay: 2,
  },
  {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50",
    animation: {
      x: [0, 30, -20, 0],
      y: [0, -40, 25, 0],
      scale: [1, 1.15, 0.85, 1],
    },
    duration: 18,
    delay: 1,
  },
  {
    className: "absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-55",
    animation: {
      x: [0, 40, -25, 0],
      y: [0, 30, -45, 0],
      scale: [1, 1.3, 0.8, 1],
    },
    duration: 15,
    delay: 0.5,
  },
  {
    className: "absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-55",
    animation: {
      x: [0, -35, 45, 0],
      y: [0, -50, 35, 0],
      scale: [1, 1.25, 0.9, 1],
    },
    duration: 22,
    delay: 3,
  },
  {
    className: "absolute top-32 left-1/2 -translate-x-1/2 w-56 h-56 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50",
    animation: {
      x: [0, 25, -35, 0],
      y: [0, 50, -30, 0],
      scale: [1, 1.4, 0.75, 1],
    },
    duration: 12,
    delay: 1.5,
  },
  {
    className: "absolute bottom-40 left-1/4 w-96 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-45",
    animation: {
      x: [0, -50, 40, 0],
      y: [0, 35, -40, 0],
      scale: [1, 1.2, 0.85, 1],
    },
    duration: 28,
    delay: 4,
  },
  {
    className: "absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50",
    animation: {
      x: [0, -30, 50, 0],
      y: [0, -25, 40, 0],
      scale: [1, 1.35, 0.8, 1],
    },
    duration: 16,
    delay: 2.5,
  },
  {
    className: "absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40",
    animation: {
      x: [0, 60, -40, 0],
      y: [0, -70, 50, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 24,
    delay: 5,
  },
];

export default function AnimatedBlobBackground({ 
  className = '', 
  blobCount,
  intensity = 'high' 
}: AnimatedBlobBackgroundProps) {
  // Get blobs to render based on count or intensity
  const blobsToRender = blobCount 
    ? defaultBlobs.slice(0, blobCount)
    : intensity === 'low' 
      ? defaultBlobs.slice(0, 3)
      : intensity === 'medium'
        ? defaultBlobs.slice(0, 5)
        : defaultBlobs;

  // Adjust opacity multiplier based on intensity
  const opacityMultiplier = intensity === 'low' ? 0.6 : intensity === 'medium' ? 0.8 : 1;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobsToRender.map((blob, index) => {
        // Adjust opacity in className if intensity is not high
        const adjustedClassName = intensity !== 'high' && blob.className.includes('opacity-')
          ? blob.className.replace(/opacity-(\d+)/, (_, opacity) => {
              const newOpacity = Math.round(Number(opacity) * opacityMultiplier);
              return `opacity-${newOpacity}`;
            })
          : blob.className;

        return (
          <motion.div
            key={index}
            className={adjustedClassName}
            animate={{
              x: blob.animation.x,
              y: blob.animation.y,
              scale: blob.animation.scale,
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.delay || 0,
            }}
          />
        );
      })}
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

