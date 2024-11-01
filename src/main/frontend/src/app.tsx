import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Index } from "./pages/index.page";

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Index />
        </QueryClientProvider>
    );
}