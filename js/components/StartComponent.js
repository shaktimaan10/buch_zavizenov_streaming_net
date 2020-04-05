export default {
    template: `
    <div>
    <section class="hero-section">
            <div class="container hero-section-container">
                <h1>Introducing the best streaming service</h1>
                <h3>from your favorite media players manufacturer</h3>
                <router-link to="/login" class="hero-cta">Try it now!</router-link>
            </div>
        </section>
        <section class="reason-section">
            <div class="container reason-section-container reason-section-container-one">
                <div class="reason-section-img">
                <!-- Image from https://www.pngfuel.com/free-png/niqta -->
                    <img src="images/tarantino.png" alt="device-mockup">
                </div>
                <div class="reason-section-text">
                    <h2>A lot of new movies</h2>
                    <p>
                        Browse from a diverse movie, music and tv show database.
                    </p>
                </div>
            </div>
        </section>
        <section class="reason-section">
            <div class="container reason-section-container">
                <div class="reason-section-img">
                    <!-- Image from https://www.pngwave.com/png-clip-art-zhltm -->
                    <img src="images/mia-wallace" alt="device-mockup">
                </div>
                <div class="reason-section-text">
                    <h2>Parental control</h2>
                    <p>
                        All new child profiles with password-protected parent control. You can select from a variety of maturity level, so you have control over the content your children watch.
                    </p>
                </div>
            </div>
        </section>
        <section class="reason-section">
            <div class="container reason-section-container">
                <div class="reason-section-img">
                <!-- Image from https://www.pinterest.cl/pin/558446422543823552/ -->
                    <img src="images/vincent.png" alt="device-mockup">
                </div>
                <div class="reason-section-text">
                    <h2>Genre filters</h2>
                    <p>
                        Watch all media content based on your preferred genre, favourite cast and our tuned recommendations.
                    </p>
                </div>
            </div>
        </section>
    </div>
     `,

    mounted(){
        this.toggleReasons();
    },

    methods:{
        toggleReasons(){
            let wrappers = document.querySelectorAll('.reason-section');
            let deviceOffset = 200;
            if(document.width < 720){
                deviceOffset = 200;
            }
            if(document.width > 719 && document.width < 1200){
                deviceOffset = 300;
            } else {
                deviceOffset = 500;
            }
            wrappers.forEach(function(wrapper) {
                var waypoint = new Waypoint({
                    element: wrapper,
                    handler: function() {
                      wrapper.classList.toggle("reason-section-show");
                    },
                    offset: deviceOffset
                })
            })
        }
    }
}