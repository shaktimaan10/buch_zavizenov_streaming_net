export default {
    template: `
    <div class="login-main">
        <div class="login-form-bg">
            <div class="login-form-container">
                <a href="index.html" class="login-form-logo">
                    <img src="images/logo.svg" alt="Flashback logo">
                </a>
                <form @submit.prevent="login" class="login-form-form">
                    <div class="login-form-column">
                        <label for="username-input">Username</label>
                        <input v-model="input.username" id="username-input" type="text" name="username">
                    </div>
                    <div class="login-form-column">
                        <label for="password-input">Password</label>
                        <input v-model="input.password" id="password-input" type="password" name="password">
                    </div>
                    <button type="submit" class="login-form-btn login-btn">Log In</button>
                </form>
            </div>
        </div>
    </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            //console.log('Works!');
            if(this.input.username != "" && this.input.password != ""){
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // we got a user back, let's set authneticate event
                    this.$emit("authenticated", true, data[0]);
                    // reroute to user component so we can see all user
                    this.$router.push({ path: "/catalog" });
                })
                .catch((error) => console.log(error));
            } else {
                console.log('One of the fields is empty!');
            }
        }
    }
}