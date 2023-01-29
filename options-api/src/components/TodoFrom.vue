<template>
  <form
    class="form"
    @submit.prevent
  >
    <input
      type="text"
      v-model="title"
    />
    <div class="radio">
      <input
        type="radio"
        id="personal"
        value="personal"
        v-model="category"
      />
      <label for="personal">Personal</label>

      <input
        type="radio"
        id="business"
        value="business"
        v-model="category"
      />
      <label for="business">Business</label>
    </div>
    <button
      @click="addTodo"
      class="btn"
    >
      Create Todo
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      category: ''
    }
  },

  methods: {
    addTodo() {
      const newTodo = {
        id: Date.now(),
        title: this.title,
        category: this.category
      }

      this.$emit('add', newTodo)
      this.title = ''
      this.category = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 5px 10px;
    font-size: 18px;
  }
  .radio {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
  }
}

.btn {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
.btn:hover {
  border-color: #646cff;
}
.btn:focus,
.btn:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
