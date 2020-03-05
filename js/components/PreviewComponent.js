export default {
    template: `
    <section class="preview-section">
            <div class="preview-section-play">
                <img src="images/play.svg" alt="play btn">
            </div>
            <div class="preview-section-bg-overlay"></div>
            <video class="preview-section-bg" autoplay muted loop>
                <source src="video/dunkirk.mp4" type="video/mp4">
            </video>
            <div class="container preview-section-container">
                <div class="preview-content">
                    <h1>Dunkirk</h1>
                    <p>During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.</p>
                </div> 
            </div>
    </section>
     `
}