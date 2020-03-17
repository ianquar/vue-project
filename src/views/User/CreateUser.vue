<template>
  <div>
    <h1 class="">Create User</h1>
    <div v-if="CreateUser">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form @submit.prevent="CreateUser">
      <div>
        <div class="md-form">
          <label for="name">Name</label>
          <input class="form-control col-" type="text" v-model="name" />
        </div>
        <div class="md-form">
          <label for="username">Username</label>
          <input class="form-control" type="text" v-model="username" />
        </div>
        <div class="md-form">
          <label for="email">Email</label>
          <input class="form-control" type="text" v-model="email" />
        </div>
        <button class="btn aqua-gradient" type="sbumit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      username: null,
      email: null,
      errors: []
    };
  },
  methods: {
    CreateUser() {
      if (this.name && this.username && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name Required");
      }
      if (!this.username) {
        this.errors.push("Usernmae Required");
      }

      if (!this.email) {
        this.errors.push("Email Required");
      }
    }
  }
};
</script>

<style scoped=""></style>
