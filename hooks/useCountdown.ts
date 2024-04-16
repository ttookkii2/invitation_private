import { useEffect, useState } from 'react';

const toHHMMSS = (secs: number) => {
  const days = Math.floor(secs / 3600 / 24);
  const hours = Math.floor(secs / 3600) % 24;
  const minutes = Math.floor(secs / 60) % 60;
  const seconds = Math.floor(secs % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    diff: secs
  };
};

export type Countdown = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  diff: number;
};

export default function useCountdown(endTime?: string) {
  const [remaining, setRemaining] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    diff: 0
  });

  useEffect(() => {
    if (endTime) {
      let interval: NodeJS.Timeout;
      let diff = Math.floor((new Date(+endTime * 1000).getTime() - new Date().getTime()) / 1000);

      const tick = () => {
        if (diff <= 0) {
          setRemaining({ diff });
          clearInterval(interval);
          return;
        }
        const ddhhmmss = toHHMMSS(diff);
        setRemaining(ddhhmmss);
        diff--;
      };

      if (diff > 0) {
        interval = setInterval(tick, 1000);
        tick();
      } else {
        setRemaining({ diff });
      }

      return () => interval && clearInterval(interval);
    }
  }, [endTime]);

  return remaining;
}
