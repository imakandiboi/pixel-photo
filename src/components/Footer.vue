<template>
  <div style="padding-top: 50px">
    <div class="container-fluid footer-panel">
      <div class="footer">
        <div class="row">
          <div class="col-md-6">
            <div class="flex-col footer-brand">
              PIXEL PHOTO <span id="cap">Seeing the world throught lens </span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="flex-col contact-us">
              <h2>Contact Us:</h2>
              <p>PHONE: +1(757)-505-5977</p>
              <p>OFFICE: +1(530)-426-2122</p>
              <p>email: pixelstudioproductions@photographer.net</p>

              <p>Address : MIAMI,FL UNITED STATE</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="flex-col newsletter">
              <h2>Sign up for newsletters:</h2>
              <div class="mb-3 mt-8" style="margin-top: 24px">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Johndoe@example.com"
                />
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-warning" type="button">Sign up</button>
              </div>
            </div>
            <div class="flex-col"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      All rights Reserved © {{ new Date().getFullYear() }} PIXEL Photography.
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Lato&family=Montserrat&family=Open+Sans&family=Oswald&family=Raleway&display=swap");

.footer-panel {
  height: 40vh;
  background-color: #4241a5;
}

.footer {
  width: 90%;
  position: relative;
  top: 40px;
  margin: 0px auto;
}
.footer-brand {
  font-family: "Caveat", cursive;
  font-size: 35px;
  font-weight: 500;
  color: azure;
  padding: 0px 0px 40px 0px;
  text-decoration: none;
}
#cap {
  font-size: 25px;
}

.newsletter h2 {
  font-family: "Caveat", cursive;
  font-weight: 500;
  color: azure;
  padding: 0px 0px 20px 0px;
}
.contact-us h2 {
  font-family: "Caveat", cursive;
  font-weight: 500;
  color: azure;
  padding: 0px 0px 20px 0px;
}
.contact-us p {
  font-family: "Montserrat";
  font-weight: 500;
  color: azure;
  font-size: 15px;
  padding: 0px 0px 20px 0px;
}
.newsletter label {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 15px;

  color: azure;
  padding: 0px 0px 10px 0px;
}
.copyright {
  padding: 20px;
  text-align: center;
  background-color: #4241a5;
  color: #efefef;
  font-size: 22px;
  font-weight: 900;
  font-family: "Caveat", cursive;
}
@media only screen and (max-width: 900px) {
  .footer-panel {
    height: 90vh;
    padding: 0px;
    background-color: #4241a5;
  }
  #cap {
    font-size: 12px;
  }

  .copyright {
    padding: 20px;
    text-align: center;
    background-color: #4241a5;
    color: #efefef;
    font-size: 17px;
    font-weight: 900;
    font-family: "Caveat", cursive;
  }
}
</style>