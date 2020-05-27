const Top = {template: '<div>Top</div>'}
const User = {template: '<div>User {{ $route.params.userId }}</div>'}
// {{ $route.params.userId }}でURLparamsのuserIdを表示する事ができる
// userIdはVueRouterで定義している
const Test = {template: '<div>Test</div>'}
// ルーティングの遷移先で表示するコンポーネントを定義している
// templateは固有のもの
// constがないとなぜか動作しなくなる

const router = new VueRouter({
  // view側でpathを指定
  // pathの遷移先をVueRouterで作るイメージ
  routes: [
    {
      path: '/top',
      // pathはルーティング
      name: 'top',
      component: Top
      // componentは表示させるコンポーネント
      // 上記で定義している
    },
    {
      path: '/users/:userId',
      // URLパラメータから値を取得する為に:userIdでとる事ができる
      name: 'user',
      component: User
    },
    {
      path: '/test',
      name: 'test',
      component: Test
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