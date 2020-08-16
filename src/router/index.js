import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routerHistory = createWebHashHistory()

const router = createRouter({
	history: routerHistory,
	routes: [{
			path: '/',
			component: Home
		},
		{
			path: '/contact',
			component: Contact
		}
	]
})

export default router