export type Tag = string;
// export enum Priority {
// 	P0 = "P0",
// 	P1 = "P1",
// 	P2 = "P2",
// }

export type Task = {
	id: string,
	name: string,
	dueDate: string, // Date,
	startDate: string, // Date,
	tags: Tag[],
	priority: string, // Priority,
	notes: string,
	completed: boolean
};