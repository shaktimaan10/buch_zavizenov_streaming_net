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
                <div class="container social-media-line">
                    <div class="social-media-left">
                        <div @click="likeItem()" class="social-media-btn like-btn" v-bind:class="{ 'like-btn-active' : itemLiked == true }">
                            <svg viewBox="0 0 102 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 1C6 1 1 16 1 23.5C1 31.3013 3.16655 38.8783 6.67113 46C16.6428 66.2634 37.4469 82.84 49.9982 90.405C50.6172 90.778 51.3828 90.778 52.0018 90.405C64.5531 82.84 85.3572 66.2634 95.3289 46C98.8335 38.8783 101 31.3013 101 23.5C101 16 96 1 76 1C67.6667 1 51 5.5 51 23.5C51 5.5 34.3333 1 26 1Z"/>
                                <path d="M50 23.5C50 24.0523 50.4477 24.5 51 24.5C51.5523 24.5 52 24.0523 52 23.5H50ZM6.67113 46L7.56837 45.5585L7.56837 45.5585L6.67113 46ZM49.9982 90.405L50.5144 89.5485L50.5144 89.5485L49.9982 90.405ZM95.3289 46L94.4316 45.5585L94.4316 45.5585L95.3289 46ZM52.0018 90.405L51.4856 89.5485L51.4856 89.5485L52.0018 90.405ZM2 23.5C2 19.9329 3.19804 14.5407 6.78087 10.0622C10.3289 5.62713 16.2837 2 26 2V0C15.7163 0 9.17108 3.87287 5.21913 8.8128C1.30196 13.7093 0 19.5671 0 23.5H2ZM26 2C30.0264 2 36.074 3.09458 41.0812 6.33921C46.0344 9.54888 50 14.8725 50 23.5H52C52 14.1275 47.6323 8.20112 42.1688 4.66079C36.7593 1.15542 30.3069 0 26 0V2ZM5.77388 46.4415C15.8669 66.9516 36.8564 83.6517 49.482 91.2614L50.5144 89.5485C38.0375 82.0283 17.4187 65.5753 7.56837 45.5585L5.77388 46.4415ZM7.56837 45.5585C4.11463 38.5401 2 31.1143 2 23.5H0C0 31.4883 2.21847 39.2166 5.77388 46.4415L7.56837 45.5585ZM102 23.5C102 19.5671 100.698 13.7093 96.7809 8.8128C92.8289 3.87287 86.2837 0 76 0V2C85.7163 2 91.6711 5.62713 95.2191 10.0622C98.802 14.5407 100 19.9329 100 23.5H102ZM76 0C71.6931 0 65.2407 1.15542 59.8312 4.66079C54.3677 8.20112 50 14.1275 50 23.5H52C52 14.8725 55.9656 9.54888 60.9188 6.33921C65.926 3.09458 71.9735 2 76 2V0ZM94.4316 45.5585C84.5813 65.5753 63.9625 82.0283 51.4856 89.5485L52.518 91.2614C65.1436 83.6517 86.1331 66.9516 96.2261 46.4415L94.4316 45.5585ZM96.2261 46.4415C99.7815 39.2166 102 31.4883 102 23.5H100C100 31.1143 97.8854 38.5401 94.4316 45.5585L96.2261 46.4415ZM49.482 91.2614C50.4185 91.8259 51.5815 91.8259 52.518 91.2614L51.4856 89.5485C51.1841 89.7302 50.8159 89.7302 50.5144 89.5485L49.482 91.2614Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="social-media-btn read-reviews-btn">
                            <p>All reviews</p>
                        </div>
                        <div class="social-media-btn leave-review-btn">
                            <p>Leave a review</p>
                        </div>
                    </div>
                    
                </div>
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
                            <h3>{{singleContent[0].music_date}}</h3>
                        </div>
                        <p>{{singleContent[0].music_author}}</p>
                    </div> 
                </div>
        </section>
    </div>
     `,

     data: function() {
        return {   
            singleId: this.$route.params.cId,
            singleContent: [],
            itemLiked : false
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.getContentData(this.singleId);
        this.checkLike();
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
        },
        checkLike(){
            const url = `./includes/index.php?checkLike=1&userId=${this.$root.$data.user['user_id']}&contentType=music&contentId=${this.singleId}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data === false){
                    this.itemLiked = false;
                } else {
                    this.itemLiked = true;
                }
            })
            .catch((err) => {console.error(err)})
        },
        likeItem(){
            if(this.itemLiked){
                // remove like from db
                const url = `./includes/index.php?removeLike=1&userId=${this.$root.$data.user['user_id']}&contentType=music&contentId=${this.singleId}`;
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.itemLiked = false;
                })
                .catch((err) => {console.error(err)})
            } else {
                // add like to db
                const url = `./includes/index.php?addLike=1&userId=${this.$root.$data.user['user_id']}&contentType=music&contentId=${this.singleId}`;
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.itemLiked = true;
                })
                .catch((err) => {console.error(err)})
            }
        }
    }
}