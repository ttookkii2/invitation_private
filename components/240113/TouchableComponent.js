import { useCallback, useEffect, useRef } from "react";

export default function TouchableComponent(props) {
  const { className, direction, duration, delay, children } = props;
  const touchable = useScrollTouchable(direction, duration, delay);
  return (
    <div className={className} {...props} {...touchable}>
      {children}
    </div>
  );
}

function useScrollTouchable(direction = "up", duration = 1, delay) {
  const dom = useRef();

  function handleDirection(name) {
    switch (name) {
      case "up":
        return "translate3d(0, 10%, 0 )";
      case "down":
        return "translate3d(0, -10%, 0 )";
      case "left":
        return "translate3d(10%, 0, 0 )";
      case "right":
        return "translate3d(-10%, 0 , 0 )";
      case "pulse":
        return "scale(1.7)";
      default:
        return;
    }
  }

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        // Fully visible
        current.style.transitionProperty = "opacity scale transform";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0,0,0.2, 1) ";
        current.style.transitionDelay = `${delay || 0.15}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0,0,0)";
        current.style.pointerEvents = "auto";
      } else {
        // Not fully visible
        current.style.opacity = 1;
        current.style.pointerEvents = "none";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(onScroll, {
        threshold: 1,
        rootMargin: "0px 0px -300px 0px",
      });
      observer.observe(current);
    }
    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
      pointerEvents: "none",
    },
  };
}
