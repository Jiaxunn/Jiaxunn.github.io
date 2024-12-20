function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const profileSection = document.getElementById('profile');
  profileSection.classList.toggle('profile-shifted');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
