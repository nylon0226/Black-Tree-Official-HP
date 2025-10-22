let menuOpen = false;

function toggleMenu() {
// モバイルメニューを開閉する処理
  const menu = document.getElementById("mobile-menu");
  const burger = document.querySelector(".hamburger");

  menu.classList.toggle("show");
  menuOpen = !menuOpen;
  burger.textContent = menuOpen ? "×" : "☰";
}

window.addEventListener("load", () => {
// ロード時に動画を制御
  const video = document.getElementById("logoVideo");
  if (!video) return;

  });