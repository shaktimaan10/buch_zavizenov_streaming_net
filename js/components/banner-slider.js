let bannerSection = document.querySelector('.banner-section');
let bannerContent = document.querySelector('.banner-slider-content');
if(bannerSection){
    let containerWidth = bannerSection.offsetWidth;
    let moviesNumber = bannerContent.childNodes.length - 1;
    let activeSlide = 0;

    function addOne(){
        activeSlide += 1;
        console.log("runs");
        if(activeSlide < moviesNumber){
            bannerContent.style.left = `${containerWidth * activeSlide}px`
        } else {
            activeSlide = 0
        }
    }

    setTimeout(addOne, 1000);
    
}