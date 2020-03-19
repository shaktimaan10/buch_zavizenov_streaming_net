export default {
    template: `
    <div>
        <section class="profiles-section" v-if="currentUser['user_isadmin'] == 1">
            <div class="container profiles-container">
                <h1>Choose profile</h1>
                <div class="profiles-row">
                    <div v-for="(user,number) in allUsers" @click="showUserToChange(number)" class="single-profile" v-bind:class="{ 'single-profile-active' : user['user_id'] == userToChange['user_id'] }">
                        <img :src="'images/' + user['user_avatar']" alt="profile-img">
                        <h4>{{user.user_fname}}</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="profile-change-section" v-if="currentUser['user_isadmin'] == 1">
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
        <section class="profile-change-section profile-change-section-user" v-if="currentUser['user_isadmin'] == 0">
            <div class="container profile-change-container">
                <div class="change-img">
                    <img src="images/dog.jpg" alt="profile-img">
                </div>
                <div class="change-details">
                    <form action="">
                        <label for="">Name</label>
                        <input type="text" value="shaktimaan">
                        <button type="submit">Save changes</button>
                    </form>
                    <div class="change-details-delete">Delete profile</div>
                </div>
            </div>
        </section>
        <section class="profile-logout-section">
            <div class="container profile-logout-container">
                <a @click="switchUser()" class="switch-btn">Switch user</a>
                <a @click="logoutUser()" class="logout-btn">Log Out</a>
            </div>
        </section>
    </div>
     `,

    data: function() {
        return {   
            allUsers:[],
            userGroup: this.$route.params.group,
            currentUser: this.$root.$data.user,
            currentLoginUser: this.$root.$data.loginUser,
            userToChange:[]
        }
    },

    created: function() {
        this.getAllUsers();
    },

    methods:{
        getAllUsers() {
            const url = `./includes/index.php?getAllUsers=1&userGroup=${this.userGroup}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.allUsers = data;
            })
            .catch((err) => {console.error(err)})
        },
        showUserToChange(userNumber){
            console.log(userNumber);
        },
        switchUser(){
            this.$router.push({ name: "allusers", params:{group: this.currentLoginUser['login_users']} });
            this.$root.$data.user = [];
            this.$root.$data.preauthenticated = true;
            this.$root.$data.authenticated = false;
        },
        logoutUser() {
            // delete local session

            // push user back to login page
            this.$router.push({ path: "/login" });
            this.$root.$data.authenticated = false;
            this.$root.$data.preauthenticated = false;
        }
    }
}