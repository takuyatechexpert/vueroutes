const A ={template: '<h2>A</h2>'}
const B ={template: '<h2>B</h2>'}
const router = new VueRouter({
  routes:[
    {
      path: '/a',
      // redirect: '/b',
      redirect: {name: 'page-b'},
      // nameにredirectするパターン
      component: A,

    },
    {
      path: '/b',
      name: 'page-b',
      component: B
    }
  ]
})

var app = new Vue({
  el:'#app',
  router
})