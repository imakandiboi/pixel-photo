<template>
  <div>
    <agile
      class="main desktop-slide"
      :autoplay="true"
      :autoplay-speed="4000"
      @after-change="(e) => (currentSlide = e.currentSlide)"
    >
      <div
        class="slide bg-gray-900 relative"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img :src="slide" alt="image" width="100%" class="" />
      </div>
    </agile>
    <!--MOBILE SLIDER-->
    <agile
      class="main mobile-slide"
      :autoplay="true"
      :autoplay-speed="4000"
      @after-change="(e) => (currentSlide = e.currentSlide)"
    >
      <div
        class="slide bg-gray-900 relative"
        v-for="(mobileSlide, index) in mobileSlides"
        :key="index"
      >
        <img
          :src="mobileSlide"
          alt="image"
          width="100%"
          height="auto"
          style="
             {
              object-fit: cover;
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-size: cover;
            }
          "
        />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "DesktopLander",
  component: {
    agile: VueAgile,
  },
  data() {
    return {
      currentSlide: 0,

      slides: [
        "https://images.pexels.com/photos/2328149/pexels-photo-2328149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/8072285/pexels-photo-8072285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2788546/pexels-photo-2788546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],

      mobileSlides: [
        "https://images.pexels.com/photos/3568546/pexels-photo-3568546.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/3863802/pexels-photo-3863802.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "https://images.pexels.com/photos/3290300/pexels-photo-3290300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3222422/pexels-photo-3222422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    };
  },
};
</script>

<style scoped>
.agile__slide img {
  object-fit: cover;
}

.agile {
  width: 100%;
}
.agile__actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.agile__dots {
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  gap: 20px;
  height: 40px;
  white-space: nowrap;
}

.agile__nav-button:hover {
  color: white;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 410px;
  justify-content: center;
}

.main >>> .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
  color: #fff;
}

.main >>> .agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
}

.main >>> .agile__nav-button {
  background-color: rgba(0, 0, 0, 0.4);

  width: 40px;
  height: 80px;
}

.main >>> .agile__nav-button--prev {
  left: 0px;
  border-radius: 0 8px 8px 0;
}

.main >>> .agile__nav-button--next {
  right: 0;
  border-radius: 8px 0px 0px 8px;
}
.desktop-slide {
  display: block;
}
.mobile-slide {
  display: none;
}

@media only screen and (max-width: 900px) {
  .slide {
    align-items: center;
    color: #fff;
    display: flex;
    height: 610px;
    justify-content: center;
  }

  .desktop-slide {
    display: none;
  }
  .mobile-slide {
    display: block;
  }

  .mobile-slide img {
    object-fit: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
}
</style>
