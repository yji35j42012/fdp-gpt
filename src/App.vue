<template>
	<div id="app" class="wrap">
		<div class="header">
			<div class="header_title">
				<div class="logo"><img src="./assets/images/logo.svg" alt=""></div>
				Biomedical Regulations Widget 
				<span v-if="backend" class="isBack">Backend</span>
			</div>
			<button v-if="!backend" @click="download" class="normal_btn _generate _download" disabled id="dow">Download</button>
			<div class="user">Member 0001</div>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			backend: false
		}
	},
	mounted() {
		if (this.$route.path.indexOf('backend') !== -1) {
			this.backend = true
		} else {
			this.backend = false
		}
		// console.log('asdf', this.$route.path);
	},
	methods: {
		download() {

		}
	}

}
</script>