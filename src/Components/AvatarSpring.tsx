import { Avatar } from '@mui/material';
import { animated, useSpring, easings } from '@react-spring/web';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string
}

interface SpringCondition extends AvatarProps {
  condition: boolean;
}

export const AvatarSpring = ({ condition, src, alt }: SpringCondition) => {
  const spring = useSpring({
    to: { x: condition ? 0 : 100 },
    from: { x: condition ? 100 : 0 },
    config: { duration: 50, easing: easings.easeOutBounce },
  })
  const AnimatedAvatar = animated(Avatar);
  return (
    <AnimatedAvatar variant={"square"} src={src} alt={alt} style={{ marginRight: 50, width: 300, height: 300, ...spring }} />
  )
}