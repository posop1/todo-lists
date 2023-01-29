<template>
  <div class="todo__list">
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove="$emit('remove', todo)"
    />
    <div v-if="todos.length === 0">
      <h3>List is empty!</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ITodo } from '@/types/todo'
import TodoItem from './TodoItem.vue'

const { todos } = defineProps<{
  todos: ITodo[]
}>()
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
