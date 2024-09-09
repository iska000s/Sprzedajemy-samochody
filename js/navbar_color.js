
function navbarColor () {

    window.addEventListener('scroll', function(){
        const navbar = document.getElementById('navbar');
        if(window.scrollY > 90){
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-white');
        } else{
            navbar.classList.remove('bg-white');
            navbar.classList.add('bg-transparent')
        }
    });
    
}

export default navbarColor();