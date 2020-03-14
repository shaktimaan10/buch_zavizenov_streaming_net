export default {
    template: `
    <div>
        <div class="preview-section-lightbox">
            <div @click="closeLightbox()" class="preview-section-cross">
                <img src="images/cross.svg" alt="close-icon">
            </div>
            <video class="preview-section-lightbox-video" controls>
                <source :src="'video/' + singleContent[0].music_video" type="video/mp4">
            </video>
        </div>
        <section class="preview-section">
                <div @click="openLightbox()" class="preview-section-play">
                    <img src="images/play.svg" alt="play btn">
                </div>
                <div class="preview-section-bg-overlay"></div>
                <video class="preview-section-bg" autoplay muted loop>
                    <source :src="'video/' + singleContent[0].music_video" type="video/mp4">
                </video>
                <div class="container preview-section-container">
                    <div class="preview-content">
                        <h1>{{singleContent[0].music_name}}</h1>
                        <div class="preview-content-line">
                            <h3>{{singleContent[0].music_genre}}</h3>
                            <h3>{{singleContent[0].movie_author}}</h3>
                        </div>
                        <p>{{singleContent[0].music_genre}}</p>
                    </div> 
                </div>
        </section>
    </div>
     `,

     data: function() {
        return {   
            singleId: this.$route.params.cId,
            singleContent: []
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.getContentData(this.singleId);
    },

    methods: {
        getContentData(singleid) {
            const url = `./includes/index.php?getSingleMusic=${singleid}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.singleContent = data;
            })
            .catch((err) => {console.error(err)})
        },
        openLightbox(){
            document.querySelector('.preview-section-lightbox').classList.add('preview-section-lightbox-open');
        },
        closeLightbox(){
            document.querySelector('.preview-section-lightbox').classList.remove('preview-section-lightbox-open');
            document.querySelector('.preview-section-lightbox video').pause();
            document.querySelector('.preview-section-lightbox video').currentTime = 0;
        }
    }
}