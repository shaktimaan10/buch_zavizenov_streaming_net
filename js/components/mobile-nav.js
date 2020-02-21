// 
// Navigation for mobile devices
// 
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavCross = document.querySelector('.mobile-nav-cross');
let mobileNavBurger = document.querySelector('.header-burger');
let mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

if(mobileNavBurger){
    mobileNavBurger.addEventListener('click', function(){
        mobileNav.classList.add('mobile-nav-open');
    });
}

if(mobileNavCross){
    mobileNavCross.addEventListener('click', function(){
        mobileNav.classList.remove('mobile-nav-open');
    });
}

if(mobileNavLinks){
    mobileNavLinks.forEach(link => function(){
        link.addEventListener('click', function(){
            mobileNav.classList.remove('mobile-nav-open');
        })
    });
}