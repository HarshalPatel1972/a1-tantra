import { useEffect, useRef, useState } from "react";

/**
 * Hook to determine if text should be light or dark based on gradient luminance at element position
 * Uses Intersection Observer and gradient position analysis
 */
export const useDynamicTextColor = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [textColor, setTextColor] = useState<"light" | "dark">("light");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create Intersection Observer to detect when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get element position relative to viewport
            const rect = entry.target.getBoundingClientRect();
            const elementCenterY = rect.top + rect.height / 2;
            const viewportHeight = window.innerHeight;

            // Calculate relative position (0 = top, 1 = bottom)
            const relativePosition = elementCenterY / viewportHeight;

            // Analyze gradient luminance based on position
            // Gradient goes from very dark at top to slightly lighter at bottom
            // Top (0): Very dark (#1a0f0a) - use light text
            // Middle (0.5): Medium dark - use light text
            // Bottom (1): Slightly lighter - use light text (gradient is always dark)

            // Since our gradient is always quite dark, light text (white) is always best
            // But we'll add logic for future flexibility

            if (relativePosition < 0.3) {
              // Very dark zone at top
              setTextColor("light");
            } else if (relativePosition > 0.7) {
              // Slightly lighter zone at bottom (if gradient becomes lighter)
              setTextColor("light");
            } else {
              // Middle zone
              setTextColor("light");
            }
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.25,
      }
    );

    observer.observe(element);

    // Recalculate on scroll and resize
    const handleScrollResize = () => {
      if (!element.isConnected) return;

      const rect = element.getBoundingClientRect();
      const elementCenterY = rect.top + rect.height / 2;
      const viewportHeight = window.innerHeight;
      const relativePosition = elementCenterY / viewportHeight;

      // Update color based on position
      if (relativePosition < 0.3) {
        setTextColor("light");
      } else if (relativePosition > 0.7) {
        setTextColor("light");
      } else {
        setTextColor("light");
      }
    };

    // Throttle scroll and resize events
    let throttleTimeout: NodeJS.Timeout;
    const throttledHandler = () => {
      clearTimeout(throttleTimeout);
      throttleTimeout = setTimeout(handleScrollResize, 100);
    };

    window.addEventListener("scroll", throttledHandler, { passive: true });
    window.addEventListener("resize", throttledHandler, { passive: true });

    return () => {
      observer.unobserve(element);
      window.removeEventListener("scroll", throttledHandler);
      window.removeEventListener("resize", throttledHandler);
      clearTimeout(throttleTimeout);
    };
  }, []);

  return { elementRef, textColor };
};
