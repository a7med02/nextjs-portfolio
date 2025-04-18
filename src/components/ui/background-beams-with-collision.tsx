"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, useMemo, useImperativeHandle } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = useMemo(() => [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ], []);

  return (
    <div
      ref={parentRef}
      className={cn(
        " dark:from-neutral-950 dark:to-neutral-800 relative overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={`${beam.initialX}-${beam.translateX}-${beam.duration}`}
          beamOptions={beam}
          containerRef={containerRef as React.RefObject<HTMLDivElement>}
          parentRef={parentRef as React.RefObject<HTMLDivElement>}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

interface BeamOptions {
  initialX?: number;
  translateX?: number;
  initialY?: number;
  translateY?: number;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

interface CollisionMechanismProps {
  containerRef: React.RefObject<HTMLDivElement>;
  parentRef: React.RefObject<HTMLDivElement>;
  beamOptions?: BeamOptions;
}

const CollisionMechanism = React.forwardRef<HTMLDivElement, CollisionMechanismProps>(
  ({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef<HTMLDivElement>(null);
    const [collision, setCollision] = useState<{
      detected: boolean;
      coordinates: { x: number; y: number } | null;
    }>({
      detected: false,
      coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    // Combine the forwarded ref with the local ref
    useImperativeHandle(ref, () => beamRef.current as HTMLDivElement);

    useEffect(() => {
      const checkCollision = () => {
        if (!beamRef.current || !containerRef.current || !parentRef.current) return;
        
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top && !cycleCollisionDetected) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      };

      const animationInterval = setInterval(checkCollision, 50);
      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef, parentRef]);

    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        const timer1 = setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 2000);

        const timer2 = setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1);
        }, 2000);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    }, [collision]);

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: beamOptions.initialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          variants={{
            animate: {
              translateY: beamOptions.translateY || "1800px",
              translateX: beamOptions.translateX || "0px",
              rotate: beamOptions.rotate || 0,
            },
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          className={cn(
            "absolute left-0 top-20 m-auto w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent z-50",
            beamOptions.className
          )}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`explosion-${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = useMemo(() => 
    Array.from({ length: 20 }, (_, index) => ({
      id: index,
      initialX: 0,
      initialY: 0,
      directionX: Math.floor(Math.random() * 80 - 40),
      directionY: Math.floor(Math.random() * -50 - 10),
    })),
    []
  );

  return (
    <div {...props} className={cn("absolute z-50", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};