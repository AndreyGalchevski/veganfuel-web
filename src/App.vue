<template>
  <div id="app">
		<Navbar />
		<router-view></router-view>
		<Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
#nprogress .bar {
  background: #eeeeee;
}
#nprogress .spinner-icon {
  border-top-color: #eeeeee;
  border-left-color: #eeeeee;
}
</style>
