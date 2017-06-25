import scarab from '../scarab.config.json';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSmoothScroll from 'vue-smoothscroll';
import App from './App.vue';

import Theme from './views/Theme.vue';
import Modules from './views/Modules.vue';

Vue.use(VueRouter);
Vue.use(VueSmoothScroll);

const routes = [
	{ path: '/', redirect: '/theme' },
	{ path: '/theme', component: Theme },
	{ path: '/modules', component: Modules }
];

const router = new VueRouter({
	mode: 'hash',
	routes
});

const app = new Vue({
	router,
	el: '#app',
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent () {
			return routes[this.currentRoute] || Theme
		}
	},
	render: h => h(App)
})
