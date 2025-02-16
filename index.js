
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul")
const navMainu = document.querySelectorAll(".nav-list ul li a")
const header = document.querySelector(".header");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});



navMainu.forEach((item) =>{
    item.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});


document.addEventListener("scroll", ()=>{
    let scroll_Position = window.scrollY;
    if(scroll_Position > 200){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor ="transparent";
    }
});