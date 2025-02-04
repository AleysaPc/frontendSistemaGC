import { Routes, Route } from "react-router-dom"; 
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RegistroPage } from "../pages/recibido/RegistroPage"
import { RegistroFormPage } from "../pages/recibido/RegistroFormPage"



//Login y otras páginas
const Login = lazy(() => import("@/components/Login"));
const Register = lazy(() => import("@/components/Register"));
const Home = lazy(() => import("@/pages/home"));
const PasswordResetRequest = lazy(() =>
  import("@/components/PasswordResetRequest")
);
const PasswordReset = lazy(() => import("@/components/PasswordReset"));


const FallbackComponent = () => <div>Hubo un error al cargar la página</div>;

const AppRoutes = () => {
  return (
    <ErrorBoundary fallbackRender={() => <FallbackComponent />}> {/* Cambio aquí */}
      <Suspense fallback={<div className="spinner">Cargando Página</div>}>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/password-reset-request" element={<PasswordResetRequest />} />
          <Route path="/password-reset" element={<PasswordReset />} />

          <Route path="/registro" element={<RegistroPage />}/>
          <Route path="/nuevo-registro" element={<RegistroFormPage />}/>

        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
