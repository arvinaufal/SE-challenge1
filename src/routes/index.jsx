import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../components/pages/Home";
import DetailPost from "../components/pages/Detail";
import AddPost from "../components/pages/AddPost";
import EditPost from "../components/pages/EditPost";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/posts/:post_id",
        element: <DetailPost />,
    },
    {
        path: "/add-post",
        element: <AddPost />,
    },
    {
        path: "/edit-post/:post_id",
        element: <EditPost />,
    },
]);