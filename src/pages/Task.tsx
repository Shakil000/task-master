import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

function Tasks() {
    const Tasks = useAppSelector( selectTask)
    const filter = useAppSelector(selectFilter)

    console.log(Tasks);
    console.log(filter);

    return (
        <div className="mx-auto mx-w-7xl px-5 mt-20">
         <div>
            <h1>Task</h1>
         </div>
         <div className="space-y-5 mt-5">
            {Tasks.map( (t) =>(
                <TaskCard task={t}></TaskCard>
            ))}
         </div>
        </div>
    );
};

export default Tasks;