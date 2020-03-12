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
                            <p>Watch now</p>
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
            <a href="#">see more</a>
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
                                <a href="preview.html" class="slider-movie-popup-btn">
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
            <a href="#">see more</a>
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
                                <a href="preview.html" class="slider-movie-popup-btn">
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
            <a href="#">see more</a>
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
                                <a href="preview.html" class="slider-movie-popup-btn">
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
            recommendedList: []
        }
    },
    
    created: function() {
        // this will fire when the component gets build
        this.fetchAllMovies();
        this.fetchAllMusic();
        this.fetchAllTv();
        this.createRecommendations();
    },
    
    methods: {
        fetchAllMovies() {
            const url = './includes/index.php?getMoviesContent=1';
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.moviesList = data;
            })
            .catch((err) => {console.error(err)})
        },
        fetchAllMusic() {
            const url = './includes/index.php?getMusicContent=1';
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.musicList = data;
            })
            .catch((err) => {console.error(err)})
        },
        fetchAllTv() {
            const url = './includes/index.php?getTvContent=1';
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.tvList = data;
            })
            .catch((err) => {console.error(err)})
        },
        createRecommendations(){
            const url = './includes/index.php?getRecomContent=1';
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.recommendedList = data;
            })
            .catch((err) => {console.error(err)})
        }
    },

    components: {
    }
}