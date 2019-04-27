<template>
  <div class="register-page">
    <header>
      <h3>INSTA<span>CLONE</span></h3>
      <h4>Register</h4>
    </header>
    <main class="form-group">
      <input type="text" v-model="forename" placeholder="Forename" />
      <input type="text" v-model="surname" placeholder="Surname" />
      <input type="text" v-model="email" placeholder="Email" :class="(hasErrors) ? 'err' : ''" />
      <input type="password" v-model="password" placeholder="Password" />
      <button class="login-btn" @click="register">Register</button>
      <div class="error_msg" v-if="hasErrors">
        {{ error }}
      </div>
    </main>
    <footer>
      <p>
        Already Registered? <router-link class="link" to="/login">Sign in</router-link>.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      forename: "",
      surname: "",
      email: "",
      password: "",
      hasErrors: false,
      error: ''
    }
  },
  methods: {
    register () {
      let api_url = this.$store.state.api_url

      if (this.email == '' || 
          this.password == '' || 
          this.forename == '' ||
          this.surname == ''
      ) {
        return alert('Please fill in all fields')
      }

      this.$http.post(api_url + 'user/register', {
        forename: this.forename,
        surname: this.surname,
        email: this.email,
        password: this.password
      }).then(response => {
        if (response.data.auth) {
          localStorage.setItem('jwt', response.data.token)
          this.$router.push('/')
        } else {
          this.error = response.data.msg
          this.hasErrors = true
        }
      }).catch(err => {
        this.hasErrors = true
        this.error = err
      })
    }
  }
}
</script>
