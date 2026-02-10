"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundParticles = () => {
  const particles = Array.from({ length: 45 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        const isGold = i % 2 === 0;
        const size = (i % 3) + 2.5; // Aumentado levemente o tamanho base
        const initialX = (i * 2.2) % 100;
        const initialY = (i * 7.7) % 100;
        const duration = 15 + (i % 12); // Um pouco mais rápido para dar vida
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isGold ? 'bg-gold/50' : 'bg-white/50'}`}
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
              boxShadow: isGold ? '0 0 12px rgba(244, 196, 48, 0.4)' : '0 0 12px rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 80 : -80), 0],
              y: [0, (i % 3 === 0 ? 40 : -40), 0],
              opacity: [0.3, 0.8, 0.3], // Opacidade aumentada para melhor visibilidade
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundParticles;