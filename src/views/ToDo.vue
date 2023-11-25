<template>
  <div class="ToDo">
    <input v-model="newTask" @keyup.enter="addTask">
    <button @click="addTask">追加</button>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="removeTask(task.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Task {
  id: number;
  title: string;
}

export default defineComponent({
  setup() {
    const newTask = ref('');
    const tasks = ref<Task[]>([]);

    const addTask = () => {
      if (newTask.value.trim() === '') return;
      tasks.value.push({ id: Date.now(), title: newTask.value });
      newTask.value = '';
    };

    const removeTask = (id: number) => {
      tasks.value = tasks.value.filter(task => task.id !== id);
    };

    return { newTask, tasks, addTask, removeTask };
  }
});
</script>

<style>



/* スタイルをここに追加 */
</style>

