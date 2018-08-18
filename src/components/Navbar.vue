<template>
	<div class="navbar-fixed">
		<nav>
			<div class="nav-wrapper blue">
				<span class="brand-logo center">VeganFuel</span>
				<router-link class="back-icon left" to="/">
					<i class="fas fa-chevron-left" />
				</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
import M from "materialize-css/dist/js/materialize.js";

export default {
  name: "navbar",
  data() {
    return {
      sideNavInstance: null
    };
  },
  mounted() {
    this.sideNavInstance = M.Sidenav.init(this.$refs.sideNavRef, {});
  },
  methods: {
    closeSideNav() {
      if (this.sideNavInstance.isOpen) {
        this.sideNavInstance.close();
      }
    }
  }
};
</script>

<style scoped>
.brand-logo img {
  width: 1.8em;
  height: 1.8em;
  padding-bottom: 2px;
  vertical-align: middle;
}

.brand-logo {
  font-family: "Pacifico", cursive;
}

.ios-icon {
  vertical-align: middle;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.android-icon {
  vertical-align: middle;
  margin-right: 0.5em;
}

.back-icon {
  vertical-align: middle;
  margin-left: 0.5em;
}
</style>
