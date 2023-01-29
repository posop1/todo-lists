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
<script setup>
import { onMounted, ref, watch } from 'vue'
import TodoForm from '@/components/TodoFrom.vue'
import TodoList from '@/components/TodoList.vue'
import router from '@/router'

const todos = ref([])
const name = ref(localStorage.getItem('name'))
const message = ref('change name')

function addTodo(newTodo) {
  todos.value.push(newTodo)
}
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
function checkName() {
  if (!name.value) {
    router.push('/')
  }
}
function changeName() {
  localStorage.removeItem('name')
  router.push('/')
}

watch(
  todos,
  (newTodo) => {
    localStorage.setItem('todos', JSON.stringify(newTodo))
  },
  {
    deep: true
  }
)

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
  checkName()
})
</script>
<style lang="scss" scoped>
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
