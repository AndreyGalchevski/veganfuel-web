<template>
  <div id="app">
		<Navbar />
		<router-view></router-view>
		<Fab />
		<Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Fab from "./components/Fab.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Fab,
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
  overflow-y: scroll;
}

#nprogress .bar {
  background: #00e676;
}

#nprogress .spinner {
  top: 1.3rem;
}

#nprogress .spinner-icon {
  width: 20px;
  height: 20px;
  border-top-color: #eeeeee;
  border-left-color: #eeeeee;
}
</style>
