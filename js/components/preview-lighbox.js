// 
// Lighbox for Preview page
// 
let previewPlayBtn = document.querySelector('.preview-section-play');
let previewLightbox = document.querySelector('.preview-section-lightbox');
let previewVideo = document.querySelector('.preview-section-lightbox-video');
let previewCloseBtn = document.querySelector('.preview-section-cross');

if(previewPlayBtn){
    previewPlayBtn.addEventListener('click', function(){
        previewLightbox.classList.add('preview-section-lightbox-open');
    });
}

if(previewCloseBtn){
    previewCloseBtn.addEventListener('click', function(){
        previewVideo.pause();
        previewVideo.currentTime = 0;
        previewLightbox.classList.remove('preview-section-lightbox-open');
    });
}