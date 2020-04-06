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
            <img v-if="this.restriction < 4" src="images/movie.svg"> 
            <router-link :to="{ name: 'movieType', params: {type: 'movie' }}">see all</router-link>
        </div>
        <div class="content-slider-section-content" v-bind:class="{ 'movie-section-kids' : this.restriction < 4 }">
            <div class="container content-slider" v-bind:class="{ 'content-slider-kids' : this.restriction < 4 }">
                <div @click="movieSliderLeft()" class="content-slider-arrow content-slider-arrow-left">
                    <svg viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.4264 19L8 61.4264L72.4264 103.853" stroke="#662D91" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>           
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
                <div @click="movieSliderRight()" class="content-slider-arrow content-slider-arrow-right">
                    <svg viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.4264 103.853L114.853 61.4264L50.4264 19" stroke="#662D91" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </div>
            </div>
        </div>
    </section>
    <!-- Music Section-->
    <section class="content-slider-section recommended-section" id="music-section">
        <div class="container content-slider-section-header">
            <h2>Music</h2>
            <img v-if="this.restriction < 4" src="images/music.svg"> 
            <router-link :to="{ name: 'musicType', params: {type: 'music' }}">see all</router-link>
        </div>
        <div class="content-slider-section-content" v-bind:class="{ 'music-section-kids' : this.restriction < 4 }">
            <div class="container content-slider"  v-bind:class="{ 'content-slider-kids' : this.restriction < 4 }">
                <div @click="musicSliderLeft()" class="content-slider-arrow content-slider-arrow-left">
                    <svg viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.4264 19L8 61.4264L72.4264 103.853" stroke="#662D91" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
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
                <div @click="musicSliderRight()" class="content-slider-arrow content-slider-arrow-right">
                    <svg viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.4264 103.853L114.853 61.4264L50.4264 19" stroke="#662D91" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </div>
            </div>
        </div>
    </section>
    <!-- Tv Section-->
    <section class="content-slider-section recommended-section" id="tv-section">
        <div class="container content-slider-section-header">
            <h2>Tv</h2>
            <img v-if="this.restriction < 4" src="images/tv.svg"> 
            <router-link :to="{ name: 'tvType', params: {type: 'tv' }}">see all</router-link>
        </div>
        <div class="content-slider-section-content" v-bind:class="{ 'tv-section-kids' : this.restriction < 4 }">
            <div class="container content-slider" v-bind:class="{ 'content-slider-kids' : this.restriction < 4 }">
                <div @click="tvSliderLeft()" class="content-slider-arrow content-slider-arrow-left">
                    <svg viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.4264 19L8 61.4264L72.4264 103.853" stroke="#662D91" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
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
                <div @click="tvSliderRight()" class="content-slider-arrow content-slider-arrow-right">
                    <svg viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.4264 103.853L114.853 61.4264L50.4264 19" stroke="#662D91" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
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
            movieIndex: 0,
            musicIndex: 0,
            tvIndex: 0,
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
            this.$router.push({ name: 'preview', params: {cId: contentId, type: 'movie'}})
        },
        goToSingleMusic(contentId){
            this.$router.push({ name: 'preview', params: {cId: contentId, type: 'music'}})
        },
        goToSingleTv(contentId){
            this.$router.push({ name: 'preview', params: {cId: contentId, type: 'tv'}})
        },
        movieSliderRight(){
            let movieSlider = document.querySelector('#movies-section .content-slider-content');
            let singleMovie = movieSlider.querySelector('.content-slider-movie');
            let moviesCount = movieSlider.childNodes.length;
            let singleMovieWidth = singleMovie.offsetWidth;

            if(this.movieIndex < moviesCount - 1){
                this.movieIndex ++;
                movieSlider.style.left = `-${singleMovieWidth * this.movieIndex}px`;
            } else {
                this.movieIndex = 0;
                movieSlider.style.left = `0px`;
            }
        },
        movieSliderLeft(){
            let movieSlider = document.querySelector('#movies-section .content-slider-content');
            let singleMovie = movieSlider.querySelector('.content-slider-movie');
            let moviesCount = movieSlider.childNodes.length;
            let singleMovieWidth = singleMovie.offsetWidth;

            if(this.movieIndex > 0){
                this.movieIndex --;
                movieSlider.style.left = `-${singleMovieWidth * this.movieIndex}px`;
            } else {
                this.movieIndex = moviesCount - 1;
                movieSlider.style.left = `-${singleMovieWidth * (moviesCount - 1)}px`;
            }
        },
        musicSliderRight(){
            let musicSlider = document.querySelector('#music-section .content-slider-content');
            let singleMusic = musicSlider.querySelector('.content-slider-movie');
            let musicCount = musicSlider.childNodes.length;
            let singleMusicWidth = singleMusic.offsetWidth;

            if(this.musicIndex < musicCount - 1){
                this.musicIndex ++;
                musicSlider.style.left = `-${singleMusicWidth * this.musicIndex}px`;
            } else {
                this.musicIndex = 0;
                musicSlider.style.left = `0px`;
            }
        },
        musicSliderLeft(){
            let musicSlider = document.querySelector('#music-section .content-slider-content');
            let singleMusic = musicSlider.querySelector('.content-slider-movie');
            let musicCount = musicSlider.childNodes.length;
            let singleMusicWidth = singleMusic.offsetWidth;

            if(this.musicIndex > 0){
                this.musicIndex --;
                musicSlider.style.left = `-${singleMusicWidth * this.musicIndex}px`;
            } else {
                this.musicIndex = musicCount - 1;
                musicSlider.style.left = `-${singleMusicWidth * (musicCount - 1)}px`;
            }
        },
        tvSliderRight(){
            let tvSlider = document.querySelector('#tv-section .content-slider-content');
            let singleTv = tvSlider.querySelector('.content-slider-movie');
            let tvCount = tvSlider.childNodes.length;
            let singleTvWidth = singleTv.offsetWidth;

            if(this.tvIndex < tvCount - 1){
                this.tvIndex ++;
                tvSlider.style.left = `-${singleTvWidth * this.tvIndex}px`;
            } else {
                this.tvIndex = 0;
                tvSlider.style.left = `0px`;
            }
        },
        tvSliderLeft(){
            let tvSlider = document.querySelector('#tv-section .content-slider-content');
            let singleTv = tvSlider.querySelector('.content-slider-movie');
            let tvCount = tvSlider.childNodes.length;
            let singleTvWidth = singleTv.offsetWidth;

            if(this.tvIndex > 0){
                this.tvIndex --;
                tvSlider.style.left = `-${singleTvWidth * this.tvIndex}px`;
            } else {
                this.tvIndex = tvCount - 1;
                tvSlider.style.left = `-${singleTvWidth * (tvCount - 1)}px`;
            }
        }
    },

    components: {
    }
}