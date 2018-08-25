<template>
	<div class="fixed-action-btn" ref="fab">
		<a class="btn-floating btn-large pink darken-1">
			<i class="fas fa-share-alt"></i>
		</a>
		<ul>
			<li>				
				<a 
					class="btn-floating facebook" 
					href="https://www.facebook.com/sharer/sharer.php?u=https://veganfuel.herokuapp.com" 
					target="_blank">
					<i class="fab fa-facebook-f"></i>
				</a>
			</li>
			<li>
				<a 
					class="btn-floating twitter" 
					href="https://twitter.com/intent/tweet?url=https://veganfuel.herokuapp.com/&text=Check out this cool vegan nutrition app!&hashtags=vegan" 
					target="_blank">
					<i class="fab fa-twitter"></i>
				</a>
			</li>
			<li>
			<a class="btn-floating linkedin" href="https://www.linkedin.com/shareArticle?url=https://veganfuel.herokuapp.com" target="_blank">
				<i class="fab fa-linkedin-in"></i>
			</a>
			</li>
			<li>
				<a class="btn-floating google-plus" href="https://plus.google.com/share?url=https://veganfuel.herokuapp.com" target="_blank">
					<i class="fab fa-google-plus-g"></i>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import M from "materialize-css/dist/js/materialize.js";

export default {
  data() {
    return {
      fabInstance: null
    };
  },
  mounted() {
    this.fabInstance = M.FloatingActionButton.init(this.$refs.fab, {});
  }
};
</script>

<style scoped>
.fixed-action-btn {
  bottom: 30px;
}

.facebook {
  background-color: #3b5998;
}

.twitter {
  background-color: #1da1f2;
}

.linkedin {
  background-color: #0077b5;
}

.google-plus {
  background-color: #dd4b39;
}
</style>

