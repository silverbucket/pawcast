import { type Writable, writable } from "svelte/store";
import type { Task } from './task';

export const DEFAULT_PAGE_SIZE = 25;

export interface TaskListData {
	tasks: Task[]
}
export interface TaskListStore {
	subscribe: Writable<Task[]>["subscribe"];
	sync(): Promise<void>;
}

function createTaskListStore(): TaskListStore {
	const store = writable([] as Task[]);
	return {
		subscribe: store.subscribe,
		sync: async () => {
			store.set(mockData.tasks);
		}
	} as TaskListStore;
}

const mockData = {
	tasks: [
		{
			"id": "8xhd84jcHjKs8",
			"name": "Go to the store",
			"dueDate": "2024-11-27 15:24:32",
			"startDate": "2024-11-27 12:00:00",
			"tags": ["next", "household"],
			"priority": "P3",
			"notes": "And then the thing...",
			"completed": false
		},
		{
			"id": "98d4f4fg5h09gr4",
			"name": "Be that guy",
			"dueDate": "2024-11-27 15:24:32",
			"startDate": "2024-11-27 12:00:00",
			"tags": ["next", "household"],
			"priority": "P3",
			"notes": "",
			"completed": false
		},
		{
			"id": "874jf74hHd34wt",
			"name": "Run a mile",
			"dueDate": "2024-11-27 15:24:32",
			"startDate": "2024-11-27 12:00:00",
			"tags": [],
			"priority": "P3",
			"notes": "And then the thing...",
			"completed": true
		},
		{
			"id": "5ewhg4jcHKj34",
			"name": "Fake the moon landing",
			"dueDate": "2023-04-22 11:24:32",
			"startDate": "2023-04-20 10:00:00",
			"tags": ["next", "space"],
			"priority": "P0",
			"notes": "And then the thing...",
			"completed": false
		}
	]
};

const tasks = createTaskListStore();
export default tasks;
