export default function createConfetti(count: number = 100) {
  const colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = window.innerWidth / 2 + "px";
    confetti.style.top = window.innerHeight / 2 + "px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    document.body.appendChild(confetti);

    const angle = (Math.PI * 2 * i) / count;
    const velocity = 5 + Math.random() * 5;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 3;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let velX = vx;
    let velY = vy;

    const animate = () => {
      x += velX;
      y += velY;
      velY += 0.1; // gravity
      confetti.style.left = x + "px";
      confetti.style.top = y + "px";
      confetti.style.opacity = Math.max(
        0,
        1 - (y - window.innerHeight / 2) / 300,
      ).toString();

      if (y < window.innerHeight + 100) {
        requestAnimationFrame(animate);
      } else {
        confetti.remove();
      }
    };

    animate();
  }
}
