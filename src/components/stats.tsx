'use client';

import React, { useEffect, useState, useRef } from "react";

interface StatProps {
  target: number;
  suffix?: string;
  title: string;
  duration?: number;
}

const CountUp: React.FC<StatProps> = ({ target, suffix = "", title, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Detect when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Count animation
  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <div
      ref={ref}
      className="backdrop-blur-md bg-white/40 border border-white/20 shadow-lg rounded-xl p-4 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700">
        {count}
        {suffix}
      </h2>
      <p className="text-gray-800 text-sm md:text-base mt-1 text-center">{title}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { target: 150, suffix: "+", title: "University Partnerships" },
    { target: 15, suffix: "+", title: "Years Experience" },
    { target: 5000, suffix: "+", title: "Students Guided" },
    { target: 95, suffix: "%", title: "Success Rate" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <CountUp key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
