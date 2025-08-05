// === TYPING EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById('typing');
  const roles = ['IoT Developer', 'PCB Designer', 'Embedded Engineer', 'Arduino Programmer'];
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeLoop() {
    const role = roles[roleIndex];
    if (typing) {
      typingElement.textContent += role.charAt(charIndex);
      charIndex++;
      if (charIndex === role.length) {
        typing = false;
        setTimeout(typeLoop, 1000);
      } else {
        setTimeout(typeLoop, 100);
      }
    } else {
      typingElement.textContent = role.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(typeLoop, 50);
    }
  }

  typeLoop();
});

// === FILTER KATEGORI SERTIFIKAT ===
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sertifikatCards = document.querySelectorAll('.sertifikat-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter');

      // Update tombol aktif
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      sertifikatCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        // Tambahkan/lepaskan class 'hide' untuk animasi
        if (category === 'all' || cardCategory === category) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
});

// === TOGGLE MENU ===
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// === BACK TO TOP ===
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('Service worker terdaftar:', reg);
  }).catch(function(err) {
    console.log('Pendaftaran SW gagal:', err);
  });
}

