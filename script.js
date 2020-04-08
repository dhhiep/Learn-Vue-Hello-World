var app = new Vue({
  el: '#app',
  data: {
    message: 'VueJS - HelloWorld!!!',
    hover_title: 'Current time is ' + new Date().toLocaleTimeString()
  }
})