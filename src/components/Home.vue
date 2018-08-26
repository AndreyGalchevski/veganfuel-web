<template>
	<div class="home container">
		<div class="row">
			<div v-for="nutrient in nutrients" :key="nutrient.id">
				<router-link :to="'/foods/' + nutrient.id">
					<div class="card col s6 m4">
							<div class="card-image">
								<img :src="nutrient.image">
								<span class="card-title">{{nutrient.name}}</span>
							</div>
					</div>
				</router-link>
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
            "https://res.cloudinary.com/dqvimfd8b/image/upload/v1535206231/veganfuel-web/home/4a.png"
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
  },
  mounted() {
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      if (i % 2 === 0) {
        cards[i].classList.add("offset-m2");
        cards[i].style.paddingRight = "2px";
      } else {
        cards[i].style.paddingLeft = "2px";
      }
    }
  }
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 12.5%;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
.row .col {
  padding: 0;
  margin-bottom: 0px;
}

.row {
  margin-bottom: 0px;
}

.card {
  height: 7.6rem !important;
}

.card-image img {
  height: 7.6rem !important;
}

.card-title {
  font-family: "Pacifico", cursive;
  font-size: 1.7rem;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  padding: 0px !important;
  bottom: 31% !important;
  left: 1% !important;
  right: 1% !important;
}
</style>
