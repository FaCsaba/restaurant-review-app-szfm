import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Index } from "./pages/index.page";
import "./app.css";

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Index />
        </QueryClientProvider>
    );
}