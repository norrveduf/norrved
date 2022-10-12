// import { createApp } from 'vue'
import menujson from "./menu.json" assert { type: "json" };
      
Vue.createApp({
	data() {
		return {
			menu: menujson,
			category: 0,
			timerCount: 10,
			animationTrigger: false
		}
	},

	methods: {
		beforeEnter(el) {
			el.style.opacity = 0
			el.style.transform = "translateY(30px)"
		},

		enter(el) {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.75,
				delay: el.dataset.index*0.15
			});
		}
	}
}).mount('#menuApp');