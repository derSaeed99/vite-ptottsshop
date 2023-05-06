import { Theme } from '@mui/material';
import { animated, useSpring, easings } from '@react-spring/web';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import React from 'react';

interface SpringCondition {
  condition: boolean;
}

export const ArrowButtonSpring = ({ condition }: SpringCondition) => {
  const spring = useSpring({
    from: { rotateZ: condition ? 180 : 0, config: { duration: 50 } },
    to: { rotateZ: condition ? 0 : 180, config: { duration: 50 } },
    config: { duration: 500, easing: easings.easeOutBounce },
  })
  const AnimatedArrowButton = animated(ArrowBackIosNewOutlinedIcon);
  return (
    <AnimatedArrowButton style={{ width: 100, height: 100, color: "white", ...spring, }} />
  )
}
