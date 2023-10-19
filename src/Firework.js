import React, { useEffect, useRef } from 'react';

const Firework = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fireworks = [];

    // Create a new firework at random intervals
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      fireworks.push({ x, y, size: Math.random() * 5 + 2, color: getRandomColor() });
    };

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework, index) => {
        ctx.fillStyle = firework.color;
        drawStar(ctx, firework.x, firework.y, firework.size, 20, 10);
        fireworks[index].y -= 2;
        if (firework.y < 0) {
          fireworks.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    const drawStar = (ctx, x, y, size, points, depth) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points;
        const r = (i % 2 === 0) ? size : size / depth;
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
      }
      ctx.closePath();
      ctx.fill();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const interval = setInterval(createFirework, 50);

    animate();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} className="firework-canvas" />;
};

export default Firework;