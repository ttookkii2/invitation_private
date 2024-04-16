import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useAppStore } from "@/stores/app";

export default function useConfetti(type = "snow") {
  const modal = useAppStore((state) => state.modal);
  useEffect(() => {
    if (modal) return;
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    if (type === "snow") {
      const duration = 10 * 1000;
      const animationEnd = Date.now() + duration;
      let skew = 1.4;

      (function frame() {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(100, 100 * (timeLeft / duration));
        skew = Math.max(0.7, skew - 0.002);

        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: Math.random() * skew - 0.2,
          },
          // colors: ["#ffd9e5"],
          colors: ["#a6cb5f", "#d4d4a5", "#89a46f", "#ebfbc5"],
          shapes: ["circle"],
          gravity: randomInRange(0.2, 0.5),
          scalar: randomInRange(0.03, 1),
          drift: randomInRange(0, 1.5),
        });

        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [modal]);
}
