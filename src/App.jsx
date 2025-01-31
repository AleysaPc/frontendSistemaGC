import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; //Biblioteca para multiples rutas 1
import { RegRecibidoPage } from "./pages/RegRecibidoPage"; //2
import { RegRecibidoFormPage } from "./pages/RegRecibidoFormPage"; //3
import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "../src/routes/AppRoutes";

const queryClient = new QueryClient();

/*Pagina Principal*/
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/*<Navigation />*/}

        <Routes>
          <Route path="/" element={<AppRoutes />} />
          {/*<Route path="/register" element={<Register />} />

          <Route path="/" element={<Navigate to="/registro-recibido" />} />
          <Route path="/registro-recibido" element={<RegRecibidoPage />} />
          <Route
            path="/registro-recibido-form"
            element={<RegRecibidoFormPage />} */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
