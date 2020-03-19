export default {
    template: `
    <section class="all-users-section">
        <div class="container all-users-container">
            <h1>Who is watching?</h1>
            <div class="all-users-list">
                <div class="all-users-single" v-for="user in allUsers" @click="goToCatalog(user.user_id)"> 
                    <div class="all-user-single-frame">
                        <img :src="'images/' + user.user_avatar">
                    </div>
                    <h2>{{user.user_fname}}</h2>
                </div>
            </div>
        </div>
    </section>
     `,

    data: function() {
        return {   
            allUsers:[]
        }
    },

    created: function() {
        this.getAllUsers();
    },

    methods: {
        getAllUsers() {
            const url = `./includes/index.php?getAllUsers=1`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.allUsers = data;
            })
            .catch((err) => {console.error(err)})
        },
        goToCatalog(userId){
            this.$emit("authenticated", true, this.allUsers[userId-1]);
            this.$router.push({ name: 'catalog', params: {age: this.allUsers[userId-1]['user_permissions']}});
        }
    }
}