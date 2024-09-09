
function sliderChanger () {

    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    const img = document.querySelector('.gallery__img');
    let currentIndex = 0;
    
    
    // PRZECHODZENIE DO KONKRETNEGO SLAJDU GALERII ZDJĘĆ
    function goToSlide(index){
        const slideWidth = (slider.children[index].clientWidth)*0.9;
        slider.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
        });
        currentIndex = index;
      
        updateDots();
    };
    
    
    // AKTUALIZOWANIU STANU KROPEK W SLAJDERZE
    function updateDots(){
        dots.forEach((dot, index) => {
            if(index === currentIndex){
                dot.classList.add('bg-blue');
                dot.classList.remove('bg-gray_dot');
            } else{
                dot.classList.add('bg-gray_dot');
                dot.classList.remove('bg-blue');
            }
        });
    };
    
    
    // OBSŁUGA KLIKNIĘCIA W KROPKI
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

}

export default sliderChanger();
