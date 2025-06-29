import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    task: ITask[],
    filter: "all" | "High" | "Medium" | "Low";
}

const initialState : InitialState = {
    task: [
        {
        id: "123",
        title: "Initialize frontend",
        description: "I am learning redux",
        dueDate: "2025",
        isCompleted: false,
        priority: "High",
    },
        {
        id: "1234",
        title: "Connect to Github",
        description: "Trying to learn redux",
        dueDate: "2025",
        isCompleted: false,
        priority: "Low",
    },
        {
        id: "1235",
        title: "Creating Backend server with express",
        description: "Trying to create server with express",
        dueDate: "2025",
        isCompleted: false,
        priority: "Medium",
    },
    ],
    filter: "all",
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    }

});


export const selectTask = (state: RootState) => {
    return state.tasks.task;
}

export const selectFilter = (state: RootState) => {
    return state.tasks.filter;
}
export default taskSlice.reducer;

//video 8 and 4m 13s