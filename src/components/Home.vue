<template>
	<div class="home container">
		<div class="row">
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[0].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[0].id">{{nutrients[0].name}}</router-link>
					</span>
				</div>
			</div>
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[1].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[0].id">{{nutrients[1].name}}</router-link>
					</span>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[2].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[2].id">{{nutrients[2].name}}</router-link>
					</span>
				</div>
			</div>
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[3].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[3].id">{{nutrients[3].name}}</router-link>
					</span>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[4].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[4].id">{{nutrients[4].name}}</router-link>
					</span>
				</div>
			</div>
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[5].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[5].id">{{nutrients[5].name}}</router-link>
					</span>
				</div>
			</div>
		</div>
		<div class="row">

			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[6].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[6].id">{{nutrients[6].name}}</router-link>
					</span>
				</div>
			</div>
			<div class="card col s6">
				<div class="card-image">
					<img :src="nutrients[7].image">
					<span class="card-title">
						<router-link :to="'/foods/' + nutrients[7].id">{{nutrients[7].name}}</router-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      nutrients: [
        {
          id: "301",
          name: "Calcium",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/1.png"
        },
        {
          id: "303",
          name: "Iron",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/2.png"
        },
        {
          id: "304",
          name: "Magnesium",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/3.png"
        },
        {
          id: "851",
          name: "Omega-3",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/4.png"
        },
        {
          id: "305",
          name: "Phosphorus",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/5.png"
        },
        {
          id: "306",
          name: "Potassium",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534237226/veganfuel-web/home/6.png"
        },
        {
          id: "203",
          name: "Protein",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534622070/veganfuel-web/home/7.png"
        },
        {
          id: "309",
          name: "Zinc",
          image:
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1534621985/veganfuel-web/home/8.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.row .col {
  padding: 0;
}
</style>

