"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundParticles = () => {
  // Criamos um array fixo para evitar problemas de hidratação com valores aleatórios
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        // Valores "aleatórios" baseados no índice para consistência
        const size = (i % 4) + 2; // Tamanhos entre 2px e 5px
        const initialX = (i * 7) % 100; // Posição horizontal inicial
        const initialY = (i * 13) % 100; // Posição vertical inicial
        const duration = 15 + (i % 10); // Duração entre 15s e 25s
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/20 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              y: [0, (i % 3 === 0 ? 30 : -30), 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundParticles;