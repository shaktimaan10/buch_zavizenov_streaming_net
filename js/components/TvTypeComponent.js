export default {
    template: `
    <section class="single-type-section" v-bind:class="{ 'tv-section-kids' : this.age < 4 }">
        <div class="container single-type-filters">
            <div @click="filterContent('All')" v-bind:class="{ 'single-type-filter-active' : filter =='All' }" class="single-type-filter ">All</div>
            <div @click="filterContent('Comedy')" v-bind:class="{ 'single-type-filter-active' : filter =='Comedy' }" class="single-type-filter">Comedy</div>
            <div @click="filterContent('Crime')" v-bind:class="{ 'single-type-filter-active' : filter =='Crime' }" class="single-type-filter">Crime</div>
            <div @click="filterContent('Animation')" v-bind:class="{ 'single-type-filter-active' : filter =='Animation' }" class="single-type-filter">Animation</div>
            <div @click="filterContent('Adventure')" v-bind:class="{ 'single-type-filter-active' : filter =='Adventure' }" class="single-type-filter">Adventure</div>
            <div @click="filterContent('Sci-Fi')" v-bind:class="{ 'single-type-filter-active' : filter =='Sci-Fi' }" class="single-type-filter">Sci-Fi</div>
            <div @click="filterContentData(1950,1959)" v-bind:class="{ 'single-type-filter-active' : filter =='1950' }" class="single-type-filter">1950s</div>
            <div @click="filterContentData(1960,1969)" v-bind:class="{ 'single-type-filter-active' : filter =='1960' }" class="single-type-filter">1960s</div>
            <div @click="filterContentData(1970,1979)" v-bind:class="{ 'single-type-filter-active' : filter =='1970' }" class="single-type-filter">1970s</div>
            <div @click="filterContentData(1980,1989)" v-bind:class="{ 'single-type-filter-active' : filter =='1980' }" class="single-type-filter">1980s</div>
            <div @click="filterContentData(1990,1999)" v-bind:class="{ 'single-type-filter-active' : filter =='1990' }" class="single-type-filter">1990s</div>
        </div>
        <div class="container single-type-container">
            <div class="content-slider-movie" v-for="typeSingle in filteredContent">
                <div class="content-slider-movie-img">
                    <img :src="'images/' + typeSingle.tv_poster" alt="movie 1">
                </div>
                <div class="content-slider-movie-popup">
                    <h3>{{typeSingle.tv_name}}</h3>
                    <p>{{typeSingle.tv_genre}}</p>
                    <a @click="goToSingleMovie(typeSingle.tv_id)" class="slider-movie-popup-btn">
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
            age: this.$route.params.age,
            singleTypeContent: [],
            filter: 'All',
            filteredContent: []
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.getContent(this.singleType, this.age);
    },

    methods: {
        getContent(singleType, age) {
            const url = `./includes/index.php?getSingleType=${singleType}&allowedAge=${age}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.singleTypeContent = data;
                this.filteredContent = data;
            })
            .catch((err) => {console.error(err)})
        },
        goToSingleMovie(contentId){
            this.$router.push({ name: 'singleTv', params: {cId: contentId}})
        },
        filterContent(genre){
            if(genre === 'All'){
                this.filter = 'All';
                this.filteredContent = this.singleTypeContent;
                return;
            } else{
                this.filter = genre;
                this.filteredContent = [];
                for (let [key, value] of Object.entries(this.singleTypeContent)) {
                    for (let [keyTwo, valueTwo] of Object.entries(this.singleTypeContent[key])) {
                        if(keyTwo === 'tv_genre'){
                            let genreArr = valueTwo.split(', ');
                            if(genreArr.includes(genre)){
                                this.filteredContent.push(this.singleTypeContent[key]);
                            }
                        }
                    }
                }
                return;
            }
        },
        filterContentData(start,end){
            this.filter = start;
            this.filteredContent = [];
                for (let [key, value] of Object.entries(this.singleTypeContent)) {
                    for (let [keyTwo, valueTwo] of Object.entries(this.singleTypeContent[key])) {
                        if(keyTwo === 'tv_date'){
                            if(parseInt(valueTwo,10) >= start && parseInt(valueTwo,10) <= end){
                                this.filteredContent.push(this.singleTypeContent[key]);
                            }
                        }
                    }
                }
            return;
        }
    }
}