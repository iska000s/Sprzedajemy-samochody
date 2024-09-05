const gallery = document.querySelector('.imgs_box');
const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot');


// dot.forEach(element => {
//     element.addEventListener("click", goToSlide);
// });     

// function goToSlide(element) {
//     // element.classList.remove('bg-gray_dot');
    
//     element.classList.add('bg-red');
//     }

    // dots.addEventListener("click", onClick);
    // function onClick (){
    //     console.log(dots);
    //     dots.classList.add("bg-red-800");
    //     dots.classList.remove("flex");
    // }
for (let i=0; i<=dot.length+1; i++){
    dots.children[i].addEventListener("click", onClick);
    // gallery.children[i].classList.add("justify-centre");

    function onClick (){
        for(let j=0; j<=dot.length+1; j++){
            dots.children[j].classList.remove("bg-red-800");
            dots.children[i].classList.remove("bg-gray_dot");
            dots.children[i].classList.add("bg-red-800");
            dots.children[j].classList.add("bg-gray_dot");
        }
    }

}
   


// function goToSlide(index){
//         let number = dots.children[index];
//         const slideWidth = gallery.clientWidth;
//         gallery.scrollTo({
//             left: index * slideWidth,
//             behavior: 'smooth',
//         });
//         console.log("test")
//         updateDots(index);
//         console.log(number)
//     }
    
//     function updateDots(activeIndex){
//         // console.log(activeIndex);
//         dot.forEach((dot, index) => {
//             if (index === activeIndex){
//                 dot.classList.add('bg-gray-800');
//                 dot.classList.remove('bg-gray_dot');
//                 console.log("JEST")
//             }else{
//                 dot.classList.add('bg-gray_dot');
//                 dot.classList.remove('bg-gray-800');
//                 console.log("nie jest")
//             }
//         });
//     }
