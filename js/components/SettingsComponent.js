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
        <section class="profile-change-section profile-change-section-admin" v-if="currentUser['user_isadmin'] == 1">
            <div class="container profile-change-container">
                <div class="change-img">
                    <img :src="'images/' + userToChange.user_avatar" alt="profile-img">
                </div>
                <div class="change-details">
                    <form @submit.prevent="updateAdminUser()">
                        <label for="">Name</label>
                        <input type="text" v-model="userToChange['user_fname']">
                        <label>Image</label>
                        <input type="file" @change="uploadedImage">
                        <label for="">Parental control</label>
                        <select id="parental-contro" name="restriction" v-model="userToChange['user_permissions']">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button type="submit">Save changes</button>
                    </form>
                    <div class="change-details-delete" @click="deleteAdminUser()">Delete profile</div>
                </div>
            </div>
        </section>
        <section class="profile-change-section profile-change-section-user profile-change-section-show" v-if="currentUser['user_isadmin'] == 0">
            <div class="container profile-change-container">
                <div class="change-img">
                    <img :src="'images/'+ currentUser.user_avatar" alt="profile-img">
                </div>
                <div class="change-details">
                    <form @submit.prevent="updateUser()" enctype="multipart/form-data">
                        <label for="">Name</label>
                        <input type="text" v-model="currentUser['user_fname']">
                        <label>Image</label>
                        <input type="file" @change="uploadedImage">
                        <button type="submit">Save changes</button>
                    </form>
                    <div class="change-details-delete" @click="deleteUser()">Delete profile</div>
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
            currentUser: [],
            currentLoginUser: this.$root.$data.loginUser,
            userToChange:[]
        }
    },

    created: function() {
        this.getAllUsers();
        this.determineUserToChange();
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
            this.userToChange = this.allUsers[userNumber];
            if(this.currentUser['user_isadmin']){
                document.querySelector('.profile-change-section-admin').classList.add('profile-change-section-show');
            }
        },
        determineUserToChange(){
            this.currentUser = Object.assign({}, this.$root.$data.user);
            if(this.currentUser['user_isadmin'] == 0){
                this.userToChange =  Object.assign({}, this.currentUser);
            }
        },
        switchUser(){
            if(localStorage.getItem('AuthenticatedUser')){
                localStorage.removeItem('AuthenticatedUser');
            }

            this.$router.push({ name: "allusers", params:{group: this.currentLoginUser['login_users']} });
            this.$root.$data.user = [];
            this.$root.$data.preauthenticated = true;
            this.$root.$data.authenticated = false;
        },
        logoutUser() {
            // delete local session
            if(localStorage.getItem('AuthenticatedUser')){
                localStorage.removeItem('AuthenticatedUser');
            }
            if(localStorage.getItem('PreauthenticatedUser')){
                localStorage.removeItem('PreauthenticatedUser');
            }
            // push user back to login page
            this.$router.push({ path: "/login" });
            this.$root.$data.authenticated = false;
            this.$root.$data.preauthenticated = false;
        },
        updateAdminUser(){
            const url = `./includes/index.php?updateUser=${this.userToChange['user_id']}&updateName=${this.userToChange['user_fname']}&updatePermissions=${this.userToChange['user_permissions']}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => {console.error(err)})
            document.querySelector('.profile-change-section-admin').classList.remove('profile-change-section-show');
            this.userToChange = [];
        },
        deleteAdminUser(){
            if(this.userToChange['user_id'] == this.currentUser['user_id']){
                alert("You can't delete admin user");
                return;
            }
            const url = `./includes/index.php?deleteUser=${this.userToChange['user_id']}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => {console.error(err)})
            document.querySelector('.profile-change-section-admin').classList.remove('profile-change-section-show');
            
            this.getAllUsers();
        },
        updateUser(){
            let formDataTwo = new FormData();
            let newImg = this.userToChange['user_avatar'];
            formDataTwo.append("image", newImg);
            const url = `./includes/index.php?updateUserId=${this.currentUser['user_id']}&updateName=${this.currentUser['user_fname']}`;

            fetch(url,{
                method: "POST",
                body: formDataTwo
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => {console.error(err)})

            // set new image in localStorage
            let updatedUser = JSON.parse(localStorage.getItem("AuthenticatedUser"));
            console.log(newImg);
            if(newImg['name']){
                updatedUser['user_avatar'] = newImg['name'];
                updatedUser['user_fname'] = this.currentUser['user_fname'];
                localStorage.setItem('AuthenticatedUser', JSON.stringify(updatedUser));
            } else {
                console.log(newImg);
                updatedUser['user_avatar'] = newImg;
                updatedUser['user_fname'] = this.currentUser['user_fname'];
                localStorage.setItem('AuthenticatedUser', JSON.stringify(updatedUser));
            }
            // Send to catalog page
            alert('user updated');
            this.$router.push({ name: 'catalog', params: {age: this.currentUser['user_permissions']}});
        },
        deleteUser(){
            const url = `./includes/index.php?deleteUserId=${this.currentUser['user_id']}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => {console.error(err)})

            this.logoutUser();
        },
        uploadedImage(event){
            // get image to user profile for update
            this.userToChange['user_avatar'] = event.target.files[0];
        },

    }
}