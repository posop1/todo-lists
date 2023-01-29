<template>
  <div class="item">
    <div class="todo__info">
      <span>{{ todo.title }}</span>
      <span
        class="type"
        v-if="todo.category"
        >type: {{ todo.category }}</span
      >
    </div>
    <button
      class="btn"
      @click="$emit('remove', todo)"
    >
      delete
    </button>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 10px;
  border-radius: 10px;
  background: #1a1a1a;

  .todo__info {
    display: flex;
    flex-direction: row;
    gap: 8px;

    .type {
      opacity: 0.6;
    }
  }
}

.done {
  text-decoration: line-through;
}
.btn {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;

  transition: 0.3s;

  &:hover {
    background: #1a1a1a;
  }
}
</style>

<!-- 1a1a1a -->
