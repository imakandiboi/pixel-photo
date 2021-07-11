<template>
  <div>
    <div class="container-fluid" id="About-next-photo-section">
      <div class="About-next-photo">
        <div class="title">
          <h2>WHAT WE OFFER HERE AT PIXEL PHOTOGRAPHY</h2>
          <p>
            We are a Photography brand currently based in Miami. We currently
            working on a huge project based on future partnership with our
            client both in the States and Aboard, We have worked with various
            Multi-Brand and produced the Best student and groom them to the Most
            sort out models in the field.
          </p>
        </div>

        <div class="about-next-card" id="first-section">
          <div class="row">
            <div class="col-md-6 pss">
              <div class="Do-card-text">
                <div class="card-text">
                  <h2 class="card-text-caption">
                    Leading photography & videography studio in MIAMI, FL
                  </h2>
                  <p>
                    With years of experience in the photo and video industry,
                    Pixel Studio Productions is recognized as one of the leading
                    portrait and wedding photographer in Houston and its
                    surrounding areas!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="grid sample-section">
                <div class="sample-card row">
                  <div class="col-md-6 sample-picture-card card-1">
                    <div
                      class="photo-image"
                      :style="{ 'background-image': 'url(' + image1 + ')' }"
                    ></div>
                  </div>
                  <div class="col-md-6 sample-picture-card card-2">
                    <img
                      class="photo-image"
                      :style="{ 'background-image': 'url(' + image2 + ')' }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-next-card" id="second-section">
          <div class="row">
            <div class="col-md-6">
              <div class="grid sample-section">
                <div class="sample-card row">
                  <div class="col-md-6 sample-picture-card card-1">
                    <div
                      class="photo-image"
                      :style="{ 'background-image': 'url(' + image3 + ')' }"
                    ></div>
                  </div>
                  <div class="col-md-6 sample-picture-card card-2">
                    <img
                      class="photo-image"
                      :style="{ 'background-image': 'url(' + image4 + ')' }"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 pss">
              <div class="Do-card-text">
                <div class="card-text">
                  <h2 class="card-text-caption">CONNECTING PRICELESSLY</h2>
                  <p>
                    We have the best Modelling contaracts suited just for you.
                    Our photographer are Top-notch and geared at creating the
                    best brand in the industry connecting you to the top brands
                    and bringing you to lime light .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-title">
          <h2>Leading photography & videography studio in MIAMI, FL</h2>
          <p>
            With years of experience in the photo and video industry, Pixel
            Studio Productions is recognized as one of the leading portrait and
            wedding photographer in Houston and its surrounding areas!
          </p>
        </div>

        <div class="mobile-title">
          <h2>CONNECTING PRICELESSLY</h2>
          <p>
            We have the best Modelling contaracts suited just for you. Our
            photographer are Top-notch and geared at creating the best brand in
            the industry connecting you to the top brands and bringing you to
            lime light .
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextAbout",
  data() {
    return {
      image:
        "https://images.pexels.com/photos/8072528/pexels-photo-8072528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

      image1:
        "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      image2:
        "https://images.pexels.com/photos/3035875/pexels-photo-3035875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      image3:
        "https://images.pexels.com/photos/3217513/pexels-photo-3217513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      image4:
        "https://images.pexels.com/photos/8128680/pexels-photo-8128680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&family=Homemade+Apple&family=Lato&family=Lora&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");

#About-next-photo-section {
  height: auto;
  padding: 30px 0px;
}

.About-next-photo {
  width: 90%;
  margin: 0 auto;
  padding: 10px 10px;
}
.title {
  width: 75%;
  margin: 0px auto;
  text-align: center;
}
.title h2 {
  padding: 20px 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 30px;
  font-weight: 100;
}
.mobile-title {
  display: none;
}

.title p {
  font-family: "Montserrat";
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  color: rgb(39, 39, 39);
}

.about-next-card {
  padding: 40px 0px 20px 0px;
}
.card-text {
  width: 80%;
  margin: 0px auto;
}

.pss {
  background-color: #dfdfdf;
  border-radius: 30px;
  padding: 30px 0px;
  height: 160px;
}
.Do-card-text {
  color: aliceblue;

  width: 90%;
  margin: 0px auto;
  padding: 20px 10px;
  background: rgb(59, 58, 121);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.card-text-caption {
  font-family: "Montserrat";
  padding: 20px 0px 40px 0px;
  font-size: 30px;
}

.card-text p {
  font-family: "Montserrat";

  font-size: 18px;
}
.sample-section {
  width: 95%;
  margin: 0px auto;
}

.sample-card {
  padding-top: 30px;
  position: relative;
}
.sample-picture-card {
  border: rgb(76, 33, 126) 20px solid;
}
.photo-image {
  height: 550px;
  width: 450px;
  object-fit: none;
  background-position-x: center;
  background-size: cover;
}

.card-2 {
  position: absolute;
  top: -50px;
  right: 70px;
}
@media only screen and (max-width: 900px) {
  #About-next-photo-section {
    height: auto;
  }
  .title {
    width: 100%;
    text-align: left;
  }

  .title h2 {
    padding: 20px 0px;
    font-family: "Montserrat";
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
  }

  .title p {
    font-family: "Montserrat";
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    color: rgb(39, 39, 39);
  }

  .mobile-title {
    width: 100%;
    display: block;
    text-align: left;
  }

  .mobile-title h2 {
    padding: 20px 0px;
    font-family: "Montserrat";
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
  }

  .mobile-title p {
    font-family: "Montserrat";
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    color: rgb(39, 39, 39);
  }

  .Do-card-text {
    color: aliceblue;

    width: 100%;
    margin: 0px 0px;
    padding: 20px 10px;
    font-weight: 100;
    background: #4241a5;
  }

  .card-text-caption p {
    font-family: "Montserrat";
    font-weight: 100;
    color: white;
    padding: 20px 0px 40px 0px;
    font-size: 18px;
  }

  .card-text {
    width: 100%;
    margin: 0px 0px;
  }

  .pss {
    background-color: white;
    border-radius: 0px;
    padding: 0px 0px;
  }
  .about-next-card {
    padding: 40px 0px 20px 0px;
    display: none;
  }
}
</style>