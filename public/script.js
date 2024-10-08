function toggleMenu(){
    /* targeting 2 elements on webpage, andwhen we click it, it adds or removes the open class
    in that element, and that open element will have styling */
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open");
}