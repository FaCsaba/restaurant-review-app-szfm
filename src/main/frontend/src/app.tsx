import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Index } from "./pages/index/index.page";
import "./app.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import Login from "./pages/login/login.component";
import Register from "./pages/register/register.component";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 60,
            refetchOnWindowFocus: false,
        }
    }
})

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: "*",
        loader: () => redirect("/")
    }
])

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}