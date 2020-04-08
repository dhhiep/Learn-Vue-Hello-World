Vue.component('todo-app', {
  template: '\
    <li>\
      {{ title }}\
      - \
       <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var vmTodoApp = new Vue({
  el: '#todoApp',
  data: {
    todos: [
      {
        id: 1,
        title: 'First Item'
      }
    ],
    tmpNewTitle: '',
    nextId: 2,
  },
  methods: {
    addNewItem () {
      this.todos.push({
        id: this.nextId++,
        title: this.tmpNewTitle
      })
      this.tmpNewTitle = ''
    },
    removeItem (item, index) {
      this.todos.splice(index, 1)
    }
  }
})
