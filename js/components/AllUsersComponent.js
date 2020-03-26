export default {
    template: `
    <section class="all-users-section">
        <div class="container all-users-container">
            <h1>Who is watching?</h1>
            <div class="all-users-list">
                <div class="all-users-single" v-for="(user, index) in allUsers"> 
                    <div v-if="user['user_isadmin'] == 1" class="all-users-single-overlay">
                        <h2>Enter password</h2>
                        <input type="password" v-model="input.password">
                        <a class="header-cta" @click="loginUser(index)">Log In</a>
                    </div>
                    <div @click="goToCatalog(index)" class="all-users-single-content">
                        <div class="all-user-single-frame">
                            <img :src="'images/' + user.user_avatar">
                        </div>
                        <h2>{{user.user_fname}}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
     `,

    data: function() {
        return {   
            allUsers:[],
            userGroup: this.$route.params.group,
            input:{
                password: ""
            }
        }
    },

    created: function() {
        this.getAllUsers();
    },

    methods: {
        getAllUsers() {
            const url = `./includes/index.php?getAllUsers=1&userGroup=${this.userGroup}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.allUsers = data;
            })
            .catch((err) => {console.error(err)})
        },
        loginUser(userIndex){
            if(this.allUsers[userIndex]['user_password'] === this.input.password){
                this.$emit("authenticated", true, this.allUsers[userIndex]);
                
                localStorage.setItem('AuthenticatedUser', JSON.stringify(this.allUsers[userIndex]));
                this.$router.push({ name: 'catalog', params: {age: this.allUsers[userIndex]['user_permissions']}});
                return;
            } else {
                alert('Wrong password!');
            }
        },
        goToCatalog(userId){
            if(this.allUsers[userId]['user_isadmin'] == 1){
                console.log('User is admin');
                document.querySelector('.all-users-single-overlay').classList.add('all-users-single-overlay-show');
            } else {
                this.$emit("authenticated", true, this.allUsers[userId]);
                
                localStorage.setItem('AuthenticatedUser', JSON.stringify(this.allUsers[userId]));
                this.$router.push({ name: 'catalog', params: {age: this.allUsers[userId]['user_permissions']}});
            }
        }
    }
}