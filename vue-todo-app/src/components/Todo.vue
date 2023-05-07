<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
        </ul>
        <input type="text" v-model="newTask">
        <button @click="addTask()">Add Task</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tasks: ['Learn Vue.js', 'Build an app', 'Deploy to production'],
            newTask: ''
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask.trim())
                this.newTask = ''
            }
        }
    }
}
</script>
  