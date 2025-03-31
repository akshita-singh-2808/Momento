import React, { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#ff4500", "#ff5722", "#ff6d00", "#ff8f00", "#ffab00", "#ffd600",
        "#ffea00", "#ffee58", "#fff176", "#ffcc80", "#ffb74d", "#ff9800",
        "#f57c00", "#e65100", "#ff3d00", "#dd2c00", "#ff1744", "#d50000",
        "#b71c1c", "#bf360c", "#ff7043", "#ff5252"
      ];
      
      const interactiveElements = document.querySelectorAll("input, button, textarea,a,img,.login-div");

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          document.body.classList.add("hide-cursor");
        });
      
        element.addEventListener("mouseleave", () => {
          document.body.classList.remove("hide-cursor");
        });
      });
      
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <div className="cursor">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default CursorEffect;
