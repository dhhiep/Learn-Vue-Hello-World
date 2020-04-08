var app = new Vue({
  el: '#app',
  data: {
    message: 'VueJS - HelloWorld!!!',
    hover_title: 'Current time is ' + new Date().toLocaleTimeString()
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Learn something' }
    ]
  }
})

var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello World!!!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
})

var app6 = new Vue({
  el: '#app6',
  data: {
    message: 'This is a short message.'
  }
})