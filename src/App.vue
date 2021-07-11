<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
