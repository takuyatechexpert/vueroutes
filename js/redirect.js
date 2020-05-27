const A ={template: '<h2>A</h2>'}
const B ={template: '<h2>B</h2>'}
const router = new VueRouter({
  routes:[
    {
      path: '/a',
      // name: 'users',
      redirect: '/b',
      component: A,

    },
    {
      path: '/b',
      // name: 'profile',
      component: B
    }
  ]
})

var app = new Vue({
  el:'#app',
  router
})