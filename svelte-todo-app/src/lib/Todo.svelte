<script>
    let tasks = [
        { label: "Learn Svelte", id: "1" },
        { label: "Build an app", id: "2" },
        { label: "Deploy to production", id: "3" },
    ];
    let newTask = { label: "", id: "" };

    function addTask() {
        if (newTask.label !== "") {
            tasks = [...tasks, newTask];
            newTask = { label: "", id: String(Math.random() * 1000) };
        }
    }

    function deleteTask(id) {
        tasks = tasks.filter((task) => task.id !== id);
    }
</script>

<h1>Todo List</h1>
<ul>
    {#each tasks as task}
        <li>
            {task.label}
            <button on:click={() => deleteTask(task.id)}>Delete Task</button>
        </li>
    {/each}
</ul>
<input type="text" bind:value={newTask.label} />
<button on:click={addTask}>Add Task</button>
