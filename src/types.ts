export interface ITask{
    id: string,
    title: string,
    dueDate: string,
    description: string,
    isCompleted: boolean,
    priority: "High" | "Medium" | "Low",
}