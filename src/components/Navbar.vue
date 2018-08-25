<template>
	<div class="navbar-fixed">
		<nav>
			<div class="nav-wrapper blue">
				<span class="brand-logo center">VeganFuel</span>
				<router-link v-if="this.$route.path !== '/'" class="back-icon left" to="/">
					<i class="fas fa-chevron-left" />
				</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {};
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
