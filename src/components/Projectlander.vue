<template>
  <div>
    <div class="container-fluid project-lander">
      <div class="container project">
        <h1>Some Of Our Project We Are Delighted to Show</h1>
        <p>
          Here are Some of our recent project, The company is esuring that the
          best of the best are who represents us and our package and contract
          with each model see them from grooming level to to to finest in the
          Modelling industy. With fineest instrutors on-set and top quality
          shoot-engineers, we are pioneer to give the very best .
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projectlander",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");

.project-lander {
  height: auto;
  padding-top: 60px;
  background: rgb(234, 236, 230);
}
.project {
  position: relative;
  margin: 20px auto;
  height: auto;
  padding-bottom: 30px;
}
.project h1 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #474747;
  font-family: "Montserrat";
  text-align: center;
}
.project p {
  width: 80%;
  margin: 0px auto;
  padding-top: 20px;
  line-height: 2em;
  font-size: 18px;
  padding-bottom: 20px;
  color: #474747;
  font-family: "Montserrat";
  text-align: center;
}

@media only screen and (max-width: 900px) {
  .project-lander {
    height: auto;
    padding-top: 60px;
    background: rgb(234, 236, 230);
  }

  .project {
    position: relative;
    margin: 20px auto;
    height: auto;
  }

  .project p {
    width: 100%;

    padding-top: 20px;
    padding-bottom: 30px;
    color: #474747;
    font-family: "Montserrat";
    text-align: center;
  }
}
</style>