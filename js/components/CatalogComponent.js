export default{
    template: `
<div>
    <!-- Banner Section-->
    <section class="banner-section">
        <div class="banner-slider-content">
            <div class="banner-slider-movie" v-for="recom in recommendedList">
                <video autoplay muted loop id="myVideo">
                    <source :src="'video/' + recom.movie_video" type="video/mp4">
                </video>
                <div class="banner-slider-movie-popup">
                    <div class="slider-movie-popup-content">
                        <div class="movie-popup-content-row">
                            <h2>{{recom.movie_name}}</h2>
                            <p @click="goToSingleMovie(recom.movie_id)">Watch now</p>
                        </div>
                        <p>
                            {{recom.movie_desc}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Movies Section-->
    <section class="content-slider-section recommended-section" id="movies-section">
        <div class="container content-slider-section-header">
            <h2>Movies</h2>
            <router-link :to="{ name: 'movieType', params: {type: 'movies' }}">see all</router-link>
        </div>
        <div class="content-slider-section-content">
            <div class="container content-slider">
                <div class="content-slider-arrow content-slider-arrow-left">
                    <img src="images/left-white.svg" alt="left-arrow">
                </div>
                <div class="content-slider-cover">
                    <div class="content-slider-content">
                        <div class="content-slider-movie" v-for="movie in moviesList">
                            <div class="content-slider-movie-img">
                                <img :src="'images/' + movie.movie_poster" alt="movie 1">
                            </div>
                            <div class="content-slider-movie-popup">
                                <h3>{{movie.movie_name}}</h3>
                                <p>{{movie.movie_genre}}</p>
                                <a @click="goToSingleMovie(movie.movie_id)" class="slider-movie-popup-btn">
                                    <img src="images/play.svg" alt="play-btn">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-slider-arrow content-slider-arrow-right">
                    <img src="images/right-white.svg" alt="right-arrow">
                </div>
            </div>
        </div>
    </section>
    <!-- Music Section-->
    <section class="content-slider-section recommended-section" id="music-section">
        <div class="container content-slider-section-header">
            <h2>Music</h2>
            <router-link :to="{ name: 'musicType', params: {type: 'music' }}">see all</router-link>
        </div>
        <div class="content-slider-section-content">
            <div class="container content-slider">
                <div class="content-slider-arrow content-slider-arrow-left">
                    <img src="images/left-white.svg" alt="left-arrow">
                </div>
                <div class="content-slider-cover">
                    <div class="content-slider-content">
                        <div class="content-slider-movie" v-for="music in musicList">
                            <div class="content-slider-movie-img">
                                <img :src="'images/' + music.music_poster" alt="movie 1">
                            </div>
                            <div class="content-slider-movie-popup">
                                <h3>{{music.music_name}}</h3>
                                <p>{{music.music_genre}}</p>
                                <a @click="goToSingleMusic(music.music_id)" class="slider-movie-popup-btn">
                                    <img src="images/play.svg" alt="play-btn">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-slider-arrow content-slider-arrow-right">
                    <img src="images/right-white.svg" alt="right-arrow">
                </div>
            </div>
        </div>
    </section>
    <!-- Tv Section-->
    <section class="content-slider-section recommended-section" id="tv-section">
        <div class="container content-slider-section-header">
            <h2>Tv</h2>
            <router-link :to="{ name: 'tvType', params: {type: 'tv' }}">see all</router-link>
        </div>
        <div class="content-slider-section-content">
            <div class="container content-slider">
                <div class="content-slider-arrow content-slider-arrow-left">
                    <img src="images/left-white.svg" alt="left-arrow">
                </div>
                <div class="content-slider-cover">
                    <div class="content-slider-content">
                        <div class="content-slider-movie" v-for="tv in tvList">
                            <div class="content-slider-movie-img">
                                <img :src="'images/' + tv.tv_poster" alt="movie 1">
                            </div>
                            <div class="content-slider-movie-popup">
                                <h3>{{tv.tv_name}}</h3>
                                <p>{{tv.tv_genre}}</p>
                                <a @click="goToSingleTv(tv.tv_id)" class="slider-movie-popup-btn">
                                    <img src="images/play.svg" alt="play-btn">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-slider-arrow content-slider-arrow-right">
                    <img src="images/right-white.svg" alt="right-arrow">
                </div>
            </div>
        </div>
    </section>
</div>`,

    data: function() {
        return {   
            moviesList: [],
            musicList: [],
            tvList: [],
            recommendedList: [],
            bannerIndex: 0,
            restriction: this.$route.params.age
        }
    },
    
    created: function() {
        // this will fire when the component gets build
        this.fetchAllMovies();
        this.fetchAllMusic();
        this.fetchAllTv();
        this.createRecommendations();
        setInterval(()=>this.moveSlider(this.bannerIndex),6000)
    },
    
    methods: {
        fetchAllMovies() {
            const url = `./includes/index.php?getMoviesContent=1&restriction=${this.restriction}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.moviesList = data;
            })
            .catch((err) => {console.error(err)})
        },
        fetchAllMusic() {
            const url = `./includes/index.php?getMusicContent=1&restriction=${this.restriction}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.musicList = data;
            })
            .catch((err) => {console.error(err)})
        },
        fetchAllTv() {
            const url = `./includes/index.php?getTvContent=1&restriction=${this.restriction}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.tvList = data;
            })
            .catch((err) => {console.error(err)})
        },
        createRecommendations(){
            const url = `./includes/index.php?getRecomContent=1&restriction=${this.restriction}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.recommendedList = data;
            })
            .catch((err) => {console.error(err)})
        },
        moveSlider(bannerIndex){
            let bannerSection = document.querySelector('.banner-section');
            let bannerContent = document.querySelector('.banner-slider-content');
            
            if(bannerSection){
                let containerWidth = window.innerWidth;
                let moviesNumber = bannerContent.childNodes.length - 1;
                
                if(bannerIndex <= moviesNumber){
                    let newLeft = containerWidth * bannerIndex;
                    bannerContent.style.left = `-${newLeft}px`;
                    this.bannerIndex += 1
                } else {
                    bannerIndex = 0;
                    bannerContent.style.left = `0px`;
                } 
            }
        },
        goToSingleMovie(contentId){
            this.$router.push({ name: 'singleMovie', params: {cId: contentId}})
        },
        goToSingleMusic(contentId){
            this.$router.push({ name: 'singleMusic', params: {cId: contentId}})
        },
        goToSingleTv(contentId){
            this.$router.push({ name: 'singleTv', params: {cId: contentId}})
        }
    },

    components: {
    }
}