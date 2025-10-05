const hero = document.getElementById("hero_section");
hero.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / hero.offsetWidth) * 100;
  const y = (e.offsetY / hero.offsetHeight) * 100;
  hero.style.setProperty("--x", `${x}%`);
  hero.style.setProperty("--y", `${y}%`);
});
