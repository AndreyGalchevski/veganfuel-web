<template>
	<div>
		<h4>{{this.pageTitle}}</h4>
			<div class="row">
				<div class="input-field col s8 offset-s2 m4 offset-m4">
					<select ref="mySelect" v-on:change="selectFoodGroup($event)">
						<option value="" disabled>Choose Food Group</option>
						<option value="2000">Grains</option>
						<option value="0900">Fruits</option>
						<option value="1600">Legumes</option>
						<option value="1200">Nuts and Seeds</option>
						<option value="1100">Vegetables</option>
						<option value="9999">All</option>
					</select>
				</div>

				<div class="input-field col s8 offset-s2 m4 offset-m4">
					<input
						id="search"
						type="text"
						class="validate"
						v-model="searchTerm"
					/>
					<label for="search">Search</label>
				</div>

					<div v-for="food in filteredFoods" :key="food.name" class="col s12 m6 offset-m3">
						<div class="card z-depth-4">
							<div class="card-content blue-text">
								<div>
									<i class="small material-icons">short_text</i>
								</div>
								<p class="card-title">{{food.name}}</p>
								<p>{{food.measure}}</p>
							</div>
							<div class="card-action grey darken-3">
								<div class="white-text">
									<i class="small material-icons">show_chart</i>
								</div>
								<span class="white-text">Nutrient Content: </span>
								<span class="white-text">
									{{food.nutrients[0].value}}
									<small>{{food.nutrients[0].unit}}</small>
								</span>
							</div>
						</div>
					</div>
			</div>
		</div>
</template>

<script>
/* eslint-disable */
import M from "materialize-css/dist/js/materialize.js";
import { Api } from "../api/api";

export default {
  data() {
    return {
      selectInstance: null,
      baseUrlQuery:
        "?format=json&max=1500&api_key=QQ4HZzADiGZBvTyk5606Fb1axjFItcxuhYfct882&sort=c",
      searchTerm: "",
      foods: [],
      pageTitle: "",
      currentFoodGroup: "2000",
      foodGroups: [
        {
          id: "2000",
          name: "Grains"
        },
        {
          id: "0900",
          name: "Fruits"
        },
        {
          id: "1600",
          name: "Legumes"
        },
        {
          id: "1200",
          name: "Nuts and Seeds"
        },
        {
          id: "1100",
          name: "Vegetables"
        }
      ]
    };
  },
  computed: {
    filteredFoods() {
      return this.foods.filter(food => {
        return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  },
  mounted() {
    this.selectInstance = M.FormSelect.init(this.$refs.mySelect, {});
    this.displayData();
  },
  methods: {
    createUrl(foodGroup) {
      let url = "";
      url = this.baseUrlQuery + `&nutrients=${this.$route.params.nutrientId}`;
      if (foodGroup === "9999") {
        this.foodGroups.forEach(foodGroup => {
          url += `&fg=${foodGroup.id}`;
        });
      } else {
        url += `&fg=${foodGroup}`;
      }
      return url;
    },
    async fetchData(url) {
      try {
        const response = await Api.get(url);
        this.foods = response.data.report.foods;
        this.pageTitle = response.data.report.foods[0].nutrients[0].nutrient;
      } catch (error) {
        throw error;
      }
    },
    selectFoodGroup(e) {
      this.currentFoodGroup = e.target.value;
      this.displayData();
    },
    displayData() {
      let url = this.createUrl(this.currentFoodGroup);
      this.fetchData(url);
    }
  }
};
</script>

<style scoped>
.card-action {
  font-size: 20px;
}

.search-input {
  margin-bottom: 20px;
}

input#search {
  border-bottom-color: #2196f3 !important;
}

label.active {
  color: #2196f3 !important;
}

.sk-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>

