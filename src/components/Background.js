'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function Background() {
  useEffect(() => {
    const random = (min, max) => {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    };

    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomTime = random(20, 40);
    const randomTime2 = random(5, 12);
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray(".blur");

    const rotate = (target, direction) => {
      gsap.to(target, {
        duration: randomTime2(),
        rotation: randomAngle(direction),
        ease: "sine.inOut",
        onComplete: rotate,
        onCompleteParams: [target, direction * -1]
      });
    };

    const moveX = (target, direction) => {
      gsap.to(target, {
        duration: randomTime(),
        x: randomX(direction),
        ease: "sine.inOut",
        onComplete: moveX,
        onCompleteParams: [target, direction * -1]
      });
    };

    const moveY = (target, direction) => {
      gsap.to(target, {
        duration: randomTime(),
        y: randomY(direction),
        ease: "sine.inOut",
        onComplete: moveY,
        onCompleteParams: [target, direction * -1]
      });
    };

    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
      });

      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });
  }, []);

  return (
    <div className="gradient-background">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="blur"></div>
    </div>
  );
}
