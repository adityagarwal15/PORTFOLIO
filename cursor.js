const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#0D0D0D", "#1C1C1C", "#2E2E2E", "#404040", "#595959",
  "#737373", "#A6A6A6", "#D9D9D9", "#999999", "#B3B3B3"
];

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
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
      circle.style.left = x + "px";
      circle.style.top = y + "px";

      const scale = (circles.length - index) / circles.length;
      circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
      circle.style.opacity = (1 - index / circles.length).toFixed(2);

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
} else {
  circles.forEach((circle) => {
    circle.style.display = "none";
  });
}
