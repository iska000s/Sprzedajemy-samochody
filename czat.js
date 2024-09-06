const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

/* // Funkcja do przechodzenia do konkretnego slajdu */
function goToSlide(index) {
  const slideWidth = slider.clientWidth;
  slider.scrollTo({
    left: index * slideWidth,
    behavior: 'smooth'
  });
  currentIndex = index;
  updateDots();
}

// Funkcja do aktualizowania stanu kropek
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('bg-gray-800');
      dot.classList.remove('bg-gray-400');
    } else {
      dot.classList.add('bg-gray-400');
      dot.classList.remove('bg-gray-800');
    }
  });
}

// Przejście do następnego slajdu
document.getElementById('nextBtn').addEventListener('click', () => {
  const totalSlides = slider.children.length;
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset do pierwszego slajdu
  }
  goToSlide(currentIndex);
});

// Przejście do poprzedniego slajdu
document.getElementById('prevBtn').addEventListener('click', () => {
  const totalSlides = slider.children.length;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Przejście do ostatniego slajdu
  }
  goToSlide(currentIndex);
});

// Obsługa kliknięć na kropki
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Początkowe ustawienie kropek
updateDots();