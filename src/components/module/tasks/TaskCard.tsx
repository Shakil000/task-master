import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps{
    task: ITask;
}

export default function TaskCard({task} : IProps){
    return (
        <div className="border px-32 py-5 rounded-md">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                    <div className={cn("size-3 rounded-full",{
                        "bg-green-500" : task.priority === "Low",
                        "bg-yellow-500" : task.priority === "Medium",
                        "bg-red-500" : task.priority === "High",
                    })}></div>
                        <h1 className="font-bold text-2xl">{task.title}</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Checkbox className="bg-red-600 h-7 w-7"></Checkbox>
                        <Button variant="Link" className="p-0 text-red-500">
                            <Trash2></Trash2>
                        </Button>
                    </div>
                </div>
            <p className="mt-5">{task.description}</p>
        </div>
    );
};
