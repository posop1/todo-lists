<template>
  <div class="todo__list">
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove="$emit('remove', todo)"
    />
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue'

export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  }
}
</script>
<style lang="scss" scoped>
.todo__list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}
</style>
