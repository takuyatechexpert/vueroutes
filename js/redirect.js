const Profile ={
    template: `
      <div class="profile">
        <h2>Profile {{$route.params.userId}}</h2>
      </div>
      `}
const Posts ={
    template: `
      <div class="posts">
        <h2>Posts {{$route.params.userId}}</h2>
      </div>
      `}
const router = new VueRouter({
  routes:[
    {
      path: '/a',
      // name: 'users',
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