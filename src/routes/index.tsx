import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App/>,
        Component: App,
        children: [
            {
                // path: "/task",
                index: true,
                element: <Task></Task>
            },
            {
                path: "/task",
                element: <Task></Task>
            },
            {
                path: "/user",
                element: <User></User>
            },
        ]
    },
]);

export default router;