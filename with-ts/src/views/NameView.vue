<template>
  <div class="NameView">
    <h2>What's ur name?</h2>
    <input
      type="text"
      class="name__input"
      v-model="name"
    />
    <button
      class="btn"
      @click="setName"
    >
      Set Name
    </button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'

const name = ref<string>('')

function checkName() {
  const storageName = localStorage.getItem('name')
  if (storageName) {
    router.push('/todo')
  }
}

function setName() {
  localStorage.setItem('name', name.value)
  router.push('/todo')
}

onMounted(() => {
  checkName()
})
</script>
<style lang="scss" scoped>
.NameView {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.name__input {
  padding: 5px 10px;
  font-size: 18px;
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
