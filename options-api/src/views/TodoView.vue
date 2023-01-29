<script>
import TodoForm from '@/components/TodoFrom.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    TodoForm,
    TodoList
  },

  data() {
    return {
      todos: [],
      name: localStorage.getItem('name'),
      message: 'change name'
    }
  },

  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo)
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
    checkName() {
      if (!this.name) {
        this.$router.push('/')
      }
    },
    changeName() {
      localStorage.removeItem('name')
      this.$router.push('/')
    }
  },

  watch: {
    todos: {
      handler(newTodo) {
        localStorage.setItem('todos', JSON.stringify(newTodo))
      },
      deep: true
    }
  },

  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
    this.checkName()
  }
}
</script>

<template>
  <div class="container">
    <header>
      <h2>
        Hi!
        <span
          :title="message"
          @click="changeName"
          >{{ name }}</span
        >
      </h2>
    </header>
    <main>
      <TodoForm @add="addTodo" />
      <TodoList
        :todos="todos"
        @remove="removeTodo"
      />
    </main>
  </div>
</template>

<style scoped lang="scss">
header {
  margin-bottom: 50px;

  span {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: red;
    }
  }
}
</style>
