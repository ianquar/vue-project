<template>
  <div>
    <h2>Oour Users</h2>
    <a type="button" class="btn-floating deep-purple"
      ><i class="fab fa-youtube" aria-hidden="true"></i
    ></a>
    <div>
      <div class="row">
        <div class="col-4" v-for="(user, index) in users" :key="index">
          <div>
            <!-- Card -->
            <div class="card testimonial-card">
              <!-- Background color -->
              <div class="card-up indigo lighten-1"></div>

              <!-- Avatar -->
              <div class="avatar mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                  class="rounded-circle"
                  alt="woman avatar"
                />
              </div>

              <!-- Content -->
              <div class="card-body">
                <!-- Name -->
                <h4 class="card-title">{{ user.username }}</h4>
                <hr />
                <!-- Quotation -->
                <p>{{ user.email }} | {{ user.name }}</p>
              </div>
            </div>
            <!-- Card -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/users")
      .then(response => (this.users = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.testimonial-card .card-up {
  height: 120px;
  overflow: hidden;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.testimonial-card .avatar {
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 50%;
}
.testimonial-card .avatar img {
  width: 100%;
}
.testimonial-card .card-body {
  text-align: center;
}
</style>
