<script>
    let tasks = ["Learn Svelte", "Build an app", "Deploy to production"];
    let newTask = "";

    function addTask() {
        if (newTask.trim() !== "") {
            tasks = [...tasks, newTask.trim()];
            newTask = "";
        }
    }
</script>

<h1>Todo List</h1>
<ul>
    {#each tasks as task, index}
        <li>{task}</li>
    {/each}
</ul>
<input type="text" bind:value={newTask} />
<button on:click={addTask}>Add Task</button>
