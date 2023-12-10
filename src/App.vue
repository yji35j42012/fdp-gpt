<template>
	<div id="app" class="wrap">
		<div class="header">
			<div class="header_title">Biomedical Regulations Widget <span v-if="backend" class="isBack">Backend</span></div>
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

}
</script>