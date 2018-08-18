<template>
	<div class="footer">
		<footer class="blue z-depth-1">
			<div class="center">
				<a
					href="https://play.google.com/store/apps/details?id=andreygalchevski.veganfuel&hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-google-play" />
				</a>

				<a
					href="https://itunes.apple.com/us/app/veganfuel/id1275882059?mt=8"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fab fa-app-store-ios" />
				</a>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      thisYear: null
    };
  },
  mounted() {
    let now = new Date();
    this.thisYear = now.getFullYear();
  }
};
</script>

<style scoped>
.footer {
  color: #fafafa;
  font-size: 0.5em;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
footer {
  padding-top: 0.2em;
  padding-bottom: 0.1em;
}
.row {
  margin-bottom: 0px;
}
.fab {
  font-size: 1.5em;
  color: white;
  margin-left: 0.6em;
  margin-right: 0.6em;
}
</style>
