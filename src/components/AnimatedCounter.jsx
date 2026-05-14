import React, { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants";

/**
 * Detect when element is in viewport
 */
const useInView = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const current = ref.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref]);

  return isVisible;
};

/**
 * Smooth CountUp Hook (starts only when visible)
 */
const useCountUp = (end, isVisible, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / (duration * 1000), 1);

      // smooth easing (ease-out)
      const easeOut = 1 - Math.pow(1 - progressRatio, 3);

      const currentValue = Math.floor(easeOut * end);

      setCount(currentValue);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
};

/**
 * Counter Card
 */
const CounterCard = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref);
  const count = useCountUp(value, isVisible);

  return (
    <div
      ref={ref}
      className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
    >
      <div className="counter-number text-white text-5xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white-50 text-lg">{label}</div>
    </div>
  );
};

/**
 * Main Animated Counter Section
 */
const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <CounterCard
            key={index}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
