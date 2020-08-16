<template>
	<div id="app">
		<div class="container-xxl my-4 bd-layout">
			<div class="bd-sidebar">
				<router-link class="btn btn-primary" to="/">Home</router-link>
				<router-link class="btn btn-success" to="/contact">Contact</router-link>
			</div>
			
			<div class="bd-intro pt-md-3 pl-lg-4">
				<img class="rounded mx-auto d-block" src="./assets/images/logo.png">
				<router-view />
				
			</div>
			
			
			
			
			<div class="bd-toc pl-xl-3 text-muted mb-lg-5">
				
				中间备用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>备用<br><br><br><br>
				
			</div>
			
			
			
			<main class="bd-content order-1 pl-lg-4">
				备用<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>备用<br><br><br><br><br><br><br>
			</main>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	
	
};
</script>

<style lang="scss">
	
img {
	max-height: 200px;
}

</style>
