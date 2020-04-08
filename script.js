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

var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Cà pháo' },
      { id: 1, text: 'Mắm tôm' },
      { id: 2, text: 'Miễn ăn được là được' }
    ]
  }
})