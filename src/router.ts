import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import AboutView from './views/about.vue'
import Contact from './views/contact'
import Projects from './views/projects.vue'
import OngoingProjects from './views/ongoing-projects.vue'

const routes = [
  { path: '/', component: HomeView, name:'Home' },
  { path: '/about', component: AboutView, name:'about' },
  { path: '/contact', component: Contact, name:'contact' },
  { path: '/ongoing-projects', component: OngoingProjects, name:'ongoing projects' },
  { path: '/projects', component: Projects, name:'projects' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
