const { writable } = require("svelte/store");

function createTasks(initialValue = []) {
	const { subscribe, update } = writable(initialValue);

	return {
		subscribe,
		add(input, id) {
			const task = {
				id,
				done: false,
				description: input.value,
			};
			update((prev) => {
				return [task, ...prev];
			});
		},

		remove(task) {
			update((prev) => {
				return prev.filter((t) => t !== task);
			});
		},

		toggle(task, done) {
			task.done = done;
			this.remove(task);
			update((prev) => {
				return prev.concat(task);
			});
		},
	};
}

module.exports = createTasks;
