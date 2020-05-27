const User ={
  template: `
    <div class="user">
      <h2>User {{$route.params.userId}}</h2>
      <router-view></router-view>
      </div>
      `}
      // templateの中でrouter-viewを使用できる様に記述する
      // routeとrouterと記述すると事があるので注意
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
    // {
    //   path: '/',
    //   // name: 'home',
    //   component: Home
    // },
    // 「/」の記述はいらない？
    {
      path: '/users/:userId',
      // name: 'users',
      component: User,
      children:[
        {
          path: '/users/:userId/profile',
          // name: 'profile',
          component: Profile
        },
        {
          path: '/users/:userId/posts',
          // name: 'posts',
          component: Posts
        }
      ]
      }
  ]
})

var app = new Vue({
  el:'#app',
  router
})