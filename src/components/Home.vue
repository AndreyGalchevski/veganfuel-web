<template>
	<div class="home">
		<div v-for="nutrient in nutrients" :key="nutrient.id">
			<button>
				<router-link :to="'/foods/' + nutrient.id">{{nutrient.name}}</router-link>
			</button>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      nutrients: [
        { id: "301", name: "Calcium" },
        { id: "303", name: "Iron" },
        { id: "304", name: "Magnesium" },
        { id: "851", name: "Omega-3" },
        { id: "305", name: "Phosphorus" },
        { id: "306", name: "Potassium" },
        { id: "203", name: "Protein" },
        { id: "309", name: "Zinc" }
      ]
    };
  }
};
</script>

<style scoped>
</style>

