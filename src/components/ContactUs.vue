<template>
  <div>
    <div class="contact-us-section">
      <!---contact us caption---->
      <div class="contact-us container">
        <h2>
          We Are Looking Forward To Work With Diffrent Models All Around The
          Country
        </h2>
        <p>
          As a fast growing company in the field we are looking for elegant,
          hardworking and Ambitious Model who Are looking to take their career
          to the next level in the Modelling Industry , As a result us are prior
          convinced to push forward in grooming and polishing young Aspirant who
          are ready to work with us . we give incentivies on registering with us
          via our portal , we give insight and location for staedy shooot so
          that our models work with ethics
        </p>
      </div>
    </div>

    <!---contact us details---->
    <div class="step-to-contact">
      <div class="contact-us container">
        <h2>How To Contact Us:</h2>
        <p>
          Due to the Current pandemic we are trying as much as possible to carry
          out our project nevertheless, and our team have come up with some easy
          steps to fit you as you enroll with us some our our verification
          process comes with special packegages which covers some minor expense
          for our newbies as a stimulus to work with us , and Also have benefits
          of getting paid while boosting you career with our agency.
        </p>
        <div class="details">
          <h3>
            Here in PIXELS STUDIO, We belive you will like to work with us, and
            you are looking for the best platform to display your talent and
            present yourself to the world. We will like to know more about you
            as you fill the necessary detail right below by clicking on the link
            below.
          </h3>
          <ul>
            <li class="d-flex">
              <i class="fas fa-arrow-circle-right"></i>
              <h6>Full Name</h6>
            </li>
            <li class="d-flex">
              <i class="fas fa-arrow-circle-right"></i>
              <h6>Address</h6>
            </li>
            <li class="d-flex">
              <i class="fas fa-arrow-circle-right"></i>
              <h6>
                Upload ID verification
                <span> (i.e Driver's lincense, State ID card, Passport )</span>
              </h6>
            </li>
            <li class="d-flex">
              <i class="fas fa-arrow-circle-right"></i>
              <h6>Selfie verification</h6>
            </li>

            <li class="d-flex">
              <i class="fas fa-arrow-circle-right"></i>
              <h6>SSN</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!---map---->
    <div id="map-section">
      <div class="map">
        <img src="@/assets/images/map.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.contact-us-section {
  background: #efefef;
  height: auto;
}
.contact-us {
  padding-top: 60px;
  padding-bottom: 60px;
}

.contact-us h2 {
  padding-top: 60px;
  font-size: 33px;
  padding-bottom: 10px;
  color: #474747;
  font-family: "Montserrat";
  text-align: center;
}

.contact-us p {
  width: 90%;
  line-height: 2em;
  font-size: 18px;
  margin: 0px auto;
  padding-top: 10px;
  padding-bottom: 40px;
  color: #474747;
  font-family: "Montserrat";
  text-align: center;
}

.step-to-contact {
  margin-top: 40px;
  background: #efefef;
  height: auto;
}
.details {
  border: 6px 18px 24px 33px #ebebeb;
  border-radius: 5px;
  background: #ffffff;
  height: auto;
}
.details h3 {
  width: 80%;
  margin: 5px auto;
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 18px;
  line-height: 2em;
  padding-bottom: 10px;
  color: #474747;
  font-family: "Montserrat";
  text-align: center;
}
.details ul {
  margin: 10px auto;
  width: 80%;
  padding-bottom: 40px;
}

.details li {
  list-style-position: none;
  margin-bottom: 20px;
}
li h6 {
  margin-left: 20px;
  font-family: "Montserrat";
  font-size: 20px;
}
.fas {
  font-size: 25px;
  color: rgb(38, 143, 85);
}
/**map */
#map-section {
  width: 70%;
  margin: 20px auto;
}

.map img {
  object-fit: cover;
  width: 100%;
  height: 250px;
}
</style>