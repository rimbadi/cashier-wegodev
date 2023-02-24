<template>
  <v-row>
    <v-col cols="10" offset="1" md="4" offset-md="4">
      <v-card class="mb-2">
        <v-toolbar color="primary" dark>Register</v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              name="fullname"
              label="Full Name"
              type="text"
              :rules="rules.fullname"
              v-model="form.fullname"
            />
            <v-text-field
              name="email"
              label="email"
              type="email"
              :rules="rules.email"
              v-model="form.email"
              @keyup="checkEmail"
            />
            <v-text-field
              name="password"
              label="password"
              type="password"
              :rules="rules.password"
              v-model="form.password"
            />
            <v-text-field
              name="rtype_password"
              label="Re-password"
              type="password"
              :rules="rules.retype_password"
              v-model="form.retype_password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="onSubmit" color="primary">Register</v-btn>
        </v-card-actions>
      </v-card>
      <p>already have an account? <v-btn to="/login" plain>login</v-btn></p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      emailExist: false,
      form: {
        fullname: '',
        email: '',
        password: '',
        retype_password: '',
      },
      rules: {
        fullname: [(v) => !!v || 'Fullname is required'],
        email: [
          (v) => !!v || 'Email is required',
          (v) => /.+@.+/.test(v) || 'Email must be valid',
          (v) => !!this.emailExist || 'Email already exist',
        ],
        password: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'Password must be at least 6 character',
        ],
        retype_password: [
          (v) =>
            v === this.form.password ||
            'Re-password must be same with your password',
        ],
      },
    }
  },
  methods: {
    checkEmail() {
      this.$axios
        .post('/auth/check-email', this.form)
        .then((response) => {
          console.log(response)
          this.emailExist = false
        })
        .catch((error) => {
          this.emailExist = true
          console.log(error)
        })
    },
    onSubmit() {
      console.log(this.form)
      this.$axios.post('/auth/register', this.form).then((response) => {
        console.log(response)
      })
    },
  },
}
</script>
