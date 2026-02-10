"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundParticles = () => {
  // Aumentamos para 40 partículas para preencher melhor o fundo
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        // Alternamos entre dourado e branco para parecerem estrelas
        const isGold = i % 2 === 0;
        const size = (i % 3) + 2; // Tamanhos entre 2px e 4px
        const initialX = (i * 2.5) % 100; // Posição horizontal inicial distribuída
        const initialY = (i * 7.3) % 100; // Posição vertical inicial distribuída
        const duration = 20 + (i % 15); // Movimento bem lento e suave
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isGold ? 'bg-gold/40' : 'bg-white/40'}`}
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
              boxShadow: isGold ? '0 0 10px rgba(244, 196, 48, 0.3)' : '0 0 10px rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              // Movimento em porcentagem para garantir que percorram a tela
              x: [0, (i % 2 === 0 ? 100 : -100), 0],
              y: [0, (i % 3 === 0 ? 50 : -50), 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
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