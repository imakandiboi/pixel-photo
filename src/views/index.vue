<template>
  <div>
    <div>
      <Lander />
      <NextAbout />
      <slider />
      <TopShoot />
      <partners />
    </div>
  </div>
</template>

<script>
import Lander from "@/components/Lander.vue";
import TopShoot from "@/components/TopShoot.vue";
import NextAbout from "@/components/NextAbout.vue";
import slider from "@/components/slider.vue";
import partners from "@/components/partners.vue";
export default {
  components: {
    Lander,
    NextAbout,
    slider,
    TopShoot,
    partners,
  },
};
</script>

<style>
</style>