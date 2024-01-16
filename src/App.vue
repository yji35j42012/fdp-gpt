<template>
	<div id="app" :class="['wrap', '_' + nowPage]" ref="wrap">
		<div :class="['header', nowPage == 'landing' ? '_landing' : '', headerBg ? '_on' : '']">
			<div class="header_title">
				<div class="logo">
					<img v-if="nowPage == 'landing'" src="./assets/images/logo.svg" alt="">
					<img v-else src="./assets/images/logo_s.svg" alt="">
				</div>
				MEDPILOT
				<span v-if="nowPage == 'backend'" class="isBack">Backend</span>
			</div>

			<ul v-if="nowPage == 'landing'" class="menu">
				<li class="menu_li" @click="menuHandler('home')">Home</li>
				<li class="menu_li" @click="menuHandler('about')">About</li>
				<li class="menu_li" @click="menuHandler('highlights')">Highlights</li>
				<li class="menu_li" @click="menuHandler('pruducts')">Pruducts</li>
				<li class="menu_li" @click="menuHandler('team')">Team</li>
				<li class="menu_li" @click="menuHandler('contact')">Contact</li>
				<li class="menu_li _try">
					<router-link to="/">Try it</router-link>
				</li>
				<li class="menu_li _btn _disabled"><button class="border_btn" disabled>Login</button></li>
			</ul>

			<button v-if="nowPage == 'front'" @click="download" class="normal_btn _generate _download" disabled
				id="dow">Download</button>
			<div v-if="nowPage == 'front'" class="user">Member 0001</div>
		</div>

		<button :class="['gotop', headerBg ? '_on' : '']" v-if="nowPage == 'landing'" @click="gotopHandler" ref="gotop">
			<img src="./assets/images/icon_gotop.svg" alt="">
		</button>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nowPage: "",
			scrollTime: "",
			headerBg: false,
			screenH: 0,
		};
	},
	mounted() {
		var now=this.$route.path;
		if (now=="/landing") {
			this.nowPage="landing";
		}
		this.screenH=window.innerHeight
		this.$refs.wrap.addEventListener('scroll', this.scrollHandler)



		window.onload=function () {
			let favicon=document.querySelector('link[rel="icon"]');
			var newHref;
			var s=favicon.href;
			if (!s) {
				this.nowPage=="landing"? newHref=location.href+"favicon_landing.ico":newHref=location.href+"favicon.ico";
				console.log('newHref', newHref);
				favicon.href=newHref;
				return
			}
			

			this.nowPage=="landing"? newHref=s.split("/favicon.ico")[0]+"/"+"favicon_landing.ico":s.split("/favicon.ico")[0]+"/"+"favicon.ico";
			favicon.href=newHref;
		}
	},
	watch: {
		$route(to, from) {
			var now=this.$route.path;
			let favicon=document.querySelector('link[rel="icon"]');
			console.log('favicon_watch', favicon);
			var s=favicon.href;
			var newHref;
			if (now=="/landing") {
				this.nowPage="landing";
				newHref=s.split("/favicon.ico")[0]+"/"+"favicon_landing.ico"
			} else {
				this.nowPage=now.split("/")[1];
				newHref=s.split("/favicon.ico")[0]+"/"+"favicon.ico"
			}
			console.log('newHref_watch', newHref);
			favicon.href=newHref;
		}
	},
	methods: {
		download() {

		}, menuHandler(str) {
			clearInterval(this.scrollTime)
			var scrollT=document.querySelector('.wrap');
			var item=document.querySelector("#"+str).offsetTop;
			var totalH=document.querySelector(".landing").offsetHeight
			var lastH=document.querySelector(".landing_info:last-child").offsetHeight
			var mh=this.screenH>lastH? totalH-this.screenH:totalH-lastH
			if (item>scrollT.scrollTop) {
				this.downScroll(scrollT, item, mh);
			} else {
				this.upScroll(scrollT, item);
			}
		},
		downScroll(sc, go, mh) {
			var count=30
			if (Math.abs(go-sc.scrollTop)>1000) {
				count=60
			}
			this.scrollTime=setInterval(() => {
				sc.scrollTop+=count
				if (sc.scrollTop>=mh) {
					clearInterval(this.scrollTime)
				}
				if (!this.headerBg&&sc.scrollTop>=this.screenH-60) {
					this.headerBg=true
				}
				if (sc.scrollTop>=go) {
					sc.scrollTop=go
					clearInterval(this.scrollTime)
				}
			}, 1);
		},
		upScroll(sc, go) {
			var count=30
			if (Math.abs(go-sc.scrollTop)>1000) {
				count=60
			}
			this.scrollTime=setInterval(() => {
				sc.scrollTop-=count
				if (this.headerBg&&sc.scrollTop<this.screenH-60) {
					this.headerBg=false
				}
				if (sc.scrollTop<=go) {
					sc.scrollTop=go
					clearInterval(this.scrollTime)
				}
			}, 1);
		},
		scrollHandler() {
			var sc=this.$refs.wrap
			if (!this.headerBg&&sc.scrollTop>=this.screenH-60) {
				this.headerBg=true
			}
			if (this.headerBg&&sc.scrollTop<this.screenH-60) {
				this.headerBg=false
			}
		},
		gotopHandler() {
			var scrollT=document.querySelector('.wrap');
			this.upScroll(scrollT, 0)
		}
	}

}
</script>