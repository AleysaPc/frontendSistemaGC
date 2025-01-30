//Login
const Login = lazy(() => import("@/components/Login"));
const Register = lazy(() => import("@/components/Register"));
const PasswordResetRequest = lazy(() =>
  import("@/components/PasswordResetRequest")
);
const PasswordReset = lazy(() => import("@/components/PasswordReset"));

// Usuarios
const UsersPage = lazy(() => import("@/pages/usuarios/UsersPage"));
const FormUsuario = lazy(() => import("@/components/usuarios/FormUsuario"));

const AppRoutes = () => {
    return (
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Suspense
          fallback={<div className="spinner">Cargando Pagina Espere</div>}
        >
          <Routes>
            {/* Rutas publicas */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/request/password_reset"
                element={<PasswordResetRequest />}
              />
              <Route path="/password-reset/:token" element={<PasswordReset />} />
            </Route>
  
            {/* Rutas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
            
                {/* Usuarios */}
                <Route path="/usuarios/lista" element={<UsersPage />} />
                <Route path="/usuarios/formUsuario" element={<FormUsuario />} />
                <Route path="/usuarios/roles" element={<RealizarVenta />} />
                <Route path="/usuarios/agregar" element={<RealizarVenta />} />
                <Route path="/usuarios/administrar" element={<RealizarVenta />} />
              </Route>
            </Route>
            {/* Ruta para manejar páginas no encontradas */}
            <Route path="*" element={<div>Página no encontrada</div>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    );
  };
  
  export default AppRoutes;