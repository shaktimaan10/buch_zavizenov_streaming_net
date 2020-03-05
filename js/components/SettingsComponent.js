export default {
    template: `
    <div>
    <section class="profiles-section">
            <div class="container profiles-container">
                <h1>Choose profile</h1>
                <div class="profiles-row">
                    <div class="single-profile single-profile-active">
                        <img src="images/dog.jpg" alt="profile-img">
                        <h4>shaktimaan</h4>
                    </div>
                    <div class="single-profile">
                        <img src="images/dog.jpg" alt="profile-img">
                        <h4>shaktimaan</h4>
                    </div>
                    <div class="single-profile">
                        <img src="images/dog.jpg" alt="profile-img">
                        <h4>shaktimaan</h4>
                    </div>
                    <div class="single-profile">
                        <img src="images/dog.jpg" alt="profile-img">
                        <h4>shaktimaan</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="profile-change-section">
            <div class="container profile-change-container">
                <div class="change-img">
                    <img src="images/dog.jpg" alt="profile-img">
                </div>
                <div class="change-details">
                    <form action="">
                        <label for="">Name</label>
                        <input type="text" value="shaktimaan">
                        <label for="">Parental control</label>
                        <select id="parental-contro" name="restriction">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button type="submit">Save changes</button>
                    </form>
                    <div class="change-details-delete">Delete profile</div>
                </div>
            </div>
        </section>
    </div>
     `
}