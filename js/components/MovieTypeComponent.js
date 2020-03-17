export default {
    template: `
    <section class="single-type-section">
        <div class="container single-type-container">
            <div class="content-slider-movie" v-for="typeSingle in singleTypeContent">
                <div class="content-slider-movie-img">
                    <img :src="'images/' + typeSingle.movie_poster" alt="movie 1">
                </div>
                <div class="content-slider-movie-popup">
                    <h3>{{typeSingle.movie_name}}</h3>
                    <p>{{typeSingle.movie_genre}}</p>
                    <a @click="goToSingleMovie(typeSingle.movie_id)" class="slider-movie-popup-btn">
                        <img src="images/play.svg" alt="play-btn">
                    </a>
                </div>
            </div>
        </div>
    </section>
     `,

    data: function() {
        return {   
            singleType: this.$route.params.type,
            singleTypeContent: []
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.getContent(this.singleType);
    },

    methods: {
        getContent(singleType) {
            const url = `./includes/index.php?getSingleType=${singleType}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.singleTypeContent = data;
            })
            .catch((err) => {console.error(err)})
        },
        goToSingleMovie(contentId){
            this.$router.push({ name: 'singleMovie', params: {cId: contentId}})
        }
    }
}