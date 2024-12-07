import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Index } from "./pages/index/index.page";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router";
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

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Index />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}