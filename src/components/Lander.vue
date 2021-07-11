<template>
  <div>
    <div
      id=""
      class="container-fluid lander-section"
      :style="{ 'background-image': 'url(' + image + ')' }"
    >
      <div class="container">
        <div class="row hero-page">
          <div class="col-md-8">
            <div class="flex-col hero-details">
              <h2>Creating Memories ...</h2>
              <p>
                finding & working with the best brand to produce future<br
                  class="break"
                />
                models in the industry
              </p>
              <div class="d-flex">
                <router-link :to="{ name: 'project' }" href="#">
                  <button
                    type="button"
                    class="btn hero-button btn-sm btn-outline-primary"
                  >
                    Project
                  </button>
                </router-link>

                <a href="http://" target="_blank">
                  <button
                    type="button"
                    class="btn hero-button btn-sm btn-outline-primary"
                  >
                    Apply here
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lander",

  data() {
    return {
      image:
        "https://images.pexels.com/photos/8072528/pexels-photo-8072528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");
.lander-section {
  background-color: rgb(236, 240, 240);
  height: 70vh;
  object-fit: none;
  background-position-y: center;
  /**background-attachment: fixed; */
}
.hero-page {
  position: relative;
  top: 80px;
  padding: 50px 10px 0px 10px;
}

.hero-details {
  display: grid;
  gap: 2px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 0px 32px 0 rgba(253, 253, 255, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 2px;
  height: auto;
}
.hero-details h2 {
  padding: 30px 20px 30px 20px;
  font-family: "Bad Script", cursive;
  font-weight: 900;
  color: #4241a5;
  font-size: 3rem;
}

.hero-details p {
  font-family: "Lato", cursive;
  padding: 15px 20px 0px 20px;
  font-size: 23px;
  font-weight: bold;
  color: #5d0066;
  font-style: italic;
}

.hero-details div {
  padding: 15px 20px 30px 20px;
}
.hero-button {
  height: 40px;
  color: white;
  background-color: #3e0942;
  width: 130px;
  border-radius: 30px;
  outline: none;
  border-color: none;
}
.hero-button :hover {
  background-color: white !important;
  color: #5d0066 !important;
  transition: ease-in-out !important;
}
@media only screen and (max-width: 900px) {
  .lander-section {
    background-color: rgb(236, 240, 240);
    height: 60vh;
    object-fit: none;
    background-position-x: center;
    background-size: cover;
    /**background-attachment: fixed; */
  }

  .hero-page {
    position: relative;
    top: 80px;
    padding: 50px 0px 0px 0px;
  }

  .hero-details h2 {
    padding: 30px 10px 10px 10px;
    font-family: "Bad Script", cursive;
    font-weight: 900;
    color: #4241a5;
    font-size: 1.7rem;
  }
  .break {
    display: none;
  }
  .hero-details {
    display: grid;
    gap: 2px;
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 0px 32px 0 rgba(253, 253, 255, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 2px;
    height: auto;
  }
  .hero-details p {
    font-family: "Lato", cursive;
    padding: 15px 20px 0px 20px;
    font-size: 15px;
    font-weight: bold;
    color: #5d0066;
    font-style: italic;
  }
}
</style>