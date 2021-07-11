<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div class="container-fluid" id="drops">
          <router-link :to="{ name: 'Home' }" class="navbar-brand" href="/Home">
            PIXEL PHOTO
          </router-link>
          <span id="cap">Seeing the world throught lens </span>
          <button
            v-on:click="show = !show"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNavAltMarkup menu"
            v-show="show"
          >
            <div class="navbar-nav">
              <router-link
                :to="{ name: 'Home' }"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Home</router-link
              >

              <router-link :to="{ name: 'project' }" class="nav-link" href="#"
                >Project
              </router-link>
              <router-link :to="{ name: 'contact' }" class="nav-link" href="#"
                >Contact us</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
    };
  },
  /* methods: {
    Nav() {
      this.showNav === !this.showNav;
    },
  },*/
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Lato&family=Montserrat&family=Open+Sans&family=Oswald&family=Raleway&display=swap");
.navbar {
  padding: 20px 50px;
  height: 80px;
}
.navbar-brand {
  font-family: "Caveat", cursive;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
}
#cap {
  margin: 0px 10px;
  font-size: 15px;
  font-weight: 600;
  color: #4241a5;
  font-family: "Montserrat", sans-serif;
}
.navbar-nav {
  gap: 30px;
}

.navbar-collapse {
  display: flex;
  justify-content: flex-end;
}
.navbar-collapse a {
  font-size: 15px;
  font-weight: 500;
  color: #4241a5 !important;
}
.nav-link a {
  text-decoration: none;
}
button {
  outline: none;
}

@media only screen and (max-width: 900px) {
  .navbar-collapse {
    display: flex;
    background: rgb(240, 240, 240);
    justify-content: flex-start;
  }
  .navbar {
    padding: 20px 0px;
    height: 70px;
  }
  .navbar-nav {
    gap: 16px;

    padding-top: 20px;
    padding-left: 20px;
  }
  #cap {
    display: none;
  }
  #drops {
    padding: 0px 5px;
  }
}
</style>