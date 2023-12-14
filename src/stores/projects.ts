import { type Writable, writable } from "svelte/store";
import type { Project } from './project';

export const DEFAULT_PAGE_SIZE = 25;

export interface ProjectListData {
	tasks: Project[]
}
export interface ProjectListStore {
	subscribe: Writable<Project[]>["subscribe"];
	sync(): Promise<void>;
}

function createProjectListStore(): ProjectListStore {
	const store = writable([] as Project[]);
	return {
		subscribe: store.subscribe,
		sync: async () => {
			store.set(mockData.projects);
		}
	} as ProjectListStore;
}

const mockData = {
	projects: [
		{
			"id": "sfg5jcHjKs8",
			"name": "Learn bass",
			"dueDate": "",
			"startDate": "",
			"tags": ["musicianship"],
			"priority": "P1",
			"notes": "",
		},
		{
			"id": "98d4dfgkjdfgr4",
			"name": "Inbox",
			"dueDate": "",
			"startDate": "",
			"tags": [],
			"priority": "",
			"notes": "",
		},
		{
			"id": "24545whgKj34",
			"name": "Test Project",
			"dueDate": "2025-01-12 18:24:32",
			"startDate": "2022-01-20 17:00:00",
			"tags": ["household"],
			"priority": "P0",
			"notes": "Some notes to keep track of...",
		}
	]
};

const projects = createProjectListStore();
export default projects;
