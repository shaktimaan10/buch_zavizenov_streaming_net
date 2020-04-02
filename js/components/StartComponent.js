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
                    <img src="images/device-mockup.jpg" alt="device-mockup">
                </div>
                <div class="reason-section-text">
                    <h2>This is why!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
        <section class="reason-section">
            <div class="container reason-section-container">
                <div class="reason-section-img">
                    <img src="images/device-mockup.jpg" alt="device-mockup">
                </div>
                <div class="reason-section-text">
                    <h2>This is why2!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
        <section class="reason-section">
            <div class="container reason-section-container">
                <div class="reason-section-img">
                    <img src="images/device-mockup.jpg" alt="device-mockup">
                </div>
                <div class="reason-section-text">
                    <h2>This is why3!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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