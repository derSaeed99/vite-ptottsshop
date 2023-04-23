import { Paper } from '@mui/material';
import { animated, useSpring, easings } from '@react-spring/web';
import React, { useRef } from 'react';

interface VideoCard {
  src: string;
  poster: string;
}

interface SpringCondition extends VideoCard {
  condition: boolean;
}

export const VideoSpring = ({ condition, src, poster }: SpringCondition) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const spring = useSpring({
    to: { width: condition ? "100%" : "0%", height: condition ? "100%" : "0%" },
    from: { width: condition ? "0%" : "100%", height: condition ? "0%" : "100%" },
    config: { duration: 50, easing: easings.easeInOutBounce, clamp: true },
  })

  const AnimatedPaper = animated(Paper);
  return (
    <AnimatedPaper elevation={10} style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15, ...spring
    }}><video ref={videoRef} style={{ width: "100%", borderRadius: 15, }} controls src={src} poster={poster} />
    </AnimatedPaper>
  )
}