<template>
  <div>
    <div class="top-shoot-section container-fluid">
      <div class="top-shoot">
        <div class="top-shoot-caption">
          <h2>Some of our top shots photograpghers with models</h2>
          <p>
            We offer the best photograpghy and modelling contract which see our
            models as top priority as the continue to push further immersely in
            their career . we offer seamless connections with the top most
            companies and agencies and we are really proud with working with
            newbies who intend to merge with the gaints in the industry
          </p>
        </div>
        <div class="shot-gallery">
          <div
            class="row gallery-card"
            :style="{
              'background-image':
                'url(https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?cs=srgb&dl=pexels-dimitri-kuliuk-1488312.jpg&fm=jpg)',
            }"
          >
            <div class="col-md-4">
              <div class="shot-card">
                <img :src="image" alt="" srcset="" />
                <div class="shot-card-caption">
                  <p class="shot-card-text">ALEXA SCHIZLE</p>
                  <p class="shot-card-text-2">
                    Alexa being the best at what she does, Modelling with
                    Micheal Kol's . Being the face of PIxel she is a top rising
                    star and Modelling with us , she has been working with use
                    for QUite A few years and has been a Huge Name in the
                    Industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="shot-card">
                <img :src="image2" alt="" srcset="" />
                <div class="shot-card-caption">
                  <p class="shot-card-text">NEIL VÖN-HAAG</p>
                  <p class="shot-card-text-2">
                    Always wanting a career switch Neil is the definite
                    character for self belief in the Industry, she made a switch
                    from being a regular designer to a Top model featuring in
                    different Billbords for Fast high-rising enterprises in the
                    field . Modelling deals from Canon and some other companies
                    such as TWITCH INC. DORRIELOS, etc . She is considered as
                    one of our finest
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="shot-card">
                <img :src="image3" alt="" srcset="" />
                <div class="shot-card-caption">
                  <p class="shot-card-text">KIMBERLY PATTERSON</p>
                  <p class="shot-card-text-2">
                    Kimberly graduated from the university of Harvard with
                    Bachelors of Arts degree , driven by her passion for
                    Modelling , she contacted our Agency and we have driven her
                    from the cradles stages of Modelling with full self-proven
                    contract which enables her the best standing out and
                    representing our brand in Various Agencies as an Ambassador
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!---map -->

    <div id="map-section">
      <div class="map">
        <img src="@/assets/images/map.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>ot-car

<script>
export default {
  name: "TopShoot",
  data() {
    return {
      image:
        "https://images.pexels.com/photos/8072528/pexels-photo-8072528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      image2:
        "https://images.pexels.com/photos/1726999/pexels-photo-1726999.jpeg?cs=srgb&dl=pexels-davis-sanchez-1726999.jpg&fm=jpg",
      image3:
        "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");

.top-shoot-section {
  background-color: #d0cfe9;
  margin: 60px 0px 20px 0px;
  height: auto;
}

.top-shoot {
  width: 90%;
  margin: 0px auto;
  padding: 20px 10px;
  height: auto;
}

.top-shoot-caption {
  width: 80%;
  margin: 0px auto;
}

.top-shoot-caption h2 {
  text-align: center !important;
  padding: 30px 0px;
  color: #ffffff;
  font-size: 35px;
  font-weight: 900;
  font-family: "Montserrat";
  text-transform: uppercase;
}

.top-shoot-caption p {
  text-align: center !important;
  padding: 15px 0px;
  color: #ffffff;
  font-size: 18px;
  font-family: "Montserrat";
}

.shot-card {
  width: 100%;
  height: auto;
  padding: 5px;
}

.shot-card img {
  width: 100%;
  height: 350px;
  border-radius: 18px;
}

.gallery-card {
  background-color: rgb(255, 255, 255);
  object-fit: cover;
  padding: 20px 10px;
  border-radius: 15px;
}
.model-btn {
  height: 47px;
  width: 170px;
}
.shot-card-text {
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  font-family: "Montserrat";

  padding: 15px 0px;
  height: auto;
  color: #efefef;
  border-radius: 0px 0px 20px 20px;
  background-color: #28273be0;
}
.shot-card-text-2 {
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 15px;
  font-weight: 500;
  padding: 15px 30px;
  height: auto;
  font-family: "Montserrat";
  color: #3d3c3c;
  border-radius: 0px 0px 20px 20px;
  background-color: #ffffffa6;
}

.see-more-btn {
  justify-content: center;
  margin: 10px 10px 10px 30px;
}
.map img {
  object-fit: cover;
  width: 100%;
  height: 250px;
}
/**MEDIA QUERIES FCOR MOBILE VERSION  */
@media only screen and (max-width: 900px) {
  .top-shoot {
    width: 100%;
    margin: 0px auto;
    padding: 20px 0px;
    height: auto;
  }
}

.top-shoot-caption h2 {
  text-align: left;
  padding: 30px 0px;
  color: #3a3a3a;
  font-size: 25px;
  font-family: "Montserrat";
  text-transform: uppercase;
}

.top-shoot-caption p {
  text-align: left;
  padding: 0px 0px 30px 0px;
  color: #3a3a3a;
  font-size: 18px;
  font-family: "Montserrat";
}
.gallery-card {
  background-color: rgb(255, 255, 255);
  padding: 20px 0px;
}

.shot-card img {
  width: 100%;
  height: 300px;
  border-radius: 18px;
}

.shot-card {
  width: 100%;
  height: auto;
  padding: 5px;
}
</style>