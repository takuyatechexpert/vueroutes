const Top = {template: '<div>Top</div>'}
const User = {template: '<div>User</div>'}
// ルーティングの遷移先で表示するコンポーネントを定義している

const router = new VueRouter({
  routes: [
    {
      path: '/top',
      // pathはルーティング
      component: Top
      // componentは表示させるコンポーネント
      // 上記で定義している
    },
    {
      path: '/users',
      component: User
    }
  ]
})
const app = new Vue({
  // router: router,
  // 省略できる
  router,
  // routerがないとなぜかrouter-linkタグが消える
  el: '#app',
  data:{
    items: null,
    keyword: '',
    message: ''
  }

}).$mount('#app')
// elで#appを指定してない場合は$mountが必要
// 定義している場合はいらないっぽい