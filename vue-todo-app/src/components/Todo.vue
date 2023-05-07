<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">{{ task.label }}
                <button @click="deleteTask(task.id)">Delete Task</button>

            </li>
        </ul>
        <input type="text" v-model="newTask.label">
        <button @click="addTask()">Add Task</button>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            tasks: [{ label: 'Learn Vue.js', id: '1' }, { label: 'Build an app', id: '2' }, { label: 'Deploy to production', id: '3' }],
            newTask: { id: String(Math.random() * 1000), label: "" }
        }
    },
    methods: {
        addTask() {
            if (this.newTask.label !== '') {
                this.tasks.push(this.newTask)
                this.newTask = { id: String(Math.random() * 1000), label: "" }
            }
        },
        deleteTask(id: string) {
            this.tasks = this.tasks.filter(t => t.id !== id)
        }
    }
}
</script>
  