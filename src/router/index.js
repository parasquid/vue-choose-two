import Vue from 'vue'
import Router from 'vue-router'
import CategoriesContainer from '@/components/CategoriesContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: CategoriesContainer
    }
  ]
})
