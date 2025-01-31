import { BrowserRouter } from "react-router-dom"; //Biblioteca para multiples rutas 1
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "../src/routes/AppRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
